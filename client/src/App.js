import React from 'react';
import './App.css';

function App() { 
  return (
    <div className="App">
      <header className="App-header">
        <a
         className="container">
         <div className="wrapper">
           <div className="content-wrapper">
             <div className="content">
               <h1>Online Chat</h1>
               <p>Online Chat Without Registration</p>
                 <div className="LoginForm"> 
                  <form> 
                   <input type="text" autoComplete="off" name="username" className="login_input" placeholder="username"/>
                   <input type="password" autoComplete="off" name="password" className="login_input" placeholder="password"/>

                   <button className="login_button">Submit</button> 
                 </form>
            </div>
             </div>
           </div>
           <div className="footer">
             <h2>Join now</h2>
             <p>...is a free chat room website where you can have live chat with anyone, you can discuss with random strangers, any time you can start a private conversation.</p>
             <br/>
           </div>
         </div>
        </a>
      </header>
    </div>
  );
}

export default App;
