// Importo l'immagine di sfondo del jumbotron
import jumbotronBg from '../assets/img/jumbotron.jpg'

// Esporto di default il componente Jumbotron
export default function Jumbotron() {
  return (
    <section
      // Ruolo ARIA: "region" indica una sezione importante della pagina
      role="region"
      aria-label="Jumbotron" // Etichetta accessibile per screen reader

      // Stili inline per impostare il jumbotron
      style={{
        backgroundImage: `url(${jumbotronBg})`, // immagine di sfondo
        backgroundSize: 'cover',               // l'immagine copre tutta l'area
        backgroundPosition: 'center',          // centrata sia orizzontalmente che verticalmente
        height: '300px',                       // altezza fissa della sezione
        display: 'flex',                       // flexbox per centrare il contenuto
        justifyContent: 'center',              // centrato orizzontalmente
        alignItems: 'center',                  // centrato verticalmente
        color: 'white',                        // testo in bianco
        fontWeight: 700                        // grassetto
      }}
    >
      {/* Contenuto del jumbotron */}
      <h2>--&gt; Content goes here &lt;--</h2>
    </section>
  )
}


// Un jumbotron con immagine di sfondo e testo centrato
// Usare il file jumbotron.jpg in assets/img
// Altezza fissa 300px, testo bianco e bold, centrato verticalmente e orizzontalmente
// Usare background-size: cover e background-position: center
// Usare un ruolo ARIA appropriato per indicare che è una sezione importante della pagina

/*✅ In sintesi
Il <section> rappresenta un blocco importante della pagina, semanticamente corretto.
Lo sfondo è un’immagine (jumbotron.jpg) resa responsive con background-size: cover.
Usa flexbox per centrare il testo.
Il contenuto attuale (<h2>--> Content goes here <--</h2>) è solo un placeholder: lo puoi sostituire con titolo, pulsanti, call-to-action, ecc. */