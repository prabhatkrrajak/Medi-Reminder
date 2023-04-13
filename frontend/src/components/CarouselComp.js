import React from 'react'
import Carousel from 'react-material-ui-carousel'
import image1 from "../assets/images/item1.jpg"
import image2 from "../assets/images/item2.jpg"
import image3 from "../assets/images/item3.jpg"
import { Paper } from '@mui/material'

const CarouselComp = () => {
  return (
    <Carousel>
        <Paper>
            <img src={image1} alt='' style={{width:"60wh" ,height: "60vh", display: "block", margin:"auto"}}/>
        </Paper>
        <Paper>
            <img src={image2} alt='' style={{width:"60wh" ,height: "60vh", display: "block", margin:"auto"}}/>
        </Paper>
        <Paper>
            <img src={image3} alt='' style={{width:"60wh" ,height: "60vh", display: "block", margin:"auto"}}/>
        </Paper>
    </Carousel>
)
}

export default CarouselComp