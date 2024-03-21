import { useState } from "react"

const App = () => {
  
  const [tasks,setTasks] = useState([]);
  const [task,setTask] = useState("");

  const addTasks = () => {
    if(task !== ""){
      setTasks([...tasks,task])
      setTask("");
      console.log(tasks);
    }
  }

  const deleteTasks = (index) => {
    const updatedList = [...tasks];
    console.log('Automatic...')
    // delete updatedList[index];
    updatedList.splice(index,1)
    setTasks(updatedList)
  }

  return(
    <div className="bg-indigo-600 h-20 w-screen items-center shadow-lg ">
      <div className=" pt-16 flex flex-col items-center  ">
            <div className="bg-indigo-600 flex flex-col items-center h-20">
            <div className=" text-4xl font-bold items-center text-white pb-5 m-5">To Do List</div>
          
          <div className="p-6 shadow-lg  ">
            <input className=" bg-slate-100 border-b-2 border-indigo-600 rounded-md p-4 m-4 " 
            type="text"
            value={task}
            onChange = {(e)=>{
              setTask(e.target.value);
            }}
            placeholder="Create a new todo"
            />
            <button onClick={addTasks} 
            className=" bg-indigo-500 text-white p-3 m-3 rounded-md font-bold hover:bg-indigo-600">Add Todo</button>
          
          <div>
              {tasks?.length > 0 ? (
                  <ul>
                    {
                      tasks.map((task,index)=>(
                        <div className=" flex bg-slate-100 m-4 py-4 pl-12 pr-4 rounded-md" key={index}>
                          <li className="self-center font-semibold pr-10 mr-6 grow">{task}</li>
                          <button onClick={()=>{deleteTasks(index)}} 
                          className=" bg-red-500 text-white  p-2  rounded-full  font-bold hover:bg-red-600">Delete</button>
                        </div>
                      ))
                    }
                  </ul>
              ):(
                <div>
                  <p className="pl-20 ml-10" >No Task Found</p>
                </div>
              ) }
          </div>
          </div>
          </div>
      </div>
    </div>
  )
}

export default App