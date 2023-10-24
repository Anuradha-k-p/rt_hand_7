
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { editStudent } from "../Slice/Slice";

const EditStudent = () => {
  const index = useLocation().state.index;
  const data = useSelector((state) => state.Stu_Data);
  console.log(index);

  const Navi = useNavigate();
  const dispatch = useDispatch();

  const [info, setInfo] = useState({
    name: data[index].name,
    age: data[index].age,
    course: data[index].course,
    batch: data[index].batch,
  });

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    dispatch(editStudent({ info, index }));
    Navi("/student");
    console.log(info);
    console.log(index);
  };

  return (
    <>
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
        <button  onClick={() => Navi("/student")}> Cancel</button>
        <button onClick={handleClick}> Update</button>
        </div>

      </form>
    </>
  );
};

export default EditStudent;