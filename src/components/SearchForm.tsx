
function SearchForm ()
{

  /*
  Requirements:
  - Search form with the following fields:
    - Search terms input - text
    - Search button
  - Search button should be disabled if the search terms input is empty
  - After clicked, the search button needs to perform a query to the Giphy 
  - The results will be sent to a context provider
  - The results of the query should be displayed in the GifResults component
  - Needs to provide a way to clear results
  */
  
  function handleSearch ()
  {
    console.log('searching')
  }

  function clearResults ()
  {
    console.log('clearing')
  }

  return (
    <>
      <div className="field">
        <label className="label">Insert your search terms below</label>
        <div className="control">
          <input className="input" type="text" placeholder="Query your gifs" />
        </div>
        <div className="control">
          <button className="button is-link" onClick={handleSearch}>Search</button>
        </div>
        <div className="control">
          <button className="button is-link is-light" onClick={ clearResults}>Clear Results</button>
        </div>
      </div>
    </>
  )
}

export default SearchForm