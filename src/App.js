
import './App.css';

import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import React, {useState} from 'react';


import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');  // whether the dark mode is enables
  const [alert, setAlert] = useState(null); 

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(()=>{
      setAlert(null);
    }, 1500);

  }

  const toogleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      // document.body.style.color = 'white';

      showAlert("Dark mode has been Enabled", "success");
      document.title = 'TextUtils - Dark Mode';

      // setInterval(()=>{
      //   document.title = "TextUtils is Amazing Tool"
      // }, 2000);
      // setInterval(()=>{
      //   document.title = "Install TextUtils Now"
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      // document.body.style.color = 'black';
      
      showAlert("Light mode has been Enabled", "success");
      document.title = 'TextUtils - Light Mode'
    }
  }

  return (
    <>

      {/* <Navbar></Navbar> */}
      {/* <Navbar title="TextUtils" aboutText="aboutTextUtils" /> */}

      <BrowserRouter>
        {/* <Navbar title="TextUtils" mode={mode} toogleMode={toogleMode} aboutText="About"/>
        <Alert alert={alert}></Alert> */}
        <div className="container my-3" >
          <Routes>
            {/*   /users  -->  component 1 */}
            {/*   /users/home  -->  component 2 */}
              <Route path="/about" element = {<About mode={mode}/>}>  
              </Route>

              <Route path="/" element = {<TextForm showAlert={showAlert} heading="Enter Text To Analyze" mode={mode}/>}>
              </Route>
              {/* <TextForm showAlert={showAlert} heading="Enter Text To Analyze" mode={mode}/> */}
          </Routes>
        </div>
      </BrowserRouter>
    </>  
  )
}

export default App;
