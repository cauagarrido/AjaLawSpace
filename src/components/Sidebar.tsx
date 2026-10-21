import { FaEnvelope, FaInstagram, FaWhatsapp } from 'react-icons/fa6';
import Brand from './Brand';
import NavLinks from './NavLinks';

export default function Sidebar() {
  return (
    <aside className="rail">
      <div>
        <div className="brand"><Brand /></div>
        <nav className="rail-nav" aria-label="Navegação principal"><NavLinks /></nav>
      </div>
      <div className="rail-foot">
        <a className="rail-cta" href="https://aja.conexa.app/" target="_blank" rel="noreferrer">Área do Cliente</a>
        <div className="rail-social">
          <a href="https://www.instagram.com/ajalawspace/" aria-label="Instagram" target="_blank" rel="noreferrer"><FaInstagram aria-hidden="true" /></a>
          <a href="https://api.whatsapp.com/send/?phone=5571993392059" aria-label="WhatsApp" target="_blank" rel="noreferrer"><FaWhatsapp aria-hidden="true" /></a>
          <a href="mailto:contato@ajalawspace.com.br" aria-label="E-mail"><FaEnvelope aria-hidden="true" /></a>
        </div>
        <small>CEO Salvador Shopping<br />Salvador · Bahia</small>
      </div>
    </aside>
  );
}
