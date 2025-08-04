import StylishInput from "./StylishInput"
import CustomBtn from "./CustomBtn"
function Login() {
  return (
    <div>
     <StylishInput />
      <StylishInput />
      <CustomBtn onClick={handleClick} variant="primary"/>
      
    </div>
    );
}

export default Home;
