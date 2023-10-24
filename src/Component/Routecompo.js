import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom"
import Student from "./Student"
import Contact from "./Contact"
import Home from "./Home"
import EditStudent from "./EditStudent"
import AddStudent from "./AddStudent"

function RouteCompo(){
    return(
        <>
        <BrowserRouter>
        <div className="main">

        <NavLink className="child" to="/">Home</NavLink>
        <NavLink className="child" to="/student">Student</NavLink>
        <NavLink className="child" to="/contact">Contact</NavLink>
        </div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/student" element={ <Student/>}/>
            <Route path="/contact" element={ <Contact/> }/>
            <Route  path="/editstudent" element={ <EditStudent/>}/>
            <Route path="/addstudent" element={ <AddStudent/>}/>
        </Routes>
        
        </BrowserRouter>
        </>
    )
}
export default RouteCompo


