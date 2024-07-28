import React from 'react'

function TodoForm() {
    return (
        <div className='w-full flex flex-row justify-center'>
            <input 
            type="text" 
            placeholder='Write Todo...'
            name="todo" 
            className='w-full focus:outline-none py-2 px-4 rounded-l-md text-md'/>
            <button type='submit' className='bg-green-400 p-2 rounded-r-md w-1/6 font-medium text-lg'>Add</button>
        </div>        
    )
}

export default TodoForm
