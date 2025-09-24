// Importo le immagini usate nel footer
import footerBg from '../assets/img/footer-bg.jpg'
import facebookIcon from '../assets/img/footer-facebook.png'
import twitterIcon from '../assets/img/footer-twitter.png'
import youtubeIcon from '../assets/img/footer-youtube.png'
import pinterestIcon from '../assets/img/footer-pinterest.png'
import periscopeIcon from '../assets/img/footer-periscope.png'

// Esporto il componente Footer
export default function Footer() {
  return (
    <footer>
      {/* --- Sezione immagine di sfondo --- */}
      {/* Uso un <img> per mostrare l’immagine full width.
          In un progetto reale si userebbe più probabilmente il CSS (background-image). */}
      <img src={footerBg} alt="" style={{ width: '100%', display: 'block' }} />

      {/* --- Colonne con link --- */}
      {/* etichetta accessibile per screen reader */}
      <section
        aria-label="Footer links"
        style={{
          display: 'flex',
          gap: 32,
          flexWrap: 'wrap',
          padding: '16px'
        }}
      >
        {/* Colonna 1 */}
        <div>
          <h4>DC COMICS</h4>
          <ul>
            <li><a href="#">Characters</a></li>
            <li><a href="#">Comics</a></li>
            <li><a href="#">Movies</a></li>
            <li><a href="#">TV</a></li>
            <li><a href="#">Games</a></li>
            <li><a href="#">Videos</a></li>
            <li><a href="#">News</a></li>
          </ul>
        </div>

        {/* Colonna 2 */}
        <div>
          <h4>DC</h4>
          <ul>
            <li><a href="#">Terms Of Use</a></li>
            <li><a href="#">Privacy policy (New)</a></li>
            <li><a href="#">Ad Choices</a></li>
            <li><a href="#">Advertising</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Subscriptions</a></li>
            <li><a href="#">Talent Workshops</a></li>
            <li><a href="#">CPSC Certificates</a></li>
            <li><a href="#">Ratings</a></li>
            <li><a href="#">Shop Help</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Colonna 3 */}
        <div>
          <h4>SITES</h4>
          <ul>
            <li><a href="#">DC</a></li>
            <li><a href="#">MAD Magazine</a></li>
            <li><a href="#">DC Kids</a></li>
            <li><a href="#">DC Universe</a></li>
            <li><a href="#">DC Power Visa</a></li>
          </ul>
        </div>

        {/* Colonna 4 */}
        <div>
          <h4>SHOP</h4>
          <ul>
            <li><a href="#">Shop DC</a></li>
            <li><a href="#">Shop DC Collectibles</a></li>
          </ul>
        </div>
      </section>

      {/* --- Parte finale del footer (CTA + Social) --- */}
      <section
        aria-label="Footer bottom"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 16,
          padding: '16px',
          flexWrap: 'wrap'
        }}
      >
        {/* Pulsante call-to-action */}
        <button type="button">SIGN-UP NOW!</button>

        {/* Social */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <strong>FOLLOW US</strong>
          <ul
            style={{
              display: 'flex',
              gap: 12,
              margin: 0,
              padding: 0,
              listStyle: 'none'
            }}
          >
            {/* Icone social come link */}
            <li>
              <a href="#">
                <img src={facebookIcon} alt="Facebook" width="35" height="35" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={twitterIcon} alt="Twitter" width="35" height="35" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={youtubeIcon} alt="YouTube" width="35" height="35" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={pinterestIcon} alt="Pinterest" width="35" height="35" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={periscopeIcon} alt="Periscope" width="35" height="35" />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  )
}
// Un footer con immagine di sfondo, 4 colonne di link, un pulsante call-to-action e icone social
// Usare un ruolo ARIA appropriato per indicare che è una sezione importante della pagina
// Usare un'etichetta ARIA per descrivere la sezione dei link (es: "Footer links")
// Usare un'etichetta ARIA per descrivere la parte finale del footer (es: "Footer bottom")