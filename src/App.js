// import logo from './logo.svg';
import './App.css';

function App() {
  const firstName = "Farzad";
  const lastName = "Yaghoobi";
  const age = 25;
  const Job = "Web Dev";
  const inputPlaceHolder = "Enter your details"
  const input = <input placeholder={inputPlaceHolder}/>

  const getFullName = (firstName,lastName) => `${firstName} ${lastName}`;
  
  return (
    <div className="App">
      <h3>Full Name : {getFullName(firstName,lastName)}</h3>
      <p>Job : {Job}</p>
      <p>Age : {age}</p>
      {/* <input placeholder={inputPlaceHolder}/> */}
      {input}
    </div>
  );
}

export default App;
