import React,{useState} from 'react'
import {useTodo} from '../contextapi/TodoContext';

function Todoitem({todo}) {
    const [isTodoEditable,setIsTodoEditable] = useState(false)
    const [todoMsg,setTodoMsg] = useState(todo.todo)
    const {toggleComplete,deleteTodo,updateTodo} = useTodo()

    const editTodo=()=>{
        updateTodo(todo.id,{...todo,todo:todoMsg})
        setIsTodoEditable(false)
    }
    const toggleCompleted=()=>{
        toggleComplete(todo.id)
    }

    return (
        <div className={`w-full flex flex-row px-2 py-1 rounded-md items-center gap-2 justify-evenly
        ${todo.completed?"bg-green-400":" bg-yellow-400 "}`}>
            <input 
            type="checkbox" 
            className='w-5 h-5 cursor-pointer'
            checked={todo.completed}
            onChange={toggleCompleted}
            />

            <input 
            type="text" 
            className={`w-full h-10 px-4 font-medium text-md rounded-md focus:outline-none bg-transparent
                ${isTodoEditable?"border border-white":"border-transparent"} 
                ${todo.completed? "line-through" :""}`}
            value={todoMsg}
            onChange={(e)=>setTodoMsg(e.target.value)}
            readOnly={!isTodoEditable} 
            />
            
            <button
                className='p-1 text-lg rounded bg-transparent hover:bg-green-300'
                onClick={()=>{
                    if(todo.completed)return;
                    if(isTodoEditable){
                        editTodo()
                    }
                    else setIsTodoEditable((prev)=>!prev)
                }}
                disabled={todo.completed}
            >
                {isTodoEditable?"✅":"✏️"}
            </button>
            
            <button 
                className='p-1 text-lg rounded bg-transparent hover:bg-red-300'
                onClick={()=>deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>        
    )
}

export default Todoitem;
