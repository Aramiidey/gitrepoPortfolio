import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={`text-center container-fluid ${classes.banner}`}>
      <div className="row">
        <div className={classes.overlay}>
          <div className="col-12 text-center">
            <div className={classes.title}>
              <h4 className={classes.text}>
                <strong> MY GITHUB PORTFOLIO </strong>
              </h4>
              <h3 className={classes.qualif}>
                <strong>Certified Frontend Engineer </strong>
              </h3>
              <p className={classes.name}>AIPOLA MICHAEL OLUWASEGUN</p>

              <span>
                <NavLink
                  to={"/repositories"}
                  className={`${classes.navlink} btn btn-secondary mr-4`}
                >
                  View Repositories
                </NavLink>
                <NavLink
                  to={"/repositories/reponame/fsggsgsggsg"}
                  className={`${classes.navlink} btn btn-secondary mr-4`}
                >
                  E404 - Page
                </NavLink>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
