
import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";



const Student = () => {



  const data = useSelector((state) => state.Stu_Data);
  console.log(data);

  const Navigate = useNavigate();

  return (
    <>
      <h1 >Student Page</h1>
      <button className="addbtn" onClick={() => Navigate("/addstudent")} > Add New Student</button>
      <table border="1px">
        <thead>
          <tr>
            <th>name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Batch</th>
            <th>Change</th>
          </tr>
        </thead>


        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.batch}</td>
                <td>{item.course}</td>
                <td>
                 
                  <NavLink to="/editStudent" state={{ index }}>
                    Edit
                  </NavLink>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>


  );
};

export default Student;