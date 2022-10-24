
import {useState} from "react";
function props(){
    const [data,setdata]=useState(null);
    const [print,printdata]=useState(false);
    const [status,setStatus]=useState(true);
    function getdata(val){
    
        setdata(val.target.value);
        printdata(false);
      }
      return (
    <div className='App'>
    {
      print?
    
    status?<h1>{data}</h1>:null
    :null
    }
    <input type="text" onChange={getdata}/>
    <button onClick={()=>printdata(true)}> Print Data</button>
    <button onClick={()=>setStatus(false)}>Hide</button>
    <button onClick={()=>setStatus(true)}>Show</button>
    <button onClick={()=>setStatus(!status)}>Toggel</button>
    </div>
      )
    }
    
  
  export default props;
  
  
  // function App(){
  //   const [name,setname]=useState(""); 
  //   const [pass,setpass]=useState(""); 
  //   const [dist,setdist]=useState(""); 
  //   const [tnc,settnc]=useState(false); 
    
  //   function getFormdata(e){
  //       console.warn(name,dist,tnc);
  //       e.preventDefault();
  //   }
    
  //       return(
          
  //           <div className='App'>
    
  //               <h1>Register your self</h1>
  //              <form  onSubmit={getFormdata}>
  //   <input type="text" placeholder="Enter name" value={name} onChange={(e)=>setname(e.target.value)} /> <br/><br/>
  //   {/* <input type="password" placeholder="Enter Password" onChange={(e)=>setpass(e.target.value)}/> <br/><br/> */}
  //   <select onChange={(e)=>setdist(e.target.value)}>
  //       <option>{dist}</option>
  //       <option>Hyd</option>
  //       <option>Dadu</option>
  //       <option>Karachi</option>
  //       <option>SBA</option>
    
  //   </select><br/><br/>
  //   <input type="checkbox"  onChange={(e)=>settnc(e.target.checked)} /> <span>accept terms and conditions</span>
  //   <br/><br/>
  //   <button type="submit">Submit</button>
  //         <button type="reset" >Clear</button>
  //              </form>
    
  //           </div>
  //       )
    
    
  //   }
      
    