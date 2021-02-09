import Head from 'components/head';

export default function DefaultLayout({ children }) {
  return (
    <>
      <Head title="Example" />
      <div className="text-gray-50 min-h-screen" style={{ backgroundColor: '#f8f6f4' }}>
        <div className="flex flex-col h-full text-black">
          <header className="relative">
            <div className="navigation-container bg-white">
              <div className="mx-auto w-full" style={{ maxWidth: '1248px', padding: '0 24px' }}>
                <div role="banner" style={{ display: 'flex', padding: '16px 0' }}>
                  <a href="/" className="w-nav-brand" aria-label="home">
                    <img
                      src="https://uploads-ssl.webflow.com/5f898e02695323cbea0d2228/5f97defb515773da6f04adf4_katve-logo-oct.png"
                      width="145"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </header>
          <main className="pb-10 mt-10 mx-auto w-full sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28">{children()}</main>
          <footer className="bg-accent-2-500 py-4 px-4">
            <div className="max-w-7xl mx-auto">
              <div>
                <div className="section section-small">
                  <div className="container">
                    <div className="row-cta">
                      <h3 className="cta-row-heading">Valmis paketti stressittömään seikkailuun</h3>
                      <div>
                        <div className="button-row">
                          <a href="/ota-yhteytta" className="button button-outline-white w-inline-block">
                            Ota Yhteyttä
                          </a>
                          <a href="/varusteet-ja-hinnat" className="button button-row-last w-inline-block">
                            Lainaa varusteet
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="horizontal-rule bg-white"></div>
              <div className="footer">
                <div className="">
                  <div className="footer-row sm:flex">
                    <div className="footer-left">
                      <a href="/" aria-current="page" className="footer-logo w-inline-block w--current">
                        <img
                          src="https://uploads-ssl.webflow.com/5f898e02695323cbea0d2228/5f97defb515773da6f04adf4_katve-logo-oct.png"
                          width="145"
                          alt=""
                        />
                      </a>
                      <ul role="list" className="social-icons-list w-list-unstyled">
                        <li className="list-item">
                          <a
                            href="https://www.linkedin.com/company/katve"
                            target="_blank"
                            className="button-circle button-small bg-white w-inline-block"
                          >
                            <img
                              src="https://uploads-ssl.webflow.com/5f898e02695323cbea0d2228/5f898e02b8d2f1ced40d6836_linkedin.svg"
                              alt=""
                              className="social-icon"
                            />
                          </a>
                        </li>
                        <li className="list-item">
                          <a
                            href="https://www.instagram.com/katvecompany/"
                            target="_blank"
                            className="button-circle button-small bg-white w-inline-block"
                          >
                            <img
                              src="https://uploads-ssl.webflow.com/5f898e02695323cbea0d2228/5f898e02b8d2f1672b0d685a_instagram.svg"
                              alt=""
                              className="social-icon"
                            />
                          </a>
                        </li>
                        <li className="list-item">
                          <a
                            href="https://www.facebook.com/Katve-115303083720070/"
                            target="_blank"
                            className="button-circle button-small bg-white w-inline-block"
                          >
                            <img
                              src="https://uploads-ssl.webflow.com/5f898e02695323cbea0d2228/5f898e02b8d2f16a660d6878_facebook.svg"
                              alt=""
                              className="social-icon"
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="footer-right sm:flex sm:flex-1 sm:justify-end">
                      <div className="footer-menu-column ml-16">
                        <ul role="list" className="link-list w-list-unstyled">
                          <li>
                            <a href="/varusteet-ja-hinnat" className="hover-link text-white">
                              Varusteet
                            </a>
                          </li>
                          <li>
                            <a href="/usein-kysyttya" className="hover-link text-white">
                              Usein kysyttyä
                            </a>
                          </li>
                          <li>
                            <a href="/yrityksille" className="hover-link text-white">
                              Yrityksille
                            </a>
                          </li>
                          <li>
                            <a href="/varusteet-ja-hinnat" className="hover-link text-white">
                              Hinnasto
                            </a>
                          </li>
                          <li>
                            <a href="/lahjakortti" className="hover-link text-white">
                              Lahjakortti
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="footer-menu-column ml-16">
                        <ul role="list" className="link-list w-list-unstyled">
                          <li>
                            <a href="/kayttoehdot" className="hover-link text-white">
                              Käyttöehdot
                            </a>
                          </li>
                          <li>
                            <a href="/tietosuoja" className="hover-link text-white">
                              Tietosuoja
                            </a>
                          </li>
                          <li>
                            <a href="/me" className="hover-link text-white">
                              Tiimi
                            </a>
                          </li>
                          <li>
                            <a href="/ota-yhteytta" className="hover-link text-white">
                              Yhteystiedot
                            </a>
                          </li>
                          <li>
                            <a href="/en/home" className="hover-link text-white">
                              In English
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="footer-lower-row">
                    <div>© Katve Oy</div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
