import { createSlice, nanoid } from "@reduxjs/toolkit"; // import createSlice, nanoid is used to create unique id
// initial state may be an object or array 
const initialState={
    todos:[{id:1,text:"Hello world",}]
}

function sayHello(){
    console.log("Hello Don");
    

}

export const todoSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{  // in reduser we have properties and function is used to add data
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(), // nanaoid generate unique id
                text:action.payload // action is the input and playload is object of that input
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((each)=>each.id!==action.payload)
        }
    } 
})

export const {addTodo,removeTodo}=todoSlice.actions

export default todoSlice.reducer