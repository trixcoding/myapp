import './index.css'
import './output.css'
function FancyButton() {
  return (
    <button className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-semibold text-white transition-all duration-300 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg shadow-lg hover:from-indigo-600 hover:to-purple-600 group">
      <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-48 group-hover:h-48 opacity-10"></span>
      <span className="relative z-10">کلیک کن</span>
    </button>
  );
}
function App() {

  return (
     <div>
  <h6 className = "text-3xl font-bold underline text-blue-600">Mhmdnsr</h6>
     <button className = "bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Click  
    </button>
       <FancyButton />
     </div>
  )
}

export default App
