import Header from './components/Header/Header'
import Slider from './components/Slider/Slider'
import About from './components/About/About'
import SearchBox from './components/SearchBox/SearchBox'
import Branches from './components/Branches/Branches'
import Footer from './components/Footer/Footer'
import MenuCategory from './components/MenuCategory/MenuCategory'
import './assets/fonts/fonts.css';



function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <Slider />
        <MenuCategory />
        <About />
        <SearchBox />
        <Branches />

      </main>
      <Footer />
    </>
  )
}

export default App