import React from 'react'
import '../App.css'

export default function Ingatlan(props) {

    const teher= ()=>{
        if(props.adat.tehermentes === true){
            return 'igen'
        }else{
            return 'nem'
        }
    }
  return (
    <div className='row sorok'>
        <div className='col-md-2'>{props.adat.kategoria.nev}</div>
        <div className='col-md-4'>{props.adat.leiras}</div>
        <div className='col-md-2'>{props.adat.hirdetesDatuma}</div>
        <div className='col-md-2'>{teher()}</div>
        <div className='col-md-2 f-1'>{props.adat.kepUrl}</div>


    </div>
  )
}
