import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addStudent } from "../Slice/Slice";


function AddStudent(){
  
        
         const Navi = useNavigate();
  const dispatch = useDispatch();

  const [info, setInfo] = useState({
    name: "",
    age: "",
    course: "",
    batch: "",
  });

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    dispatch(addStudent({ info }));
    Navi("/Student");
    console.log(info);
  };

  return (
    <>
      <h1>Add new Student</h1>
      <form>
          <div className="display">
            <div className="display1">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  placeholder="Enter Name here"
                  name="name"
                  onChange={handleChange}/>

            
                <label htmlFor="age">Age:</label>
                <input
                  type="number"
                  placeholder="Enter Age"
                  name="age"
                  onChange={handleChange}/>

           </div>
           <div className="display1">
            
                <label htmlFor="course">Course:</label>
                <input
                  type="text"
                  placeholder="Enter Course"
                  name="course"
                  onChange={handleChange}
                />
            
                <label htmlFor="batch">Batch:</label>
                <input
                  type="text"
                  placeholder="Enter batch"
                  name="batch"
                  onChange={handleChange}
                />
              </div>

       </div>



             <div className="display"> 
        
        <button className="btn" onClick={() => Navi("/Student")}>Cancel</button>
        <button className="btn2" onClick={handleSubmit}> Add Student</button>
        </div>
      </form>
     
    </>
  );
   
}
export default AddStudent