import React from 'react'
import ReactDOM  from 'react-dom';
import {Route,Link,BrowserRouter as Router} from 'react-router-dom';
import App from './../App';
import About from './About';
import Contact from './Contact';

const Nav =(
  
           <Router>
            <div>
                <h1>React Route Example practice</h1>
                <Route path='/' component={App}/>
                <Route path='/about' component={About}/>
                <Route path='/contact' component={Contact}/>

            </div>
            </Router>   
  )
ReactDOM.render(routing,document.getElementById('root'));

// export default Nav