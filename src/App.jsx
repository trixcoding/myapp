import './index.css'
import './output.css'
const handleClick = () => {
    return ;
  };
function App() {
  return (
     <div>
    <Button onClick={handleClick} variant="primary">ثبت</Button>
      <Button onClick={handleClick} variant="danger">حذف</Button>
      <Button onClick={handleClick} variant="outline">انصراف</Button>
    
     </div>
  )
}

export default App
