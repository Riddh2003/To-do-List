import React,{useState,useEffect} from "react"
import TodoForm from "./components/TodoForm"
import Todoitem from "./components/Todoitem"
import { TodoProvider } from "./contextapi/TodoContext"
function App() {
  const [todos,setTodos] = useState([])
  const addTodo = (todo) => {
    setTodos((prev)=>[{id:Date.now(),...todo},...prev])
  }
  const updateTodo = (id,todo) => {
    setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id?todo:prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev)=>prev.filter((todo)=>todo.id !== id))
  }
  const toggleComplete = (id) => {
    setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id === id?{...prevTodo,completed:!prevTodo.completed}:prevTodo))
  }
  useEffect(()=>{
    const todos= JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length>0){
      setTodos(todos)
    }
  },[])
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
      <div className="w-full min-h-screen bg-black flex justify-center">
        <div className="container w-8/12 h-full flex flex-col gap-4 items-center mt-20">
            <h1 className="text-4xl font-bold text-white">To Do List</h1>
            <div className="w-7/12">
              <TodoForm/>
            </div>
            <div className="w-7/12 flex flex-col items-center gap-2">
              {
                todos.map((todo)=>(
                  <div className="w-full" key={todo.id}>
                    <Todoitem todo={todo}/>
                  </div>
                ))}
            </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
