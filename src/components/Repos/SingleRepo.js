import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import classes from "./SingleRepo.module.css"
import LoadingSpinner from "../UI/LoadingSpinner";


const SingleRepo = ({ repoData, errorMessage, isLoading, allRepos }) => {

  let allrepos

  if(allRepos.error || allRepos.length === 0){
   allrepos =  <Col lg={4} md={4} xs={12} className={classes.borderline}>
      <div><p>{allRepos.error}</p></div>
  </Col>
  }else{
    allrepos = (
      <Col lg={4} md={4} xs={12} className={classes.borderline}>
        {allRepos.map((repo) => {
          return (
            <div key={repo.id} className="mt-3">
              <NavLink
                to={`/repositories/${repo.name}`}
                className="btn btn-lg btn-secondary"
              >
                {repo.name}
              </NavLink>
            </div>
          );
        })}
      </Col>
    );
  
  }

  const repositoryData = (
    <Col lg={8} md={8} xs={12}>
      {repoData && <div>
        <h2 style={{ fontSize: "50px", fontWeight: "600" }}>{repoData.name}</h2>
        <p>
          Created on:{" "}
          <span style={{ fontWeight: "600" }}>
            {new Date(repoData.created_at).toDateString()}
          </span>
        </p>
        <p>{repoData.description}</p>
        <div className="mt-4">
          <p>
            Default Branch:
            <span style={{ fontWeight: "600" }}>{repoData.default_branch}</span>
          </p>
        </div>

        <div>
          <p>
            To clone repo run git clone:{" "}
            <span style={{ fontWeight: "600" }}>{repoData.clone_url}</span> in
            your CLI
          </p>
        </div>
      </div>}
    </Col>
  );

  const repoLoading = <div className={`centered ${classes.loadspinner}`}>
        <LoadingSpinner />
  </div>
 

 const errorData = <>

  <Col lg={8} md={8} xs={12}>
    <h1 className={`centered ${classes.error}`}>{errorMessage}</h1>
  </Col>
 
  </>

  return (
    <Container fluid>
      <Row>
        {isLoading === true && repoLoading}
        {!repoData && isLoading === false && errorMessage && errorData}
        {repoData && repositoryData}    
        {allrepos}
    </Row>
    </Container>
  );
};

export default SingleRepo;
