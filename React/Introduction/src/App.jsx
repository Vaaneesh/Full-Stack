import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import style from 'radium/lib/components/style';

function App() {
  const [todos, setTodos] = useState([]) //variable bnane ke liye jo change hora
  const[title,setTitle]=useState("");
  const[desc,setDesc]=useState("");
  console.log(todos);
  function addTodoHandler(){
    // const newTodo={
    //   id:todos.length+1,
    //   title:title,
    //   desc:desc
    // };
    let id=todos.length;
    let newTodo=[...todos,{id:id,title:title,desc:desc,isComplete:false}];
    setTodos(newTodo);
  }
  function titleChangeHandler(e){
    setTitle(e.target.value);
  }
  function descChangeHandler(e){
    setDesc(e.target.value);
  }
  function FormSubmitHandler(e){
    e.preventDefault();
    setTitle("");
    setDesc("");
  }
  function todoDeleteHandler(id){
    let newTodo=todos.filter((todo)=>todo.id!=id);
    setTodos(newTodo);
  }
  function todoCompleteHandler(id){
    let newTodo=todos.map((todo)=>{
      if(todo.id==id){
        todo.isComplete=!todo.isComplete;
        return todo;
      }else{
          return todo;
      }
    })
    setTodos(newTodo);
  }
  return (
    <>
    <form onSubmit={FormSubmitHandler} action="">
      <input onChange={titleChangeHandler} type="text" value={title} name='' id='' placeholder='ENter title'/>
      <input onChange={descChangeHandler} type="text" value={desc} name='' id='' placeholder='ENter desc'/>
      <button onClick={addTodoHandler}>Add</button> 
    </form>
      <div className="container">
        {todos.map((todo)=>{
           return(
            <>
             <Todo title={todo.title} isComplete={todo.isComplete} desc={todo.desc} key={todo.id}  /> 
             <TodoButton id={todo.id}  todoCompleteHandler={todoCompleteHandler} todoDeleteHandler={todoDeleteHandler} />
             </>
           ) 
        })}
      </div>
    </>
  )
}
function TodoButton({id,isComplete,todoCompleteHandler,todoDeleteHandler}){
  return(
    <div className="button">
        <input type="checkbox" checked={isComplete} onChange={()=>todoCompleteHandler(id)} />
        <button onClick={function(){todoDeleteHandler(id)}}>X</button>
      </div>
  )
}
function Todo({title,desc,isComplete}){ 
  console.log(isComplete)//Component hai ye and first letter CAP
  return(
      <div className="container" style={ isComplete? {textDecoration:"line-through"}:{}}>
        <span>{title}</span> <span>{desc}</span>
      </div>
  )
}
export default App
