import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function PropertyCard(props) {
  
    const {address,price,num_rooms,floor,parking,image} = props?.data
    

  return (
     <Card sx={{ maxWidth: 700 ,margin: 3,width:250}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Rooms: {num_rooms} 
          </Typography>
              <Typography variant="body2" color="text.secondary">
            Floor: {floor}
        
          </Typography>
              <Typography variant="body2" color="text.secondary">
            Parking: {parking}
          </Typography>
           <Typography variant="body2" color="text.secondary">
            Address: {address}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Details
        </Button>
      </CardActions>
    </Card>
  )
}
