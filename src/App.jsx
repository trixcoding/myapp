import './index.css'
import './output.css'
import CustomBtn from './CustomBtn'
import StylishInput from './StylishInput'
const handleClick = () => {
    return ;
  };
function App() {
  return (
      <div>
      <CustomBtn onClick={handleClick} variant="primary">Set</CustomBtn>
      <CustomBtn onClick={handleClick} variant="danger">Delete</CustomBtn>
      <CustomBtn onClick={handleClick} variant="outline">Cancel</CustomBtn>
      <StylishInput />
      <StylishInput />
      </div>
  )
}

export default App
