export default function Header() {
  return (
    <header className="max-w-[1280px] mx-auto header px-6 md:px-12">
      <a href="/" rel="home">
        <img
          className="logo header-logo"
          src="/images/logos/logo-wordmark-blue.png"
          alt=""
        />
      </a>
    </header>
  );
}
