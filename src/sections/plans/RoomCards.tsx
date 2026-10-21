import { roomPlans } from '../../data/site';

export default function RoomCards() {
  return (
    <div className="salas-grid">
      {roomPlans.map(plan => (
        <article className={`sala-card ${plan.variant}`} key={plan.name}>
          <div className="sala-card-top">
            <div className="name">{plan.name}</div>
            <div className="price">R${plan.price}<small>{plan.unit}</small></div>
          </div>
          <div className="sala-gallery">
            {plan.images.map(([image, alt]) => <img key={image} src={`/assets/${image}`} alt={alt} loading="lazy" />)}
          </div>
          <div className="sala-card-body">
            <div className="item">Serviço de copa</div>
            <div className="item">Serviço de impressão</div>
            <div className="item">Serviço de recepção</div>
            <a className={`btn ${plan.variant === 'black' ? 'btn-primary' : 'btn-ghost'}`} href={`https://api.whatsapp.com/send?phone=5571993392059&text=${plan.whatsapp}`} target="_blank" rel="noreferrer">Quero reservar</a>
          </div>
        </article>
      ))}
    </div>
  );
}
