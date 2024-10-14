import {useEffect,useState} from "react"

function useCurrencyInfo(currencies){
    const [data,setData] = useState({})
    useEffect(()=>{
        fetch(`https://latest.currency-api.pages.dev/v1/${currencies}.json`)
        .then((res)=> res.json())
        .then((res)=>setData(res[currencies]))
        console.log(data);
        
    },[currencies])
    console.log(data);
    return data
}

export default useCurrencyInfo;