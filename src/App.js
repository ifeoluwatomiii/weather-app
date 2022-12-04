import React from 'react'
import axios from 'axios'
import {useState} from 'react'


const App = () => {
  const [data, setData] = useState({})
  const [location, setLocation] = useState("")
  const [isLoading, setIsLoading] = useState("false")

  const url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=d238f3d10174cee92c5e4994bd2da960&units=metric`

  const handleClick = (event) => {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
   
  } 

  const handleChange = (e) => {
    setLocation(e.target.value)
    
  }

  


  
  return (
    <div className='bg-gradient-to-br from-indigo-500 to-blue-300 h-[100vh] w-full relative flex flex-col justify-between py-8 px-4 '>

      
      <div className='text-center py-12 '>
        <input className='rounded-full bg- py-4 px-24' type="text" value={location} placeholder="Enter Location..."
        onChange={handleChange}/>
        <button className='border-solid border-2 py-4 px-8 ml-4 rounded-full bg-white' onClick={handleClick}>Click Me</button>
       
      </div>
      
      <div className='px-[180px] text-center'>
        <p className='font-bold text-[60px]'>{data.name}</p>
        
        </div>
      
      <div className='text-center font-bold text-8xl' >
        {data.main ? <h1>{data.main.temp}°C</h1> : null}
        
      </div>
     
      <div  className='flex justify-evenly py-14 px-24 font-bold text-lg text-center'>
      <div className='  md:px-[160px] top-[60%]  right-10 font-bold text-lg'>
        {data.weather ? <p>{data.weather[0].main}</p> : null}
        
      </div>
      <div>
        {data.main ?<p>{data.main.feels_like} °C</p> : null}
        
        <p>Feels Like</p>
      </div>
      <div>
        {data.main ? <p>{data.main.humidity}%</p> : null}
        
        <p>Humidity</p>
      </div>
      <div>
        {data.main ? <p>{data.wind.speed}</p> : null}
        
        <p>Wind Speed</p>
      </div>
      </div>
      
      
    </div>
  )
}

export default App

