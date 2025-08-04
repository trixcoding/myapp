import './index.css'
import './output.css'
import Button from './Button'
function Button() {
  return (
    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Click  
    </button>
  );
}
function App() {

  return (
     <div>
  <h6 className = "text-3xl font-bold underline text-blue-600">Mhmdnsr</h6>
     <Button />
     </div>
  )
}

export default App
