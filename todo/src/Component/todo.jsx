import { useEffect, useState } from "react";

const Todo = ()=>{
       const [todo, setTodo] = useState([]);
       const [dataId,setDataId] = useState();
       const [updateddata, setUpdateddata] = useState("");
       const [toggle,setToggle] = useState(false);
       const [inputData, setInputData] = useState({
         id: 1,
         todo: "",
         completed: false,
       });
       useEffect(() => {
         const fetchfun = () => {
           fetch("https://dummyjson.com/todos")
             .then((res) => res.json())
             .then((data) => {

               setTodo(data.todos);
             })
             .catch((err) => {
               console.error(err);
             });
         };
         fetchfun();
       }, []);
     
       const handleChange = (e) => {
         let data = e.target.value;

         setInputData({ id: todo.length + 1, todo: data, completed: false });
       };
     
       const handleAdd = () => {
         setTodo([inputData, ...todo]);
       };
     
       const handleEdit = (d)=>{
         setDataId(d.id);
         setUpdateddata(d.todo)
       }
       const handleInputChange =()=>{
        let arr = todo.map((d)=>{
          if(d.id == dataId){
            d.todo = updateddata;
          }
           return d;
        })
        setTodo(arr);
        setDataId(null);
       }
     
       const handleOnchange =(e)=>{
         let data = e.target.value;
         setUpdateddata(data);
       }
       const handleCheckbox = ()=>{
           setToggle(!toggle)
       }
     
       return (
         <>
           <div>
             <div style={{ display: "flex" }}>
               <input type="text" onChange={(e) => handleChange(e)} />
               <button onClick={() => handleAdd()}>Add</button>
               <input style={{width:"100px"}} placeholder="Toggle" type="checkbox" onChange={(e)=>handleCheckbox(e)} />
             </div>
             {todo?.map((d, k) => {
               return (
                 <div
                   key={k}
                   style={{
                     display: "flex",
                     alignItems: "center",
                     justifyContent: "space-between",
                     gap: "20px",
                   }}
                 >
                  { (d.id == dataId) && toggle?
                  <>
                     <input type="text" onChange={(e)=>handleOnchange(e)} value={updateddata}/> 
                     <button onClick={()=>handleInputChange()} >updated data</button>  
                  </>:
                     <p key={d.id} onClick={()=>handleEdit(d)}>{d.todo}</p>
                   } 
                  <p style={{ color: d.completed ? "green" : "red" }}>
                  {d.completed ? "Done" : "InComplete"}
                </p>
                 </div>
               );
             })}
           </div>
     
         
         </>
       );
     
     
     
}
export default Todo;