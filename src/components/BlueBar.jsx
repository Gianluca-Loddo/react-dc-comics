// Importo i dati dei link (array di oggetti con id, label e icona)
import blueLinks from '../data/blueLinks.js'

// Esporto il componente BlueBar
export default function BlueBar() {
  return (
    // Sezione della barra utility
    <section
      aria-label="Utility bar" // Etichetta per gli screen reader
      style={{ padding: '16px 0' }} // Spaziatura verticale
    >
      <ul
        style={{
          display: 'flex',            // layout orizzontale con flexbox
          gap: 24,                    // spazio tra i link
          justifyContent: 'space-around', // distribuzione equa degli elementi
          listStyle: 'none',          // rimuove i pallini
          margin: 0,
          padding: 0,
          alignItems: 'center',       // centra verticalmente icona + testo
          flexWrap: 'wrap'            // va a capo se lo spazio non basta
        }}
      >
        {/* Itero sull’array blueLinks per creare un <li> per ogni elemento */}
        {blueLinks.map(link => (
          <li
            key={link.id} // ogni elemento deve avere una chiave unica
            style={{
              display: 'flex',
              alignItems: 'center', // icona e testo allineati in verticale
              gap: 8                // spazio tra icona e label
            }}
          >
            {/* Icona del link */}
            <img src={link.icon} alt="" width="40" height="40" />

            {/* Testo cliccabile */}
            <a href="#">{link.label}</a>
          </li>
        ))}
      </ul>
    </section>
  )
}

// Una barra blu con icone + link orizzontali, centrati e con spazio tra loro
// Usare flexbox per il layout
// Usare i dati in src/data/blueLinks.js per generare i link dinamicamente
// Usare un ruolo ARIA appropriato per indicare che è una sezione importante della pagina
// Usare un'etichetta ARIA per descrivere la barra (es: "Utility bar")

/*✅ In sintesi
blueLinks è un array di oggetti (es: { id: 1, label: "DC Comics", icon: "path/to/icon.png" }).
Per ogni oggetto, viene generata una voce <li> che contiene:
Un’icona (<img>).
Un link testuale (<a>).
Il layout usa flexbox, con distribuzione uniforme e wrapping automatico se la barra diventa troppo stretta. */