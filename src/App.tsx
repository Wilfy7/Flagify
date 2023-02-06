import React from 'react'
import Index from './routes/Index'
import './index.css';
import { useSelector } from 'react-redux';


export const App = () => {

  const bgColor = useSelector((state:any) => state.backgroundColor.color)
  const itemColor = useSelector((state:any) => state.itemColor.itemColorState)

  return (

    <div
    style={{
      backgroundColor: bgColor,
      color: itemColor
    }}
    >
       <Index />
    </div>

  )
}

