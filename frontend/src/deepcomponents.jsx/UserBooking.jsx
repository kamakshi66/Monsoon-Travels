import React, { useEffect, useState } from 'react';

const UserBookings = ({ token, userId }) => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!token || !userId) return;

    fetch(`${process.env.REACT_APP_API_URL}/api/user/${userId}/bookings/`, {
      headers: {
        Authorization: `Token ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch bookings');
        }
        return res.json();
      })
      .then((data) => {
        console.log('Bookings Data:', data);
        setBookings(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, [token, userId]);

return (
  

  <div className="flex justify-center">
  <div className="w-full max-w-md space-y-4">


    {bookings.map((item)=>{
      return(
         <div>
        {/*  {item.bus}
         {item.user}
           {item.seat_number}
           {item.price}  */}
          
      <p className="text-lg font-semibold text-gray-800">{item.bus}</p>
      <p className="text-sm text-gray-600">User: {item.user}</p>
      <p className="text-sm text-gray-600">Seat: {item.seat_number}</p>
    {  /*<p className="text-sm text-gray-600">Price: ₹{item.price}</p>*/}
      <p className="text-xs text-gray-400 mt-1">
        Booked on: {new Date(item.booking_time).toLocaleString()}
      </p>
       
          
       </div> 
       
      )
    })}
  </div>
  </div>

) 

 

}
export default UserBookings