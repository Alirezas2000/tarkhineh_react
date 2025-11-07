import Header from "../components/Header/Header";

function Home   () {
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
export default Home