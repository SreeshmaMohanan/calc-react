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
    <div className='w-full h-screen flex flex-col bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 items-center justify-center '>
        <h1 className='text-4xl items-center justify-center text-center font-bold'>Calculator</h1>
        <div className='bg-gray-900 w-96 h-auto mx-auto rounded-lg overflow-hidden mt-10 shadow-lg '>
            <div className=' h-20 p-1 mt-4 border '>
                           <input
                           type='text'
                           placeholder='0'
                           value={result}
                           className=' w-full h-full border border-white text-white bg-gray-700 text-4xl text-right pr-5 '
                            />
                       </div>
            <div className='grid grid-cols-4 gap-2 mt-10 ms-1 me-1 mb-5'>
            <button onClick={handleClear}  className='text-white w-20 h-10 bg-indigo-600 rounded-lg font-bold text-3xl flex justify-center items-center shadow hover:bg-indigo-900'>AC</button>  
            <button onClick={handleSlice}  className='text-white w-20 h-10 bg-indigo-600 rounded-lg font-bold text-3xl flex justify-center items-center shadow hover:bg-indigo-900'>C</button> 
            <button  value='/' onClick={handleClick}  className='text-white w-20 h-10 bg-indigo-600 rounded-lg font-bold text-3xl flex justify-center items-center shadow hover:bg-indigo-900'>/</button> 
            <button value='+' onClick={handleClick}   className='text-white w-20 h-20 bg-indigo-600 rounded-lg font-bold text-3xl flex justify-center items-center shadow hover:bg-indigo-900 row-span-2'>+</button> 
            <button value='1' onClick={handleClick}  className='text-white w-20 h-10 bg-indigo-600 rounded-lg font-bold text-3xl flex justify-center items-center shadow hover:bg-indigo-900'>1</button>  
            <button value='2' onClick={handleClick}  className='text-white w-20 h-10 bg-indigo-600 rounded-lg font-bold text-3xl flex justify-center items-center shadow hover:bg-indigo-900'>2</button>  
            <button value='3'onClick={handleClick}   className='text-white w-20 h-10 bg-indigo-600 rounded-lg font-bold text-3xl flex justify-center items-center shadow hover:bg-indigo-900'>3</button> 
            <button value='4' onClick={handleClick}  className='text-white w-20 h-10 bg-indigo-600 rounded-lg font-bold text-3xl flex justify-center items-center shadow hover:bg-indigo-900'>4</button>  
            <button value='5' onClick={handleClick}  className='text-white w-20 h-10 bg-indigo-600 rounded-lg font-bold text-3xl flex justify-center items-center shadow hover:bg-indigo-900'>5</button> 
            <button value='6' onClick={handleClick}  className='text-white w-20 h-10 bg-indigo-600 rounded-lg font-bold text-3xl flex justify-center items-center shadow hover:bg-indigo-900'>6</button> 
            <button  className='text-white w-20 h-10 bg-indigo-600 rounded-lg font-bold text-3xl flex justify-center items-center shadow hover:bg-indigo-900'>-</button> 
            <button value='7' onClick={handleClick}  className='text-white w-20 h-10 bg-indigo-600 rounded-lg font-bold text-3xl flex justify-center items-center shadow hover:bg-indigo-900'>7</button>
            <button value='8' onClick={handleClick}  className='text-white w-20 h-10 bg-indigo-600 rounded-lg font-bold text-3xl flex justify-center items-center shadow hover:bg-indigo-900'>8</button>  
            <button value='9' onClick={handleClick}   className='text-white w-20 h-10 bg-indigo-600 rounded-lg font-bold text-3xl flex justify-center items-center shadow hover:bg-indigo-900'>9</button>    
            <button value='*' onClick={handleClick}  className='text-white w-20 h-10 bg-indigo-600 rounded-lg font-bold text-3xl flex justify-center items-center shadow hover:bg-indigo-900'>*</button>  
            <button value='.'onClick={handleClick}  className='text-white w-20 h-20 bg-indigo-600 rounded-lg font-bold text-3xl flex justify-center items-center shadow hover:bg-indigo-900'>.</button>  
            <button value='0' onClick={handleClick}  className='text-white w-20 h-20 bg-indigo-600 rounded-lg font-bold text-3xl flex justify-center items-center shadow hover:bg-indigo-900'>0</button> 
            <button value='00'onClick={handleClick}   className='text-white w-20 h-20 bg-indigo-600 rounded-lg font-bold text-3xl flex justify-center items-center shadow hover:bg-indigo-900'>00</button> 
            <button  onClick={handleRsult} className='text-white w-20 h-20 bg-indigo-600 rounded-lg font-bold text-3xl flex justify-center items-center shadow hover:bg-indigo-900'>=</button> 
            
           
      
       
       
       
      
       
      
      
    
           </div>
    
        </div>
    </div>
  )
}
