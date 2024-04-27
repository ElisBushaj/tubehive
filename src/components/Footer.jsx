export default function Footer() {
	return (
		<footer className="flex flex-col text-white">
			<div className="flex flex-wrap justify-between md:justify-normal px-4 py-6 sm:px-14 md:space-x-28 lg:space-x-32 bg-gradient-to-b from-black to-gray-950">
				<div className="mb-5 md:mb-3 mr-6 md:mr-0 flex-col flex ">
					<h3 className="text-lg font-bold mb-2">Tools</h3>
					<div className="flex flex-col text-stone-300">
						<a
							className="hover:text-secondary duration-300 transition-colors"
							href="/"
						>
							TubeHive - YouTube MP3 Downloader
						</a>
						{/* <a
              className="hover:text-secondary duration-300 transition-colors"
              href="https://gramhive.netlify.app"
            >
              GramHive - Instagram Downloader
            </a> */}

						<a
							className="hover:text-secondary duration-300 transition-colors"
							href="https://tikhive.netlify.app/"
						>
							TikHive - Tiktok Video Downloader
						</a>
					</div>
				</div>

				{/* <div className="mb-5 md:mb-3 mr-6 md:mr-0">
          <h3 className="text-lg font-bold mb-2">Legal</h3>
          <ul className="list-none text-stone-300">
            <li>
              <Link href="/terms-of-service">Terms of Service</Link>
            </li>
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div className="mb-5 md:mb-3 mr-6 md:mr-0">
          <h3 className="text-lg font-bold mb-2">Support</h3>
          <ul className="list-none text-stone-300">
            <li>
              <Link href="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div> */}
			</div>
			<div className="flex flex-col items-center justify-center py-4 space-y-2 text-sm bg-gray-950">
				<p>We are not affiliated with YouTube.</p>
				<p>© 2023 TubeHive 1.0.2. All rights reserved.</p>
			</div>
		</footer>
	);
}
