import React, { useState } from "react";
import './navbar.css';
import {AiOutlineMenu} from 'react-icons/ai';
import {GiTireIronCross} from 'react-icons/gi';
function Navebar(){
        const [nav,setnav]=useState('#');
        const [show, setShow] = useState(false)

return (

             <nav>
                          <h3>Logo</h3>
                    
                    <ul className={`${show ? "mobile-nav" : "list"}`}>
                         <a href="#" onClick={()=>setnav('#')}      className={nav==='#'? 'list-active': ''} >Home</a>
                        <a href="#about" onClick={()=>setnav('#about')}      className={nav==='#about'? 'list-active': ''} >About</a>
                        <a href="#service" onClick={()=>setnav('#service')}      className={nav==='#service'? 'list-active': ''} >Service</a>
                        <a href="#blog" onClick={()=>setnav('#blog')}      className={nav==='#blog'? 'list-active': ''} >Blog</a>
                        <a href="#contact" onClick={()=>setnav('#contact')}      className={nav==='#contact'? 'list-active': ''} >Contact</a>
                    </ul>
                    <div className='toggleBtn'>
          <button className="btn" onClick={() => setShow(!show)}>{show ? <GiTireIronCross/> : <AiOutlineMenu/>}</button>
        </div>
             </nav>

        )

}

export default Navebar;