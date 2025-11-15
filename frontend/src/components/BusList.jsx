
import React, { useState ,useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const BusList = ({token}) => {
    const [buses,setBuses] = useState([])

    const navigate = useNavigate()
    

useEffect(()=>{
    const fetechBuses = async()=>{
        try{
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/buses/`)
            setBuses(response.data)
        }catch(error){
        console.log('error in feteching buses',error)
    }
}
    fetechBuses()
},[])

const handleViewSeats =(id)=>{
  navigate(`/bus/${id}`)
}

  return (
    <div>
      {buses.map((item)=>{
            return(
                <div key={item.id}>
                   <div>Bus name{item.bus_name}</div>
                   <div>Number{item.number}</div>
                   <div>origin{item.origin}</div>
                   <div>destination{item.destination}</div>
                   <div>features{item.features}</div>
                   <div>start time{item.start_time}</div>
                   <div>reach time{item.reach_time}</div>
                    <button onClick={()=>{
                      handleViewSeats(item.id)}}>View Seats</button>
                   <hr/>
                  
                </div>
            )

      })}
    </div>
  )
}

export default BusList
