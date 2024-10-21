import './App.css'
import data_list from './assets/catalogList.json'

function App() {

  // console.log(data_list)

  const catalogList = data_list.map(catalog =>
    <div className='container'>
      <div className='image-container'><img className='image-container' src={catalog.image}/></div>
      <div>
        <div>{catalog.title}</div>
        <div className='color-container'>
          {/* {catalog.colors}  */}
          <div className='main-color color-red'></div>
          <div className='main-color color-blue'></div>
          <div className='main-color color-green'></div>
        </div>
        <div>{catalog.price} {catalog.moneda}</div>
      </div>
    </div>
  );

  return (
    <>
      <h1>Confecciones A&J</h1>
      <div className='main-container'>
        {catalogList}
      </div>
    </>
  )
}

export default App
