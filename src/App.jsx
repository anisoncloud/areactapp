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
      <form>
        <input placeholder="your name"/>
        <button onClick={postFormSubmit}>Form Submit</button>
      </form>
      <Header></Header>
      
      
      
      
      
      
      
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