import React,{useState} from 'react'
import { useTodo } from '../contextapi/TodoContext'
function TodoForm() {
    const [todo,setTodo] = React.useState('')
    const {addTodo} = useTodo()
    const add=(e)=>{
        e.preventDefault()
        if(!todo) return
        addTodo({todo,completed:false})
        setTodo('')
    }
    return (
        <form onSubmit={add} className='w-full flex flex-row justify-center'>
            <input 
            type="text" 
            placeholder='Write Todo...'
            name="todo" 
            value={todo}
            onChange={(e)=>setTodo(e.target.value)}
            className='w-full focus:outline-none py-2 px-4 rounded-l-md text-md'/>
            <button type='submit' className='bg-green-400 hover:bg-green-500 p-2 rounded-r-md w-1/6 font-medium text-lg'>Add</button>
        </form>        
    )
}

export default TodoForm
