export function SectionHeading({ eyebrow, title, align = "center" }: { eyebrow: string; title: string; align?: "center" | "start" }) {
  return (
    <div className={`section-heading ${align === "start" ? "align-start" : ""}`}>
      <span>{eyebrow}</span>
      <h2>{title}</h2>
    </div>
  );
}
