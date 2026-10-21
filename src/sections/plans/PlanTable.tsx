import { monthlyPlans, planFeatures } from '../../data/site';

export default function PlanTable() {
  return (
    <div className="table-scroll" tabIndex={0} aria-label="Tabela de planos mensais. Deslize horizontalmente para comparar os planos.">
      <table className="mensal-table">
        <thead>
          <tr>
            <th />
            <th className="plan-col featured">CAAB<span className="oferta-badge">oferta</span></th>
            <th className="plan-col">Office</th>
            <th className="plan-col">Business</th>
          </tr>
        </thead>
        <tbody>
          <tr className="price-row">
            <td />
            {monthlyPlans.map(plan => <td className="price" key={plan.name}>R${plan.price}<small>{plan.unit}</small></td>)}
          </tr>
          {planFeatures.map(feature => (
            <tr key={feature.name}>
              <td className="feat-name">{feature.name}</td>
              {feature.values.map((value, index) => <td key={`${feature.name}-${index}`} className={value === null ? 'no' : 'yes'}>{value ?? ''}</td>)}
            </tr>
          ))}
          <tr className="cta-row">
            <td />
            {monthlyPlans.map((plan, index) => (
              <td key={plan.name}><a className={`btn ${index === 0 ? 'btn-primary' : 'btn-ghost'}`} href="#contato">Quero este</a></td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
