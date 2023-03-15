import NextLink from 'next/link';

import { AppConfig } from '../utils/AppConfig';

const HeaderNavItem = ({ url, title }: { url: string; title: string }) => {
  return (
    <li className="header-nav-item">
      <NextLink href={url}>{title}</NextLink>
    </li>
  );
};

const Header: React.FC = () => {
  return (
    <section id="Header">
      <header className="container">Phụ tùng ô tô Hai Trung</header>
      <nav className="bg-primary">
        <ul className="container flex">
          {AppConfig.headerNav.map((item) => (
            <HeaderNavItem key={item.url} url={item.url} title={item.title} />
          ))}
        </ul>
      </nav>
    </section>
  );
};
export default Header;
