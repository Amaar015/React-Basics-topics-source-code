
import React, { useState } from "react";
import './App.css';
import './hover.css';
import Signin from './signin';

// function LoginForm(){
//   const left=document.querySelector(".left");
//   const right=document.querySelector(".right");
//   const container=document.querySelector(".container");

//   function hoverleft(){
    
// left.addEventListener("mouseenter",()=>
// container.classList.add("hover-left") 
// );
//   }
// function leaveleft(){
  
// left.addEventListener("mouseleave",()=>
// container.classList.remove("hover-left") 
// );
// }
 

// function hoverright(){
    
// right.addEventListener("mouseenter",()=>
// container.classList.add("hover-right") 
// );
//     }
//   function leaveright(){
    
// right.addEventListener("mouseleave",()=>
// container.classList.remove("hover-right") 
// );
//   }
//    const [name,setName]=useState("");
//    const [email,setEmail]=useState("");
//   //  const [pass,setPass]=useState("");
//    const [tnc,setTnc]=useState("");
//    const [add,setAddress]=useState("");

// function setData(e){
//   console.log(name,email,tnc,add);
  
//   e.preventDefault();
// }

// function GetData(e){
//   console.log(email);
  
//   e.preventDefault();
// }


//     return(
     
//   <div class="body">
      
//       <div class="container">
//       <div class="split left" onMouseLeave={leaveleft} onMouseEnter={hoverleft}>
//        <h1>Sign-Up</h1>
//        <form onSubmit={setData}>
  
//           <input class="field" type="text" id ="name" placeholder="Enter name" onChange={(e)=>setName(e.target.value)} />  <br/><br/>
//           <input class="field" type="email" id ="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
//           <input class="field" type="password" id ="pass" placeholder="Enter Password" /><br/><br/>
//           <select class="field" onChange={(e)=>setTnc(e.target.value)}>
//          <option>Male</option>
//          <option>Female</option>
//          <option>Other</option>
         
//           </select><br/><br/>
//           <input class="field" type="text" placeholder="Enter Address" onChange={(e)=>setAddress(e.target.value)}/><br/><br/>
//        <button class="btn" type="submit">Login</button>
          
//        </form>
//       </div>
//       <div class="split right" onMouseLeave={leaveright} onMouseEnter={hoverright} >
//       <h1>Sign-In</h1>
//        <form onSubmit={GetData}>
  
//           <input class="field" type="email" id ="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
//           <input class="field" type="password" id ="pass" placeholder="Enter Password" /><br/><br/>
          
//        <button class="btn" type="submit">Register</button>
          
//        </form>
//       </div>
      

//    </div>
//    </div>
//       )

// }

// export default LoginForm;



//props in React

// function App(){
//   return (
// <div className='App'>
// <h1>Props in React</h1>
// <Student name={"Amaar Raza"}  email="razaammar582@gmail.com" other={{address:"Hyderabad", mobile:"03043042589"}}/>
// <Student name={"Khuram Raza"}  email="khuramraza582@gmail.com" other={{address:"Hala", mobile:"03323498326"}}/>
// <Student name={"Ali Raza"}  email="razaali582@gmail.com" other={{address:"badin", mobile:"03043042589"}}/>
// <Student name={"Minhal Raza"}  email="minhalraza582@gmail.com" other={{address:"Dour", mobile:"03323498326"}}/>
// </div>
//   )
// }
// use of props
// function Student(props){
// return (
// <div style={{backgroundColor:"yellow", fontSize:"25px" ,width:"500px" ,height:"auto" ,margin:"0 auto"}}>
//     <h5>Name : {props.name}</h5>
//     <h5>Email : {props.email}</h5>
//     <h5>Address :{props.other.address} </h5>
// </div>
// )

// }

// export default Student;



// Event and Function

// function App(){
// const [data,name]=useState("Amaar")
// function updatedata(){
//   name("Raza")
// }
// let [num,nums]=useState(1)
// function increase(){
//   nums(num+1)
// }

