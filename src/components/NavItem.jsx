// Esporto di default il componente NavItem
// Un "componente funzione" che riceve una prop chiamata `label`
export default function NavItem({ label }) {
  
  
    // Dentro il return scrivo JSX, che rappresenta cosa deve comparire sullo schermo
    return (
    <li>
        
        {/* Un link senza sottolineatura, che visualizza il testo passato nella prop `label` */}
      <a href="#" style={{textDecoration:'none'}}>{label}</a>
    </li>
  )
}
// IN SOSTANZA: stampa il logo + la lista voci. Niente CSS file, solo un minimo inline per non avere tutto appiccicato.