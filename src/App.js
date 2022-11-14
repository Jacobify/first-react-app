// import logo from './logo.svg';
import './App.css';
import BlogCard from './BlogCard';

function App() {
  // const firstName = "Farzad";
  // const lastName = "Yaghoobi";
  // const inputPlaceHolder = "Enter your details"
  // const myArray = [0,1,2,3]
  // const myObject = {age : 35,name : "Fat Gum"}
  // const getFullName = (firstName,lastName) => `${firstName} ${lastName}`;
  // const styles = {
  //   margin : "16px",
  //   borderRadius : "5px",
  //   boxShadow: "5px 5px 5px #421"
  // }
  const blogArr = [
    {
      title:"Blog Title 1",
      description: "lorem impsum dolor lorem impsum dolor lorem impsum dolor lorem impsum dolor lorem impsum dolor"
    },
    {
      title:"Blog Title 2",
      description: "lorem impsum dolor lorem impsum dolor lorem impsum dolor lorem impsum dolor lorem impsum dolor"
    },
    {
      title:"Blog Title 3",
      description: "lorem impsum dolor lorem impsum dolor lorem impsum dolor lorem impsum dolor lorem impsum dolor"
    }
];  
  const blogCards = blogArr.map((blog,index)=>{ console.log(blog);
    return(
      <BlogCard key={index}/>
      // <div className="BlogCard" key={index}>
      //   <h3>{blog.title}</h3>
      //   <p>{blog.description}</p>
      // </div>
    )
  
  })

  return (
    <div className="App">
      {blogCards}
    </div>
  );
}

export default App;
