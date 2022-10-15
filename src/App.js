// import logo from './logo.svg';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React,{useState} from 'react'
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
 

// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert,setAlert]= useState(null);

  const showAlert = (message,type)=>{
        setAlert({
          msg : message,
          type : type
        })

        setTimeout(() => {
          setAlert(null);
        }, 1500);
        
  }

  const toggleMode = () => {
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#021d45';
      showAlert("Dark mode has been enabled", "success");
      document.title = "Textutils - Dark Mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled", "success");
      document.title = "Textutils - Light Mode";
    }
  }
  return (
    <>
 {/* <Router>    */}
<Navbar title="textutils" mode={mode}  toggleMode = {toggleMode}/>
<Alert alert ={alert}/>
<div className="container  my-3">
  
{/* <Routes> */}
          {/* <Route exact path="/about"   element = {}/>
          <Route exact path="/" element = {}/> */}
          {/* <About/> */}
          {/* <TextForm showAlert={showAlert} mode={mode} heading="Enter the text to analyze below"/> */}
          
  {/* </Routes> */}
  
  
</div>
{/* </Router> */}
    </>
   
  );
}

export default App;
