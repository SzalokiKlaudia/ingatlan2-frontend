import React, { useState } from 'react'
import useAdatContext from '../context/AdatContext'

export default function Urlap() {
    const {kategoriaLista} = useAdatContext()
    const {postKeres} = useAdatContext()
    const [kategoria,setKategoria] = useState(null)
    const [leiras, setLeiras] = useState("")
    const [teher, setTeher] = useState(true)
    const [ar, setAr] = useState(null)


    const kuld = (e)=>{
        e.preventDefault()

        let adat = {
            kategoria: kategoria,
            leiras: leiras,
            tehermentes:teher,
            ar: ar
        }

        postKeres(adat, 'api/ingatlan')
    }

  return (
    <div className='col-12 col-md-6'>

        <form onSubmit={kuld}>
        <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Ingatlan kategoriája</label>


        <select class="form-select" 
        aria-label="Default select example"
        onChange={(e)=>{
            setKategoria(e.target.value)
        }}>
            <option selected>Kérem válasszon</option>
            {kategoriaLista.map((elem,index)=>{
                return <option value={elem.id} key={index}>{elem.nev}</option>

            })}
            
        </select>



        </div>

        <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Ingatlan leírása</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" value={leiras} onChange={(e)=>{
            setLeiras(e.target.value)
        }}/>
        </div>

        <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="checkChecked" checked/>
        <label class="form-check-label" for="checkChecked"
        value={teher} onChange={(e)=>{
            setTeher(e.target.value)
        }}>
            Checked checkbox
        </label>
        </div>

        
        <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Ingatlan ára</label>
        <input type="number" class="form-control" id="exampleFormControlInput1" value={ar} onChange={(e)=>{
            setAr(e.target.value)
        }}/>
        </div>

        <div class="mb-3">
            <button type='submit' className='btn btn-primary'>Küld</button>

        </div>
        </form>



    </div>
  )
}
