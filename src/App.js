// import logo from './logo.svg';
// import './App.css';
import React, {Component} from 'react';
import BlogCard from './BlogCard';
import {isArrayEmpty as arrayValueCheck} from "./Utils"

class App extends Component {
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

  onHideBtnClick = () => {
    // this.showBlogs = false;
    // let updatedState = !this.state.showBlogs;
    // this.setState({showBlogs:updatedState})

    //-----------------------

    this.setState((prevState,prevProps)=>{
      return { showBlogs: !prevState.showBlogs}
    })

    //-----------------------
    // this.setState({showBlogs:false})
    console.log('====================================');
    console.log(this.state.showBlogs);
    console.log('====================================');
  }
  onLikeBtnClick = () => {
    // this.setState((prevState,prevProp)=>{
    //     return {likeCount: prevState.likeCount + 1};
    // }
    // )
    alert("like button is clicked!")
  }
  state = {
    showBlogs : true
  }

  blogArr = [
   {
     title:"Blog Title 1",
     description: "lorem impsum dolor lorem impsum dolor lorem impsum dolor lorem impsum dolor lorem impsum dolor",
     likeCount :0
   },
   {
     title:"Blog Title 2",
     description: "lorem impsum dolor lorem impsum dolor lorem impsum dolor lorem impsum dolor lorem impsum dolor",
     likeCount :0
   },
   {
     title:"Blog Title 3",
     description: "lorem impsum dolor lorem impsum dolor lorem impsum dolor lorem impsum dolor lorem impsum dolor",
     likeCount :0
   }
  ];

  blogCards = arrayValueCheck(this.blogArr) ? [] : this.blogArr.map((blog,index)=>{
   return(
     <BlogCard key={index} likeCount={blog.likeCount} title={blog.title} description={blog.description} id={index} onLikeBtnClick={this.onLikeBtnClick}/>
     // <div className="BlogCard" key={index}>
     //   <h3>{blog.title}</h3>
     //   <p>{blog.description}</p>
     // </div>
   )
  })




  render() {
    console.log("render is called!");
    return(
      <div className="App">
        <button onClick={this.onHideBtnClick}>{this.state.showBlogs ?"Hide List" : "Show List"}</button>
        {
          this.state.showBlogs ? this.blogCards : null
        }
      </div>
    )
  }

}

export default App;
