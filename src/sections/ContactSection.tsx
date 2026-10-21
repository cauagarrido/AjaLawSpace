import type { FormEvent } from 'react';

export default function ContactSection() {
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.alert('Fale agora no WhatsApp: (71) 99339-2059.');
  };

  return (
    <section id="contato">
      <div className="contato-grid">
        <div className="contato-info">
          <p className="kicker">Contato</p>
          <h2>Fale com o Aja Lawspace.</h2>
          <p>Atendimento personalizado e totalmente virtual à sua disposição.</p>
          <div className="contato-detail">
            <div><span>Endereço</span><strong>Av. Tancredo Neves, 2539, CEO Salvador Shopping, Torre Londres, sala 902, Caminho das Árvores, Salvador/BA</strong></div>
            <div><span>WhatsApp</span><strong><a href="https://api.whatsapp.com/send/?phone=5571993392059">(71) 99339-2059</a></strong></div>
            <div><span>E-mail</span><strong><a href="mailto:contato@ajalawspace.com.br">contato@ajalawspace.com.br</a></strong></div>
          </div>
        </div>
        <form onSubmit={submit}>
          <div className="field"><label htmlFor="nome">Nome <b>*</b></label><input id="nome" name="nome" type="text" placeholder="Seu nome completo" required /></div>
          <div className="field"><label htmlFor="tel">Tel <b>*</b></label><input id="tel" name="tel" type="tel" placeholder="WhatsApp (DDD) xxxxx-xxxx" required /></div>
          <div className="field full"><label htmlFor="email">E-mail <b>*</b></label><input id="email" name="email" type="email" placeholder="voce@email.com" required /></div>
          <div className="field full">
            <label htmlFor="plano">Escolha seu plano <b>*</b></label>
            <select id="plano" name="plano" required>
              <option value="">Selecione um plano</option>
              <option>CAAB — R$107,90/mês</option>
              <option>Office — R$77,90/mês</option>
              <option>Business — R$237,90/mês</option>
              <option>Sala Silver — R$44,90/hora</option>
              <option>Sala Black — R$64,90/hora</option>
            </select>
          </div>
          <div className="field full"><label htmlFor="msg">Mensagem</label><textarea id="msg" name="msg" placeholder="Conte um pouco sobre o que você precisa" /></div>
          <div className="submit-row"><button className="btn btn-primary" type="submit">Enviar</button></div>
        </form>
      </div>
    </section>
  );
}
