import { style } from '@mui/system'
import React ,{useContext}from 'react'
import list from '../transactions.json'
import PropertyCard from '../component/PropertyCard'
import SearchContext from '../Contexts/SearchContext';

export default function Listing() {
    // const {input} = useContext(SearchContext)
const style={
        display: 'inline-flex',
        flexWrap:'wrap',
    }
  return (
    <div style={style}>
        {/* {console.log(input)} */}
        {list.properties.map(element => {
        const{ address,price,num_rooms,floor,num_floor,elevator,parking,id,image} = element
        return  <PropertyCard key={id} data={{address,price,num_rooms,floor,num_floor,elevator,parking,id,image}}/>
        })}
    </div>
  )
}

