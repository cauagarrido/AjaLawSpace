import { spaceNames } from '../data/site';
import SectionHeading from '../components/SectionHeading';

export default function SpaceSection() {
  return (
    <section id="espaco">
      <SectionHeading eyebrow="Nosso espaço" title="Facilidades" text="Conheça as facilidades do prédio e do escritório Aja Lawspace." />
      <div className="espaco-grid">
        {spaceNames.map((name, index) => (
          <div className="espaco-tile" key={`${name}-${index}`} aria-label={`${name} do escritório`}>
            <div className="espaco-tile-label">{name}<small>Escritório</small></div>
          </div>
        ))}
      </div>
    </section>
  );
}
