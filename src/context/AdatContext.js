import { createContext, useContext, useEffect, useState } from "react";
import { MyAxios } from "../api/MyAxios";

const AdatContext = createContext()

export const AdatProvider = ({ children })=>{
    const [lista,  setLista] = useState([])
    const getIngatlanok = async()=>{
        try{
            const {data} = await MyAxios.get('api/ingatlanok')
            setLista(data)

        }catch(error){
            console.log(error,"Nincs adat")
        }
    }

    const postKeres = async({...adat},vegpont)=>{
        try{
            const {data} = await MyAxios.post(vegpont,adat)
            getIngatlanok()

        }catch(error){
            console.log(error,"Hiba van")


        }
    }

    const [kategoriaLista, setKategoriaLista] = useState([])
    const getKategoriak = async()=>{
        try{
            const {data} = await MyAxios.get('api/kategoriak')
            setKategoriaLista(data)

        }catch(error){
            console.log(error,"Nincs adat")
        }
    }




    useEffect(()=>{
        getIngatlanok()
        getKategoriak()

    },[])

return(
    <AdatContext.Provider value={{ lista, postKeres, kategoriaLista}}>
    {children}    
    </AdatContext.Provider>
)
}

export default function useAdatContext(){
    return useContext(AdatContext)
}