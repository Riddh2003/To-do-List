import React,{useState} from 'react'
import {useTodo} from '../contextapi/TodoContext';

function Todoitem({todo}) {
    const [isTodoEditable,setIsTodoEditable] = useState(false)
    const [todoMsg,setTodoMsg] = useState(todo.todo)
    const {toggleComplete,deleteTodo,updateTodo} = useTodo()


    return (
        <div className={`w-full flex flex-row px-2 py-1 rounded-md items-center gap-2 justify-evenly bg-blue-200`}>
            <input 
            type="checkbox" 
            className='w-5 h-5 cursor-pointer'/>

            <input 
            type="text" 
            className={`w-full h-10 px-4 font-medium text-md rounded-md border focus:outline-none bg-transparent`} />
            
            <button>
                ✅✏️
            </button>
            
            <button 
                className='p-2 rounded bg-red-200 text-white'
            >
                ❌
            </button>
        </div>        
    )
}

export default Todoitem;
