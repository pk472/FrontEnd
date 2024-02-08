import React from 'react'
import { useState, useEffect } from 'react'



const Customers = ()  =>{
    const[customers, setCustomers] = useState([])

    useEffect(() => {
        fetch ('http://localhost:5000/customers', {
          'method':'GET',
          headers: {
            'Content-Type':'application/json'
          }
        })
        .then(resp => resp.json())
        .then(resp => setCustomers(resp))
        .catch(error => console.log(error))
      },[])
  return (
    <div>
        <h1>List of all customers:</h1>
        {customers.map(customers => <li key={customers.ID}>ID {customers.ID}:   {customers.name}</li>)}
    </div>
        
  )
}

export default Customers
