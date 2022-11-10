import React from "react"
import { NavLink } from "react-router-dom"
import classes from "./Home.module.css"


const Home = ()  => {
  return <div className={`text-center container-fluid ${classes.banner}`}>
      <div className="row">
      <div className={classes.overlay}>
    <div className="col-12 text-center">
        <div className={classes.title}>
            <h4 className={classes.text}><strong> MY GITHUB PORTFOLIO </strong></h4>
            <h3 className={classes.qualif}><strong>  Certified Frontend Engineer </strong></h3>
            <p className={classes.name}>AIPOLA MICHAEL OLUWASEGUN</p>
        
         
         <span><NavLink to={"/repositories"} className="btn btn-secondary" style={{fontWeight:"600"}}>View Repositories</NavLink></span>
       
         </div> 
      </div>
       
      </div>
    </div>
  </div>
}

export default Home