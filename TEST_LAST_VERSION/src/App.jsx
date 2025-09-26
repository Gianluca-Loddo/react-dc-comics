
// importo il font dopo averlo installato con il comando:
// npm install @fontsource-variable/roboto
import '@fontsource-variable/roboto';

import AppHeader from './components/AppHeader';

import ComicsData from './data/comics.js';
import AppCARD from './components/AppCARD';

import AppMain from './components/AppMain';




function App() {


  return (
    <>

      <AppHeader />

      {ComicsData.map((comic) => (
        <AppCARD
          key={comic.id}
          thumb={comic.thumb}
          series={comic.series}
        />
      ))}

      <AppMain />

    </>
  )
}

export default App
