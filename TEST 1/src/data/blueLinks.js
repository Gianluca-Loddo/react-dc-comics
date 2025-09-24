// la cartella data contiene dati statici usati nell'app
// lista di link blu nella barra in basso
// Esporto un array di oggetti, ogni oggetto rappresenta un link blu con icona + testo


import digitalComics from '../assets/img/buy-comics-digital-comics.png'
import merchandise from '../assets/img/buy-comics-merchandise.png'
import subscriptions from '../assets/img/buy-comics-subscriptions.png'
import shopLocator from '../assets/img/buy-comics-shop-locator.png'
import powerVisa from '../assets/img/buy-dc-power-visa.svg'

//label è il testo che compare accanto all'icona

export default [
  { id: 1, icon: digitalComics, label: 'DIGITAL COMICS' },
  { id: 2, icon: merchandise,  label: 'DC MERCHANDISE' },
  { id: 3, icon: subscriptions,label: 'SUBSCRIPTION' },
  { id: 4, icon: shopLocator,  label: 'COMIC SHOP LOCATOR' },
  { id: 5, icon: powerVisa,    label: 'DC POWER VISA' }
]
