import { Button } from '@mui/material'
import React, { useState } from 'react'

const FormCheckout = () => {
 const [userData, setUserData]= useState({
   name:"",
   email:"",
   phone:""
 })
 
 /* const handle */

  return (
    <div>
        <form>
          <input 
          type="text"
          placeholder='Nombre'
          value={userData.name}
          onChange={(e)=> setUserData({...userData, name: e.target.value})}/>
          <input 
          type="text" 
          placeholder='email' 
          value={userData.email} 
          onChange={(e)=> setUserData({...userData, email: e.target.value})}/>
          <input 
          type="text" 
          placeholder='Telefono' 
          value={userData.phone} 
          onChange={(e)=> setUserData({...userData, phone: e.target.value})} />
         <Button> 
          <button  type="submit">Comprar</button>
         </Button>
        </form>
    </div>
  )
}

export default FormCheckout