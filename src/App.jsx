import './App.css'
import data_list from './assets/catalogListCatalog.json'

function App() {

  // console.log(data_list)

  const catalogList = data_list.map(catalog =>
    <div className='container'>
      <div className='image-container'><img className='image-container' src={catalog.image}/></div>
      <div>
        <div>
          <label><b>{catalog.title}</b></label>
        </div>
        {/* <div className='color-container'>
          <div className='main-color color-red'></div>
          <div className='main-color color-blue'></div>
          <div className='main-color color-green'></div>
        </div> */}
        <div>
          <label>{catalog.price} {catalog.moneda}</label>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <h1>Confecciones A&J</h1>
      <div style={{display: 'none'}}>
      {/* <div> */}
        <table>
          <tr>
            <td>Titulo</td>
            <td><input type='text' name='title' id='title'/></td>
            <td><label>Colores</label></td>
            <td>
              <input type='checkbox' name='rojo' value='red'/><label className='space-name'>Rojo</label>
              <input type='checkbox' name='azul' value='blue'/><label className='space-name'>Azul</label>
              <input type='checkbox' name='verde' value='greed'/><label  className='space-name'>Verde</label>
            </td>
          </tr>
          <tr>
            <td>Imagen</td>
            <td><input input='text' name='imageUpload' id='imageUpload'/></td>
            <td>Precio</td>
            <td><input input='text' name='price' id='price'/></td>
          </tr>
          <tr>
            <td>Tipo de Moneda</td>
            <td>
              <select>
                <option selected id='dollar'>Dolares</option>
              </select>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td colSpan='2'><button>Guardar</button></td>
            <td colSpan='2'><button>Limpiar</button></td>
          </tr>
        </table>
      </div>
      <div className='main-container'>
        {catalogList}
      </div>
    </>
  )
}

export default App
