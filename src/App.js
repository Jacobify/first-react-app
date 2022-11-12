// import logo from './logo.svg';
import './App.css';

function App() {
  const firstName = "Farzad";
  const lastName = "Yaghoobi";
  const inputPlaceHolder = "Enter your details"
  const myArray = [0,1,2,3]
  const myObject = {age : 35,name : "Fat Gum"}
  const getFullName = (firstName,lastName) => `${firstName} ${lastName}`;
  const styles = {
    margin : "16px",
    borderRadius : "5px",
    boxShadow: "5px 5px 5px #421"
  }
  return (
    <div className="App">
      <div style={
        {
          margin : "16px",
          borderRadius : "5px",
          boxShadow: "5px 5px 5px #421"
        }
      }>
        <h3>Full Name : {getFullName(firstName,lastName)}</h3>
        <p>Job : {myArray[1]}</p>
        <p>Age : {myObject.age}</p>
        <input placeholder={inputPlaceHolder}/>
        {
          myArray[2] > 0  ? "True" : "False"
        }
        <h3>Blog Title 1</h3>
        <p>Test para</p>
      </div>
      <div style={styles}>
        <h3>Full Name : {getFullName(firstName,lastName)}</h3>
        <p>Job : {myArray[1]}</p>
        <p>Age : {myObject.age}</p>
        <input placeholder={inputPlaceHolder}/>
        {
          myArray[2] > 0  ? "True" : "False"
        }
        <h3>Blog Title 1</h3>
        <p>Test para</p>
      </div>
    
      <div className="BlogCard"></div>
        <div style={
          {
            margin : "16px",
            borderRadius : "5px",
            boxShadow: "5px 5px 5px #421"
          }
        }>
          <h3>Full Name : {getFullName(firstName,lastName)}</h3>
          <p>Job : {myArray[1]}</p>
          <p>Age : {myObject.age}</p>
          <input placeholder={inputPlaceHolder}/>
          {
            myArray[2] > 0  ? "True" : "False"
          }
          <h3>Blog Title 1</h3>
          <p>Test para</p>
        </div>
        <div style={styles}>
          <h3>Full Name : {getFullName(firstName,lastName)}</h3>
          <p>Job : {myArray[1]}</p>
          <p>Age : {myObject.age}</p>
          <input placeholder={inputPlaceHolder}/>
          {
            myArray[2] > 0  ? "True" : "False"
          }
          <h3>Blog Title 1</h3>
          <p>Test para</p>
        </div>
    </div>
  );
}

export default App;
