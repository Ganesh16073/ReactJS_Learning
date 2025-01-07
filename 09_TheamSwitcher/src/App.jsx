import { useEffect, useState } from "react";
import "./App.css";
import { TheamProvider } from "./context/TheamContext";
import TheamButton from "./components/TheamButton";
import Card from "./components/Card";

function App() {

  const [theamMode,setTheamMode]=useState('light')

  const darkTheam=()=>
  {
    setTheamMode('dark')
  }
  const lightTheam=()=>
  {
    setTheamMode('light')
  }

  useEffect(()=>
  {
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(theamMode)

  },[theamMode])
  return (
    <>
    <TheamProvider value={{theamMode,darkTheam,lightTheam}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <TheamButton/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>
      </TheamProvider>
    </>
  );
}

export default App;
