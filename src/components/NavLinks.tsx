import { navigationItems } from '../data/site';

type NavLinksProps = {
  onNavigate?: () => void;
};

export default function NavLinks({ onNavigate }: NavLinksProps) {
  return (
    <>
      {navigationItems.map(([id, label]) => (
        <a key={id} href={`#${id}`} onClick={onNavigate}>{label}</a>
      ))}
    </>
  );
}
