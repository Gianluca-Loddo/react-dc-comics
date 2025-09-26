
// importo il font dopo averlo installato con il comando:
// npm install @fontsource-variable/roboto
import '@fontsource-variable/roboto';

import AppHeader from './components/AppHeader';

import AppCARD from './components/AppCARD';

import AppMain from './components/AppMain';




function App() {
 

  return (
    <>

      <AppHeader />
      <AppCARD />
      <AppMain />

    </>
  )
}

export default App
