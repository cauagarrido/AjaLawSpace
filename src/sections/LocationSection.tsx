import { locationItems } from '../data/site';
import SectionHeading from '../components/SectionHeading';

export default function LocationSection() {
  return (
    <section id="localizacao">
      <SectionHeading eyebrow="Localização" title="Nossa Localização" />
      <div className="local-map">
        <iframe title="Mapa do CEO Salvador Shopping" src="https://maps.google.com/maps?q=CEO%20Salvador%20Shopping%2C%20Av.%20Tancredo%20Neves%2C%202539%2C%20Salvador%2C%20BA&z=15&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
      <div className="local-list">
        {locationItems.map((item, index) => (
          <article className="local-item" key={item.image}>
            <img className="local-photo" src={`/assets/${item.image}`} alt={item.alt} loading="lazy" />
            <div className="local-copy">
              <div className="num">{String(index + 1).padStart(2, '0')}</div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          </article>
        ))}
      </div>
      <a className="btn btn-ghost location-link" href="https://goo.gl/maps/Majm99JFMiBYACXz7" target="_blank" rel="noreferrer">AV. Tancredo Neves, CEO Salvador Shopping</a>
    </section>
  );
}
