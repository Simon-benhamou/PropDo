import React ,{useContext, useEffect, useState}from 'react'
import lists from '../transactions.json'
import PropertyCard from '../component/PropertyCard'
import { Context } from "../Contexts/Context";
import { FormControl,InputLabel,Select,MenuItem } from '@mui/material';

export default function Listing() {

    const { open } = useContext(Context);
    const [list,setList]= useState(lists.properties)
    const [room , setRoom]=useState(6)
    const [price,setPrice]=useState(2)
  
    useEffect(()=>{
            filter();
        },[open,room])


    const style={
            display: 'inline-flex',
            flexWrap:'wrap',
        }
    const filterStyle = {
        width:"100px",
        margin:'10px'
    }

    const filter = () =>  {
    const relevantList = lists.properties
    .filter(property =>  property.address.includes(open))
    .filter(property => room!== 6? property.num_rooms === room : true)
    setList(relevantList)
    }

    const Sort = () => {
        price === 2  && list.sort((a, b) =>  a.price - b.price);
        price === 1 && list.sort((a, b) =>  b.price - a.price);
    }

    const handleChange = (e) =>  {
        const {name,value} = e.target
        name === "room" &&  setRoom(value);
        name === "price" &&  setPrice(value)
    }
    
  return (
    <div> 
        <FormControl variant="standard" style={filterStyle} >
        <InputLabel id="demo-simple-select-standard-label">Rooms</InputLabel>
        <Select
            labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
            value={room}
            name="room"
            onChange={handleChange}
        >
             <MenuItem value={6}>All</MenuItem>
            <MenuItem value={1}>One </MenuItem>
            <MenuItem value={2}>Two </MenuItem>
            <MenuItem value={3}>Three </MenuItem>
            <MenuItem value={4}>Four </MenuItem>
            <MenuItem value={5}>Five </MenuItem>


        </Select>
      </FormControl>
      <FormControl variant="standard" style={filterStyle} >
        <InputLabel id="demo-simple-select-label">Price</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={price}
            name="price"
            onChange={handleChange}
        >
            
            <MenuItem onClick={Sort}  value={2}>higher to lower</MenuItem>
            <MenuItem onClick={Sort} value={1}>lower to higher</MenuItem>
       


        </Select>
      </FormControl>
      <div style={style}> 
        {list.map(element => {
        const{ address,price,num_rooms,floor,num_floor,elevator,parking,id,image} = element
        return  <PropertyCard key={id} data={{address,price,num_rooms,floor,num_floor,elevator,parking,id,image}}/>
        })}
    </div>
 </div>

  )
}

