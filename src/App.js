import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextBox from './components/TextBox';
import React,{useState} from 'react';

function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      message: message ,
      type: type
    });
    
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      showAlert('Dark Mode','success');
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert('Light Mode','success');
    }
  }

  return (
    <>
    <Navbar title = "Text Utils" p1 = "Home" mode = {mode} toggleMode = {toggleMode}/>
    <Alert alert = {alert}/>
    <div className="container">
        <TextBox/>
    </div>
    </>
  );
}

export default App;