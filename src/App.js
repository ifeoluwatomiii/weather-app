import React from 'react'
import axios from 'axios'
import {useState} from 'react'
import {BiSearch} from 'react-icons/bi'


const App = () => {
  const [data, setData] = useState({})
  const [location, setLocation] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  // const [isLoading, setIsLoading] = useState("false")




  const apikey = process.env.REACT_APP_API_KEY

  const url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apikey}&units=metric`

  const handleClick = async (event) => {

    try {
     await axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
        setIsLoading(true)
      })

      setIsLoading(false)
      console.log(isLoading)
    } 
     finally{
      
      setLocation('')
     
    }
     
 
   
  } 

  const handleChange = (e) => {
    setLocation(e.target.value)
    
  }

  


  
  return (
    <div className=' h-[100vh] w-full bg-[#171717] text-gray-400 text-center flex flex-col justify-between py-8 px-4 items-center overflow-auto'>

      
      <div className='text-center w-[300px]  flex justify-between items-center left-2 bg-slate-600 rounded-full py-3 px-4 '>
        <input className='bg-transparent border-none rounded-full w-[80%]' type="text" value={location} placeholder="Enter Location..."
        onChange={handleChange}/>
        <BiSearch className='cursor-pointer w-[20%]' onClick={handleClick}/>
       
      </div>
      <div>
        {isLoading ? <p>Loading...</p> :<div>
          <div className=' '>
        <p className='font-bold text-[60px]'>{data.name}</p>

        </div>
      
      <div className='text-center font-bold text-8xl' >
        {data.main ? <h1>{data.main.temp}°C</h1> : null}


        <div className='  md:px-[160px] top-[60%]  right-10 font-bold text-lg'>
        {data.weather ? <p>{data.weather[0].description}</p> : null}
        
      </div>
        
      </div>
     
      <div  className='flex justify-center py-14 px-24 font-bold text-lg text-center items-center gap-[50px] leading-10'>
        
        <div>
          <div>
          {data.main ?<p>{data.main.feels_like} °C</p> : null}
          
          <p>Feels Like</p>
          </div>
          <div>
          {data.main ? <p>{data.main.humidity}%</p> : null}
          
          <p>Humidity</p>
          </div>
          <div >
          {data.main ? <p>{data.wind.speed}</p> : null}
          
          <p>Wind Speed</p>
          </div>
        </div>
        
        <div>
          <div>
          {data.main ?<p>{data.coord.lon}</p> :null}
          <p>Longitude</p>
          </div>
          <div>
          {data.main ? <p>{data.coord.lat}</p> : null}
          <p>Latitude</p>
          </div>
          <div>
            {data.main ? <p>{data.main.pressure}</p> : null}
            <p>Pressure</p>
          </div>
        </div>
        
      </div>
        </div> }
      </div>
      
      
      
    </div>
  )
}

export default App

