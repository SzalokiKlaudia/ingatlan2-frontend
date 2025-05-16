import React from 'react'
import useAdatContext from '../context/AdatContext'
import Ingatlan from './Ingatlan'
import '../App.css'

export default function Ingatlanok() {
    const {lista} = useAdatContext()
  return (
    <>
    <div className='row fejlec'>
        <div className='col-md-2 fw-bold pe-5'>Kategória</div>
        <div className='col-md-4 fw-bold'>Leírás</div>
        <div className='col-md-2 fw-bold'>Hirdetés dátuma</div>
        <div className='col-md-2 fw-bold'>Tehermentes</div>
        <div className='col-md-2 fw-bold'>Fenykep</div>

    </div>

    {lista.map((elem,index) =>{
        return <Ingatlan adat={elem} key={index}/>
    })}
    
    
    
    </>
  )
}
