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


/**
SPIEGAZIONE PASSO-PASSO (CASO: ARRAY DI STRINGHE)

1) Dati di partenza
   - Ho un array di stringhe, per esempio:
     const navItems = ['DIGITAL COMICS', 'DC MERCHANDISE', 'SUBSCRIPTION'];
   - Ogni elemento dell’array è una *stringa*.

2) Il rendering della lista
   {navItems.map(item => (
     <NavItem key={item} label={item} />
   ))}
   - .map(...) scorre l’array navItems.
   - Ad ogni iterazione, "item" è la stringa corrente (es. "DIGITAL COMICS").
   - Creo un componente <NavItem /> per ogni stringa.
   - Gli passo DUE props:
       • key={item}  → chiave univoca per React (ok se le stringhe sono uniche).
       • label={item} → LA COSA IMPORTANTE: qui "label" riceve esattamente la stringa "item".

   In pratica, se navItems = ['A', 'B'],
   il codice sopra genera:
     <NavItem key="A" label="A" />
     <NavItem key="B" label="B" />

3) Il componente figlio
   export default function NavItem({ label }) {
     return (
       <li>
         <a href="#" style={{ textDecoration: 'none' }}>{label}</a>
       </li>
     );
   }

   - Quando React chiama NavItem, passa un oggetto props: { label: "DIGITAL COMICS" } (per esempio).
   - La sintassi { label } è *destrutturazione* di props: equivale a scrivere
       function NavItem(props) { const label = props.label; ... }
   - Dentro il JSX, {label} è proprio la stringa ricevuta dal padre, e viene mostrata a schermo.

4) Morale della favola
   - "label" NON è qualcosa di magico.
   - "label" è semplicemente il *nome della prop* che il padre passa al figlio.
   - In questo caso: label === l’elemento corrente dell’array (cioè la stringa "item").
*/
