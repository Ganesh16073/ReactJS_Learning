import './App.css'
import Card from './Component/Card'

function App() {

  let myObj={
    name:'Ganesh',
    age:21

  }
  return (
    <>
      <h1 className='bg-green-700 text-black p-4 rounded-xl mb-4'>Tailwint Test</h1>
      <Card channel="Giris Tech Hub" someObj={myObj}/>
      <Card channel="Ganesh"/>   {/* if we dont pass props object then if we try to acces then it give error */}
    </>
  )
}

export default App
