import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { JsonLd } from "./json-ld";

type PageShellProps = {
  children: React.ReactNode;
  schemas?: Record<string, unknown> | Record<string, unknown>[];
};

export function PageShell({ children, schemas }: PageShellProps) {
  return (
    <>
      {schemas && <JsonLd data={schemas} />}
      <Nav />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  );
}