// return(
//   <div className='App'>
//  <h1>{data}</h1>
//  <button onClick={updatedata}>Click Me</button>
// <h2>{num}</h2>
// <button onClick={increase}>Increase Number</button>
//   </div>
// )

// }


// function App(){
//   // const [data,name]=useState("Amaar")
//   // function updatedata(){
//   //   name("Raza")
//   // }
//   let [num,nums]=useState(1)
//   function increase(){
//     nums(num+1)
//   }
//   function decrease(){
  
//     nums(num-1)
//   }
  
  
//   return(
//     <div className='App'>
//    {/* <h1>{data}</h1> */}
//    {/* <button onClick={updatedata}>Click Me</button> */}
//   <h2>{num}</h2>
//   <button onClick={increase}>Increase Number</button>
//   <button onClick={decrease}>Decrease Number</button>
//     </div>
//   )
  
//   }  









// function App(){
//    let [status,setStatus]=useState(true);
   
// return(
// <div className='App'>
//                     {
//      status?<h3>You need to appologizee</h3>:null
//      }                
//        <button onClick={()=>setStatus(false)}>Hide</button>
//        <button onClick={()=>setStatus(true)}>Show</button>
//        <button onClick={()=>setStatus(!status)}>toggle</button>
// </div>
// )
// }
// function App(){
//                     let [data,setdata]=useState(null);
//                     let [print,setprint]=useState(false);
//                     function getData(val){
//                                      setdata(val.target.value);
//                                      // alert(data); 
//                  }
//                  return(
//                  <div className='App'>
//                                      {
//                       print?
//                       <h3>{data}</h3>
//                       :null
//                       }                
//                  <h2>Login Form</h2>
                 
//                         <form>
//                          <input type="text" onChange={getData}  />            
                                    
//                         </form>              
//                         <button onClick={()=>setprint(true)}>click me</button>
//                  </div>
//                  )
//                  }

// function App(){

// let data="Amaar Raza";
// function amaar(){
//   data="Khuram Abass";
//   alert(data);
// }

// // function raza(){
// //   alert("are you hungry! Amaar");
// // }

// return(
//   <div className='App'>
//     <h3>Wellcome to react {data}</h3>
//     <button onClick={amaar}>Click me</button>
//     {/* <button onMouseEnter={()=>alert("hello Amaar! ")} onMouseDown={raza}>Hover me</button> */}
    
    
//   </div>
// );

// }


// let [data,setData]=useState("Amaar Raza")
// function amaar(){
//   setData("Khuram Abass")
//   // alert(data);
// }
//  return(
//   <div className='App'>
//     <h3>Wellcome to react {data}</h3>
//     <button onClick={amaar}>Click me</button>
    
    
//   </div>
// );













// function App() {
//   function Apple(){
//     return(
//       <div>
//         hello new return output
//       </div>
//     )}
//   return (
//     <div className="App">
  
//   <h1> hello Amaar</h1>
  
//   <Apple/>
//   <User/>
  
//   {
//   /* <Users/>
//   <Amaar/>
//   <Raza/>
//   <Ali/> */}
//     </div>
//   );
  
// }
// function Users() {
//   return ('
//     <div>
//     <h1> hello Kashif</h1>
//     <h4>I am fine and what about you</h4>
//     </div>
//       );
// }

// function Raza() {
//   return (
//     <div>
//     <h1> hello Kashif</h1>
//     <h4>I am fine and what about you</h4>
//     </div>
//       );
// }

// function Amaar(){
// return(
 
//     <div>
//     <h2>hello Peoples do want to contact us</h2>
//     <button >Click me</button>
//     </div>
// );

// }


// function Ali(){

//  return(
// <section>

// <div>
//     <h1> hello Hyderabad</h1>
//     <h4>what is going on</h4>
//     </div>
//     <div>
//     <h1> hello sindh</h1>
//     <h4>we love with you sindh</h4>
//     </div>
//     <div>
//     <h1> hello Pakistan</h1>
//     <h4>I love pakistan</h4>
//     </div>  

// </section>
     
//  );

// }
