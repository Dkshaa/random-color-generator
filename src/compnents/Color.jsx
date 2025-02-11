import { useState } from "react"

const Color = ()=>{
    const [colorType,setColorType] = useState('hex')
    const [color,setColor]= useState('#000000')
    const colorUtility=(len)=>{
        return Math.floor(Math.random()*len)
    }

    const hexGenerator=()=>{
        const hex=[1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
        let hexx='#'
        for(let i=1;i<6;i++){
            hexx+= hex[colorUtility]
        }
    }
    const rgbGenerator=()=>{
        const r= colorUtility(256)
        const g= colorUtility(256)
        const b= colorUtility(256)
        setColor(`r ${r} ,g ${g}, b ${b}`)


    }
    return(
        <div>
            <div>
                <button onClick={()=>setColorType('hex')}>Hex Color</button>
                <button onClick={()=>setColorType('rgb')}>Rgb Color</button>
                <button 
                    onClick={colorType==='hex'?hexGenerator() :rgbGenerator()}
                    >
                        Random color Generator
                </button>
            </div>
        </div>
    )
}
export default Color