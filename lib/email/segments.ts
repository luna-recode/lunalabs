import type { Resend } from "resend";

// Resend deprecated Audiences in favor of Segments (existing audience IDs
// carried over as segment IDs), so RESEND_AUDIENCE_ID still works as the
// newsletter segment until RESEND_NEWSLETTER_SEGMENT_ID is set.
export function newsletterSegmentId(): string | undefined {
  return (
    process.env.RESEND_NEWSLETTER_SEGMENT_ID ?? process.env.RESEND_AUDIENCE_ID
  );
}

export function contactSegmentId(): string | undefined {
  return process.env.RESEND_CONTACT_SEGMENT_ID;
}

// Outcome of an upsert, used to pick which email (if any) the person gets:
// - created:        brand-new contact → welcome email
// - joined:         existing contact, new to this segment → welcome email
// - resubscribed:   they had unsubscribed and came back → welcome-back email
// - already-member: nothing changed → no email (never re-spam a subscriber)
export type SegmentJoinResult =
  | "created"
  | "joined"
  | "resubscribed"
  | "already-member";

export async function upsertContactIntoSegment(
  resend: Resend,
  opts: {
    email: string;
    segmentId: string;
    firstName?: string;
    lastName?: string;
  },
): Promise<SegmentJoinResult> {
  const { email, segmentId, firstName, lastName } = opts;

  const existing = await resend.contacts.get({ email });

  if (existing.error || !existing.data) {
    const created = await resend.contacts.create({
      email,
      firstName,
      lastName,
      unsubscribed: false,
      segments: [{ id: segmentId }],
    });
    if (created.error) {
      throw new Error(
        `Resend contact create failed (${created.error.name}): ${created.error.message}`,
      );
    }
    return "created";
  }

  const memberships = await resend.contacts.segments.list({ email });
  if (memberships.error) {
    throw new Error(
      `Resend segment list failed (${memberships.error.name}): ${memberships.error.message}`,
    );
  }
  const alreadyMember = memberships.data.data.some((s) => s.id === segmentId);

  if (!alreadyMember) {
    const added = await resend.contacts.segments.add({ email, segmentId });
    if (added.error) {
      throw new Error(
        `Resend segment add failed (${added.error.name}): ${added.error.message}`,
      );
    }
  }

  // Backfill names the contact record doesn't have yet (e.g. they subscribed
  // with just an email, then later sent the contact form with their name).
  const nameUpdate: { firstName?: string; lastName?: string } = {};
  if (firstName && !existing.data.first_name) nameUpdate.firstName = firstName;
  if (lastName && !existing.data.last_name) nameUpdate.lastName = lastName;

  if (existing.data.unsubscribed || Object.keys(nameUpdate).length > 0) {
    const updated = await resend.contacts.update({
      email,
      ...nameUpdate,
      ...(existing.data.unsubscribed ? { unsubscribed: false } : {}),
    });
    if (updated.error) {
      throw new Error(
        `Resend contact update failed (${updated.error.name}): ${updated.error.message}`,
      );
    }
  }

  if (existing.data.unsubscribed) return "resubscribed";
  return alreadyMember ? "already-member" : "joined";
}
