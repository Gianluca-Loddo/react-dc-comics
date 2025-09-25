// Importo il componente NavItem (ogni voce del menu)
import NavItem from './NavItem.jsx'

// Importo l'array con le voci di navigazione (es: ["Home", "Comics", "Movies", ...])
import navItems from '../data/navItems.js'

// Importo il logo come immagine (Vite/Webpack si occuperà di gestire il file)
import logo from '../assets/img/dc-logo.png'

// Esporto il componente Header come funzione
export default function Header() {
  return (
    <header>
      {/* Contenitore superiore dell'header con flexbox */}
      <div
        className="header-top"
        role="banner" // ruolo ARIA: indica che è un banner (header principale della pagina)
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          padding: '12px 16px'
        }}
      >
        {/* Logo DC */}
        <img src={logo} alt="DC Logo" width="60" height="60" />

        {/* Barra di navigazione principale */}
        <nav aria-label="Main" style={{ flex: 1 }}>
          <ul
            style={{
              display: 'flex',
              flexWrap: 'wrap',   // le voci vanno a capo se lo spazio non basta
              gap: 12,
              margin: 0,
              padding: 0,
              listStyle: 'none'  // tolgo i pallini dell'elenco
            }}
          >
            {/* Creo dinamicamente le voci di menu
                scorrendo l'array navItems e generando un <NavItem /> per ciascuno */}
            {navItems.map(item => (
              <NavItem key={item} label={item} />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
