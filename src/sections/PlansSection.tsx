import { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import PlanTable from './plans/PlanTable';
import RoomCards from './plans/RoomCards';

type PlanTab = 'mensal' | 'salas';

export default function PlansSection() {
  const [activeTab, setActiveTab] = useState<PlanTab>('mensal');

  return (
    <section id="planos">
      <SectionHeading eyebrow="Planos" title="Planos para o seu escritório virtual e aluguel de salas." text="Conheça os planos mensais e as opções para alugar as salas Silver e Black por hora." />
      <div className="planos-tabs" role="tablist" aria-label="Opções de planos">
        <button className={`planos-tab${activeTab === 'mensal' ? ' active' : ''}`} id="tab-mensal" type="button" role="tab" aria-selected={activeTab === 'mensal'} aria-controls="mensal" onClick={() => setActiveTab('mensal')}>Planos mensais</button>
        <button className={`planos-tab${activeTab === 'salas' ? ' active' : ''}`} id="tab-salas" type="button" role="tab" aria-selected={activeTab === 'salas'} aria-controls="salas" onClick={() => setActiveTab('salas')}>Aluguel de salas</button>
      </div>
      <div className={`plan-pane${activeTab === 'mensal' ? ' active' : ''}`} id="mensal" role="tabpanel" aria-labelledby="tab-mensal" hidden={activeTab !== 'mensal'}>
        <PlanTable />
      </div>
      <div className={`plan-pane${activeTab === 'salas' ? ' active' : ''}`} id="salas" role="tabpanel" aria-labelledby="tab-salas" hidden={activeTab !== 'salas'}>
        <RoomCards />
        <div className="extra-services">
          <div className="extra-service"><div className="ic" aria-hidden="true">D</div>Digitalização</div>
          <div className="extra-service"><div className="ic" aria-hidden="true">I</div>Impressão</div>
          <div className="extra-service"><div className="ic" aria-hidden="true">C</div>Café</div>
          <div className="extra-service"><div className="ic" aria-hidden="true">+</div>Cardápio de serviços</div>
        </div>
      </div>
    </section>
  );
}
