import footer from "../../data/footer.json";

export default function Footer({}) {
  return (
    <footer className="container footer mx-auto grid gap-3 lg:grid-cols-3 justify-center text-center 2xl:pt-19 pt-8 pb-5 sm:pb-7 lg:pt-20" id="footer">
			<a href={footer.logo_url} className="flex justify-center lg:col-start-2">
				<img className="logo" src={footer.logo} alt="logo" />
			</a>
			<p className="lg:col-start-1 lg:row-start-1 lg:text-left">
				© Copyright <span>{new Date().getFullYear()}</span>{" "}
				{footer.copyright}
			</p>
			<div className="social-icon mt-3 lg:col-start-2">
				<ul className="flex gap-5 justify-center">
					{footer.social.map((link, i) => (
						<li key={i}>
							<a href={`${link.link}`}>
								<i className={`${link.social_icon} text-2xl`} aria-hidden="true">
									<span className="visually-hidden">
										{link.icon_alt}
									</span>
								</i>
							</a>
						</li>
					))}
				</ul>
			</div>
			<ul className="flex lg:flex-col justify-center lg:justify-start gap-5 lg:col-start-3 lg:row-start-1 lg:text-end">
				{footer.links.map((link, i) => (
					<li className="hover:underline hover:underline-offset-4" key={i}>
						<a href={`${link.link}`}>{link.text}</a>
					</li>
				))}
			</ul>
    </footer>
  );
}
