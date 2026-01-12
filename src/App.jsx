import Header from "./component/Header";
import Hero from "./component/Hero";
import ContactForm from './component/ContactForm';
import Footer from "./component/Footer";
import { useRef } from "react";

const loginStatus = (status)=>{
  if (status) {
    return <button>Status True and Loug Out</button>
  }else{
    return <button>Stats False and Login</button>
  }
}



const App = () => {
  let marks=79;
  let city = ['Dhaka', 'Chittagong', 'Khulna', 'Rajshahi', ]
  const itemObj = {
    name : "Anisur Rahman",
    age: 50,
    city : "Dhaka"
  }

  const btnClick = ()=>{
    alert("Say Hello");
  }

  const postFormSubmit = (event)=>{
    event.preventDefault();
    alert("Submission Ok");
  }

  const myTitle = useRef();
  const buttonUpdate = ()=>{
    myTitle.current.innerText="This is the chage text";
  }
  
  let firstName, lastName=useRef();

  const clickMyButton = ()=>{
    let fName= firstName.value;
    let lName = lastName.value;
    alert(fName +"  "+ lName );
  }

  let myImage = useRef();
  const changeImage = ()=>{
    myImage.current.src="https://placehold.co/600x400?text=Hello+World";
    myImage.current.setAttribute('width', '200px')
  }
  let myHeadline = useRef();
  const changeClass = ()=>{
    myHeadline.current.classList.remove('display-1');
    myHeadline.current.classList.add('display-5')
    myHeadline.current.classList.add('text-danger')
  }

  return (
    <div>
      {marks>80?<h1>Nice result</h1>:<h1>Avarage Result</h1>}
      {(
        ()=>{
          if(marks>=80 && marks<100){
            return <h1>A+</h1>
          }
          else if(marks>70 && marks<80){
            return <h1>A</h1>;
          }
          else if(marks>60 && marks<70){
            return <h1>-A</h1>;
          }
        }
      )()}
      <h1 className="display-1" ref={myHeadline}>This is the Headline</h1>
      <button onClick={changeClass} >Change class</button>
      <input ref={(a)=>firstName=a} /><br/>
      <input ref={(a)=>lastName=a} /><br/>
      <button onClick={clickMyButton}>Click for Alert</button>

      <form>
        <input placeholder="your name"/>
        <button onClick={postFormSubmit}>Form Submit</button>
      </form>
      <Header></Header>
      <h1 ref={myTitle}></h1>
      <button onClick={buttonUpdate}>Click Here</button>
      
      
      
      <img ref={myImage} src="https://placehold.co/600x400" /><br/>
      <button onClick={changeImage}>Change Image</button>
      
      
      {loginStatus(false)}
      <ul>
      {
        city.map((item, i)=>{
          return <li ke={i.toString()}>{item}</li>
        })
      }
      {(()=>{})()}
      </ul>
      <Hero title="This is the Hero Section" item={itemObj} heroBtnClick = {btnClick}/>
      <ContactForm/>
      <Footer/>
    </div>
  );
};

export default App;