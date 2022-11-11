import React, {useState} from "react"
import {Container, Row, Col, Card} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import classes from "./Repolists.module.css"
import LoadingSpinner from "../UI/LoadingSpinner"
import GitHubImg from "../../assets/githubimage.png"
import CryingEmoji from "../../assets/cryingemoji.jpg"
import Pagination from "../Pagination/Pagination"

const RepoLists = ({repos, isLoading, errorMessage}) => {

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(3);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = repos.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(repos.length / recordsPerPage)


  const repoData =  <Row>
    {repos.length > 0 && currentRecords.map((repo) => {
          return  <Col lg={4} md={6} sm={6} xs={12} xl={4}>
          <Card key={repo.id} className={`${classes.card} mb-3`}>
            <Card.Img variant="top" src={GitHubImg} />
            <Card.Body>
              <Card.Title>{repo.name}</Card.Title>
              <Card.Text>
               {repo.description ? repo.description : "Description for this repository is not provided yet"}
               
              
               <div>
               <span style={{fontWeight:"600"}}>{new Date(repo.created_at).toDateString()}</span>
               </div>
              </Card.Text> 
              <NavLink
                to={`/repositories/${repo.name}`}
                variant="warning"
                className={`btn btn-lg ${classes.navlink}`}
              >
                {" "}
                View Details
              </NavLink>
            </Card.Body>
          </Card>
        </Col>
        })}
   </Row>
 
 const errorData = 
 <Row>
  <Col lg={3} md={2} xs={12}>
    
  </Col>
  <Col lg={6} md={8} xs={12}>
    <h1 className={`centered ${classes.error}`}>{errorMessage}</h1>
    <div>
      <img src={CryingEmoji} className={classes.emoji}/>
    </div>
  </Col>
  <Col lg={3} md={2} xs={12}>
    
  </Col>
 </Row>
 
 const repoLoading = <Row>
  <div className={`centered ${classes.loadspinner}`}>
        <LoadingSpinner />
  </div>
 </Row>
 
  return (
    <Container>
      {isLoading === true && repoLoading}
       {repos && repos.length > 0 && repoData} 
       {errorMessage && errorData}

<Pagination
    nPages = { nPages }
    currentPage = { currentPage } 
    setCurrentPage = { setCurrentPage }
/>
    </Container>
  );
};

export default RepoLists;
