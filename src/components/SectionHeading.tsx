type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  text?: string;
};

export default function SectionHeading({ eyebrow, title, text }: SectionHeadingProps) {
  return (
    <div className="section-head">
      <p className="kicker">{eyebrow}</p>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}
