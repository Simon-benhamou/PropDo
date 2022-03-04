import { style } from '@mui/system'
import React ,{useContext, useState}from 'react'
import lists from '../transactions.json'
import PropertyCard from '../component/PropertyCard'
import { Context } from "../Contexts/Context";

export default function Listing() {
  const { open, setOpen } = useContext(Context);

const [list,setList]= useState(lists.properties)

const style={
        display: 'inline-flex',
        flexWrap:'wrap',
    }
const filter = () =>  {

}
  return (
    <div style={style}> 
        {console.log(open)}
        {lists.properties.map(element => {
        const{ address,price,num_rooms,floor,num_floor,elevator,parking,id,image} = element
        return  <PropertyCard key={id} data={{address,price,num_rooms,floor,num_floor,elevator,parking,id,image}}/>
        })}
    </div>
  )
}

