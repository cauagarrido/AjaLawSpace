import { useEffect, useRef, useState } from 'react';
import Brand from './Brand';
import NavLinks from './NavLinks';

export default function MobileHeader() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    if (open) closeButton.current?.focus();
    return () => document.body.classList.remove('menu-open');
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
    menuButton.current?.focus();
  };

  return (
    <>
      <header className="topbar">
        <div className="brand"><Brand /></div>
        <button ref={menuButton} className="menu-btn" type="button" aria-label="Abrir menu" aria-expanded={open} aria-controls="mmenu" onClick={() => setOpen(true)}>
          <span /><span /><span />
        </button>
      </header>
      <div className={`mobile-menu${open ? ' open' : ''}`} id="mmenu" aria-hidden={!open}>
        <div className="mobile-menu-top">
          <Brand />
          <button ref={closeButton} className="close-btn" type="button" aria-label="Fechar menu" onClick={closeMenu}>×</button>
        </div>
        <nav aria-label="Navegação principal"><NavLinks onNavigate={() => setOpen(false)} /></nav>
      </div>
    </>
  );
}
