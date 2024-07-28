import React from "react"
import TodoForm from "./components/TodoForm"
import Todoitem from "./components/Todoitem"
function App() {
  return (
    <>
      <div className="w-full h-screen bg-black flex justify-center">
        <div className="container w-8/12 h-full flex flex-col gap-4 items-center mt-20">
            <h1 className="text-3xl font-bold text-white">To Do List</h1>
            <div className="w-7/12">
              <TodoForm/>
            </div>
            <div className="w-7/12">
              <Todoitem/>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
