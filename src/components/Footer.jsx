import React from "react";

const Footer = () => {
  return (
    <footer className="w-screen bg-sky-50 py-8 text-white">
      <div className="container mx-auto px-3 md:px-10">
        <div className="flex flex-col items-center space-y-6">
          <div className="social-links">
            <ul className="flex space-x-6">
              <li>
                <a
                  href="https://twitter.com/VALORANTukn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black-900 hover:text-red-500 transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <svg viewBox="0 0 1200 1227" className="w-6 h-6 fill-current">
                    <title>twitter</title>
                    <path d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@Valorant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black-900 hover:text-red-500 transition-colors duration-300"
                  aria-label="YouTube"
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                    <title>youtube</title>
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/valorant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black-900 hover:text-red-500 transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <svg
                    viewBox="0 0 13.26 13.3"
                    className="w-6 h-6 fill-current"
                  >
                    <title>instagram</title>
                    <path
                      d="M6.67 3.24a3.43 3.43 0 1 0 3.42 3.44 3.43 3.43 0 0 0-3.42-3.44Zm0 5.65a2.22 2.22 0 1 1 2.22-2.22 2.21 2.21 0 0 1-2.22 2.22Z"
                      transform="translate(-.04 .05)"
                    ></path>
                    <path
                      d="M11 3.08a.8.8 0 1 1-.8-.8.8.8 0 0 1 .8.8Z"
                      transform="translate(-.04 .05)"
                    ></path>
                    <path
                      d="M6.67 0H3.92A5 5 0 0 0 2.3.31a3.31 3.31 0 0 0-1.18.77 3.31 3.31 0 0 0-.77 1.18A5.29 5.29 0 0 0 0 3.88v5.5A5.22 5.22 0 0 0 .35 11a3.35 3.35 0 0 0 .77 1.19 3.42 3.42 0 0 0 1.18.76 4.75 4.75 0 0 0 1.62.31h5.5a4.75 4.75 0 0 0 1.58-.32 3.15 3.15 0 0 0 1.18-.76A3.35 3.35 0 0 0 13 11a5 5 0 0 0 .31-1.61V3.88A5 5 0 0 0 13 2.26a3.46 3.46 0 0 0-2-2A5 5 0 0 0 9.37 0a26.88 26.88 0 0 1-2.7 0Zm0 1.2h2.69a3.78 3.78 0 0 1 1.24.23 2.21 2.21 0 0 1 1.27 1.27 3.67 3.67 0 0 1 .23 1.23v5.39a3.78 3.78 0 0 1-.23 1.24 2.21 2.21 0 0 1-1.27 1.27 3.77 3.77 0 0 1-1.24.22H4a3.77 3.77 0 0 1-1.24-.22 2.21 2.21 0 0 1-1.27-1.27 3.78 3.78 0 0 1-.23-1.24V3.93a3.67 3.67 0 0 1 .21-1.23 2.21 2.21 0 0 1 1.27-1.27A3.78 3.78 0 0 1 4 1.2c.68.01.89 0 2.67 0Z"
                      transform="translate(-.04 .05)"
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/playvalorant/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black-900 hover:text-red-500 transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <svg viewBox="0 0 15 15" className="w-6 h-6 fill-current">
                    <title>facebook</title>
                    <path d="M15 7.54A7.5 7.5 0 1 0 6.33 15V9.73h-1.9V7.54h1.9V5.91a2.65 2.65 0 0 1 2.83-3 12.09 12.09 0 0 1 1.68.14v1.86H9.9a1.09 1.09 0 0 0-1.23 1.18V7.5h2.08l-.33 2.19H8.67v5.27A7.54 7.54 0 0 0 15 7.54Z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/valorant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black-900 hover:text-red-500 transition-colors duration-300"
                  aria-label="Discord"
                >
                  <svg
                    viewBox="0 0 13.33 15.21"
                    className="w-6 h-6 fill-current"
                  >
                    <title>discord</title>
                    <path d="M11.77.01H1.56A1.56 1.56 0 0 0 0 1.58v10.29a1.56 1.56 0 0 0 1.56 1.56h8.64l-.4-1.4 1 .9.92.85 1.64 1.45V1.57A1.56 1.56 0 0 0 11.77.01ZM8.83 9.95s-.28-.33-.5-.62a2.4 2.4 0 0 0 1.37-.9 4.85 4.85 0 0 1-.87.45 4.93 4.93 0 0 1-1.11.32 5.42 5.42 0 0 1-2 0 7.23 7.23 0 0 1-1.12-.33 4 4 0 0 1-.56-.26h-.06l-.21-.13a2.39 2.39 0 0 0 1.33.9c-.22.29-.51.63-.51.63a2.75 2.75 0 0 1-2.32-1.16 10.12 10.12 0 0 1 1.1-4.43 3.78 3.78 0 0 1 2.14-.8l.07.09a5.16 5.16 0 0 0-2 1l.45-.22a5.59 5.59 0 0 1 1.73-.48h.13a6.61 6.61 0 0 1 1.54 0 6 6 0 0 1 2.29.73 5.1 5.1 0 0 0-1.9-1l.11-.12a3.78 3.78 0 0 1 2.14.8 10.12 10.12 0 0 1 1.1 4.43 2.78 2.78 0 0 1-2.33 1.16ZM5.29 6.4a.84.84 0 1 0 .77.84.81.81 0 0 0-.77-.84Zm2.78 0a.84.84 0 1 0 .77.84.81.81 0 0 0-.77-.85Z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div className="font-circular text-center text-black-900 text-sm max-w-4xl">
            <p className="mb-4">
              © 2020-2025 Riot Games, Inc. RIOT GAMES, VALORANT and any
              associated logos are trademarks, service marks, and/or registered
              trademarks of Riot Games, Inc.
            </p>
          </div>

          <div className="footer-links">
            <ul className="flex font-circular flex-wrap justify-center space-x-8 text-sm text-black-900">
              <li>
                <a
                  href="#"
                  className="hover:text-red-500 transition-colors duration-300 uppercase font-medium"
                >
                  Privacy Notice
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-red-500 transition-colors duration-300 uppercase font-medium"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-red-500 transition-colors duration-300 uppercase font-medium"
                >
                  Company Information
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-red-500 transition-colors duration-300 uppercase font-medium"
                >
                  Cookie Preferences
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
