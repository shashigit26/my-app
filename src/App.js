// import logo from './logo.svg';
import React,{ useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
  
// } from "react-router-dom";




function App() {
  const [mode,setMode]=useState('light')

  const [alert,setAlert]=useState('')
  const showAlert=(message,type)=>{
    
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);

  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743'
      showAlert('Dark mode has been enabled','success')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert('light mode has been enabled','success')
    }
  }

  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtil"  mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container">
    <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
    {/* <Routes>
          <Route path="/about"  element={  <About />}>
          
          </Route>
         
          <Route path="/" element={ <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />}>
          
          </Route>
     </Routes> */}

      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
