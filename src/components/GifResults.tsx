import Gif from './Gif'

const gifResults = [
  {
    id: 1,
    title: 'gif 1',
    url: 'https://media.giphy.com/media/3o7aD2X9HxhzNnVWYo/giphy.gif',
    embed_url: 'https://giphy.com/embed/3o7aD2X9HxhzNnVWYo'
  },
  {
    id: 2,
    title: 'gif 2',
    url: 'https://media.giphy.com/media/3o7aD2X9HxhzNnVWYo/giphy.gif',
    embed_url: 'https://giphy.com/embed/3o7aD2X9HxhzNnVWYo'
  }
]
function GifResults ()
{
  /*
  Requirements:
  - Needs to watch for changes in the context provider
  - Needs to display the results of the query
  - Needs to display a list of 
  - Needs to display the results in a paginated way and let the user to navigate thru pages
  - Needs to handle pagination query logic


  */
  return (
    <>
      <ul style={{listStyleType: 'none'}}>

        {
          gifResults.map( ( gif ) => {
            return (
              <>
                <li key={gif.id}>
                  <Gif gifData={ gif } />
                </li>
              </>

            )
          } )
          }
      </ul>
    </>
    )

}

export default GifResults;