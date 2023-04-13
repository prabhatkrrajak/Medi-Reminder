import React from 'react'
import { Paper } from '@mui/material'
import image1 from "../assets/images/item1.jpg"

const CarouselItem = (item) => {
    return (
        <Paper>
            <img src={item.image} alt='' style={{width:"50%" ,height: "50vh", display: "block", margin:"auto"}}/>
        </Paper>
    )
}

export default CarouselItem