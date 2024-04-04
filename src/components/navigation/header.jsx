import { header } from '../../../data/navigation.json'; 

export default function Header() {
  return (
    <header className="max-w-[1280px] mx-auto header px-6 md:px-12 flex justify-between">
      <a href={header.logo.logo_url}>
        <img
          className="logo header-logo"
          src={header.logo}
          alt={header.logo}
        />
      </a>
      <ul className='flex gap-5'>
        {header.links.map((link, index) => {
          return (
            <li key={index}>
              <a href={link.link}>
                {link.text}
              </a>
            </li>
          );
        })}
      </ul>
    </header>
  );
}
