import { createContext,useContext } from "react";

export const ToDOContext=createContext({
    todos:[
        {
            id:1,
            todo:"To do mesg",
            completed:false
        }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toogleComplete:(id)=>{}
})

export const useTodo=()=>
{
    return useContext(ToDOContext)
}

export const ToDoProvider=ToDOContext.Provider