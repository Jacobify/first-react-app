// import logo from './logo.svg';
import './App.css';

function App() {
  const firstName = "Farzad";
  const lastName = "Yaghoobi";
  const age = 25;
  const Job = "Web Dev";
  const inputPlaceHolder = "Enter your details"
  const input = <input placeholder={inputPlaceHolder}/>
  const myArray = [0,1,2,3]
  const myObject = {age : 35,name : "Fat Gum"}

  const getFullName = (firstName,lastName) => `${firstName} ${lastName}`;
  
  return (
    <div className="App">
      <h3>Full Name : {getFullName(firstName,lastName)}</h3>
      <p>Job : {myArray[1]}</p>
      <p>Age : {myObject.age}</p>
      {/* <input placeholder={inputPlaceHolder}/> */}
      {input}
      {
        myArray[2] > 0  ? "True" : "False"
      }
    </div>
  );
}

export default App;
