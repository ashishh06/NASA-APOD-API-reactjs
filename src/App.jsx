import Main from "./components/Main"
import Footer from "./components/Footer"
import SideBar from "./components/SideBar"
import { useEffect, useState } from "react"

function App() {
  
const[data,setdata]=useState(null);
const [showInfo,setshowInfo]=useState(false);

function handleshowInfo(){
  setshowInfo(!showInfo);
}

useEffect(()=>{
  async function fetchAPIData(){
    const NASA_KEY=import.meta.env.VITE_NASA_API_KEY 
    const url='https://api.nasa.gov/planetary/apod' +
    `?api_key=${NASA_KEY}`

    const today = (new Date()).toDateString()
    const localKey = `NASA-${today}`
    if (localStorage.getItem(localKey)) {
      const apiData = JSON.parse(localStorage.getItem(localKey))
      setdata(apiData)
      console.log('Fetched from cache today')
      return
    }
    localStorage.clear()

    try{
      const res=await fetch(url)
      const apidata = await res.json()
      localStorage.setItem(localKey, JSON.stringify(apidata))
      setdata(apidata)
      console.log('Fetched from API today');
    }catch(err){
      console.log(err.message);
    }
  }
  fetchAPIData()
},[])

  return (
    <>
    {data ? (<Main data={data}/>):(
      <div className="loadingState">
        <i class="fa-solid fa-gear"></i>
      </div>
    )}
    {showInfo &&(<SideBar data={data} handleshowInfo={handleshowInfo}/>)}
    { data &&(<Footer data={data} handleshowInfo={handleshowInfo}/>)}
    </>
  )
}

export default App
