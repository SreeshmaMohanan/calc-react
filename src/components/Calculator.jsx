import React, { useState } from 'react'

export const Calculator = () => {
    const [result, setResult] = useState('')
    
    const handleClick = (e) => {
        setResult(result.concat(e.target.value))
    }
    const handleClear = () => {
        setResult('')
    }
    const handleSlice = () => {
        setResult(result.slice(0, -1))

    }
    const handleRsult = () =>{
        try{
            setResult(eval(result).toString())
        }catch(error){
            setResult('Invalid')
        }
    }
  return (
    <div className={`w-full h-screen bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 flex flex-col items-center justify-center `}>
        <h1 className='drop-shadow-lg text-4xl items-center justify-center text-center font-bold'>Calculator</h1>
        
        <div className='bg-white w-96 h-auto mx-auto rounded-lg overflow-hidden mt-5 shadow-lg border p-2 border-black '>
            <div className=' h-20 p-1 mt-3 border border-black '>
                           <input
                           type='text'
                           placeholder='0'
                           value={result}
                           className=' w-full h-full border border-white text-white bg-gray-600 text-4xl text-right pr-5 '
                            />
                       </div>
            <div className='grid grid-cols-4 gap-2 mt-10 ms-1 me-1 mb-5'>
            <button onClick={handleClear}  className='text-white w-20 h-20 rounded-lg font-bold text-3xl flex justify-center items-center shadow hover:bg-black border border-black bg-green-600'>AC</button>  
            <button onClick={handleSlice}  className='text-white w-20 h-20  rounded-lg font-bold text-3xl flex justify-center items-center shadow   hover:bg-black  border border-black  bg-green-600'><i class="fa-sharp fa-solid fa-delete-left"></i></button> 
            <button  value='/' onClick={handleClick}  className='text-white w-20 h-20 rounded-lg font-bold text-3xl flex justify-center items-center shadow   hover:bg-black   bg-green-600'>/</button> 
            <button value='+' onClick={handleClick}   className='text-white w-20 h-20 rounded-lg font-bold text-3xl flex justify-center items-center shadow   hover:bg-black   bg-green-600'>+</button> 
            <button value='1' onClick={handleClick}  className='w-20 h-20 text-black bg-white rounded-lg font-bold text-3xl flex justify-center items-center shadow hover:bg-yellow-500'>1</button>  
            <button value='2' onClick={handleClick}  className='w-20 h-20 text-black bg-white rounded-lg font-bold text-3xl flex justify-center items-center shadow hover:bg-yellow-500'>2</button>  
            <button value='3'onClick={handleClick}   className='w-20 h-20 text-black bg-white  rounded-lg font-bold text-3xl flex justify-center items-center shadow hover:bg-yellow-500'>3</button> 
            <button value='-' onClick={handleClick} className='text-white w-20 h-20   hover:bg-black  bg-green-600 rounded-lg font-bold text-3xl flex justify-center items-center shadow '>-</button> 
            <button value='4' onClick={handleClick}  className='w-20 h-20 text-black bg-white  rounded-lg font-bold text-3xl flex justify-center items-center shadow hover:bg-yellow-500'>4</button>  
            <button value='5' onClick={handleClick}  className='w-20 h-20 text-black bg-white  rounded-lg font-bold text-3xl flex justify-center items-center shadow hover:bg-yellow-500'>5</button> 
            <button value='6' onClick={handleClick}  className='w-20 h-20 text-black bg-white  rounded-lg font-bold text-3xl flex justify-center items-center shadow hover:bg-yellow-500'>6</button> 
            <button value='*' onClick={handleClick}  className='text-white w-20 h-20 hover:bg-black  bg-green-600 rounded-lg font-bold text-3xl flex justify-center items-center shadow '>*</button>  
            
            <button value='7' onClick={handleClick}  className='w-20 h-20 text-black bg-white  rounded-lg font-bold text-3xl flex justify-center items-center shadow hover:bg-yellow-500'>7</button>
            <button value='8' onClick={handleClick}  className='w-20 h-20 text-black bg-white rounded-lg font-bold text-3xl flex justify-center items-center shadow hover:bg-yellow-500'>8</button>  
            <button value='9' onClick={handleClick}   className='w-20 h-20 text-black bg-white  rounded-lg font-bold text-3xl flex justify-center items-center shadow hover:bg-yellow-500'>9</button>    
           
            <button value='.'onClick={handleClick}  className='text-white w-20 h-20 hover:bg-black   bg-green-600 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>.</button>  
            <button value='0' onClick={handleClick}  className='w-20 h-20 text-black bg-white  rounded-lg font-bold text-3xl flex justify-center items-center shadow hover:bg-yellow-500'>0</button> 
            <button value='00'onClick={handleClick}   className='w-20 h-20 text-black bg-white rounded-lg font-bold text-3xl flex justify-center items-center shadow hover:bg-yellow-500'>00</button> 
            <button  onClick={handleRsult} className='text-white w-40 h-20   hover:bg-black   bg-green-600 rounded-lg font-bold text-3xl flex justify-center items-center shadow cols-span-2 ms-2'>=</button> 
            
           
      
       
       
       
      
       
      
      
    
           </div>
    
        </div>
    </div>
  )
}
