import Header from '../components/Header'
import SearchForm from '../components/SearchForm'
import GifResults from '../components/GifResults'
import Footer from '../components/Footer'
import GifContext from '../context/gif-context'

function MaainLayout ()
{
  return (
    <>
      <Header />
      <div className="container is-max-widescreen">
        <div className="notification is-secondary">
          <GifContext.Provider value={{}}>
            <SearchForm />
            <GifResults />
          </GifContext.Provider>
        </div>
      </div>
      <Footer  />
    </>
  )
  
}

export default MaainLayout