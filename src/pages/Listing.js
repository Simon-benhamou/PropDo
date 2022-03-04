import React ,{useContext, useEffect, useState}from 'react'
import lists from '../transactions.json'
import PropertyCard from '../component/PropertyCard'
import { Context } from "../Contexts/Context";
import { FormControl,InputLabel,Select,MenuItem } from '@mui/material';

export default function Listing() {

    const { open } = useContext(Context);
    const [list,setList]= useState(lists.properties)
    const [room , setRoom]=useState(6)
    const [price,setPrice]=useState(3)

    useEffect(()=>{
            filter();
        },[open,room])

    useEffect(()=>{
        Sort();
    },[price])

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
    Sort();

    }
    const Sort = () => {
        price === (2 || 3) && list.sort((a, b) =>    a.price - b.price)
        price === 1 && list.sort((a, b) =>    b.price - a.price)
        console.log(price)

    }
    const handleChange = (e) =>  {
        const {name,value} = e.target
                console.log(price)

        name === "room" &&  setRoom(value);
        name === "price" &&  setPrice(value)

    }
  return (
    <div> 
        <FormControl style={filterStyle} >
        <InputLabel id="demo-simple-select-label">Rooms</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={room}
            name="room"
            onChange={handleChange}
        >
             <MenuItem  value={6}>All</MenuItem>
            <MenuItem value={1}>One Room</MenuItem>
            <MenuItem value={2}>Two Rooms</MenuItem>
            <MenuItem value={3}>Three Rooms</MenuItem>
            <MenuItem value={4}>Four Rooms</MenuItem>
            <MenuItem value={5}>Five Rooms</MenuItem>


        </Select>
      </FormControl>
      <FormControl style={filterStyle} >
        <InputLabel id="demo-simple-select-label">Price</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={price}
            name="price"
            onChange={handleChange}
        >
             <MenuItem  value={3} >Sort</MenuItem>
            <MenuItem value={1}>lower to higher</MenuItem>
            <MenuItem value={2}>higher to lower</MenuItem>
       


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

