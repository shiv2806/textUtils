// import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";
// import About from "./components/about";
import Navbar from "./components/navbar";
import TextForm from "./components/textform";
import Alert from "./components/alert";


function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Enabled Dark mode", "success");
      document.title = `TextUtils- dark mode`;
      // setInterval(() => {

      //   document.title = `TextUtils- dark mode`
      // }, 2000);
      // setInterval(() => {

      //   document.title = `Install TextUtils now`
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Enabled Light mode", "success");
      document.title = `TextUtils- light mode`;
    }
  };
  return (

    <>

      <Navbar
        title="TextUtils"
        aboutText="About TextUtils"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />


      <div className="container my-3">
        {/* <About /> */}

        <TextForm showAlert={showAlert} mode={mode} heading="Enter your text to analyze" />

      </div>



    </>
  );
}

export default App;
