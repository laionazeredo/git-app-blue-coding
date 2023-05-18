function Gif ({gifData})
{

  /*
  - Gif component will be used to display a single gif
  - It will receive the gif data from the GifResults component
  - It will display the gif image and the gif title
  - It will provide a way to copy the gif url to the clipboard
  
  */
  return (
    < >
      
        <div className="column is-three-quarters">
          <img src={gifData.url} alt={gifData.title} />
        </div>
        <div className="column">
          <p>{gifData.title}</p>
        </div>

    </>
  )
}

export default Gif;