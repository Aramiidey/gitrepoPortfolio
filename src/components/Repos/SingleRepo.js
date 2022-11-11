import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import classes from "./SingleRepo.module.css";
import LoadingSpinner from "../UI/LoadingSpinner";

const SingleRepo = ({ repoData, errorMessage, isLoading, allRepos }) => {
  console.log(repoData);
  console.log(errorMessage)
  let allrepos;

  if (allRepos.error || allRepos.length === 0) {
    allrepos = (
      <Col lg={4} sm={4} xs={12} className={classes.borderline}>
        <div>
          <p>{allRepos.error}</p>
        </div>
      </Col>
    );
  } else {
    allrepos = (
      <Col
        lg={4}
        sm={4}
        xs={12}
        className={`${classes.borderline} d-none d-sm-block`}
      >
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
    <Col lg={8} sm={8} xs={12}>
      {repoData && (
        <div>
          <h2 className={classes.repoTitle}>
            {repoData.name}
            <span>
              <p className={classes.repoTime}>
                Created at:{" "}
                {repoData.created_at
                  ? new Date(repoData.created_at).toDateString()
                  : ""}
              </p>
            </span>
          </h2>

         {repoData.created_at ? <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Description</Accordion.Header>
              <Accordion.Body>{repoData.description}</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Repository Data</Accordion.Header>
              <Accordion.Body>
                <p>
                  Default Branch:
                  <span className={classes.detailsText}>
                    {repoData.default_branch}
                  </span>
                </p>

                <p>
                  Language:
                  <span className={classes.detailsText}>
                    {repoData.language}
                  </span>
                </p>

                <p>
                  To clone repo run git clone:{" "}
                  <span className={classes.detailsText}>
                    {repoData.clone_url}
                  </span>{" "}
                  in your CLI
                </p>

                <br />
                <div>
                  <a
                    href={repoData.html_url}
                    className="btn btn-secondary"
                    target={`_blank`}
                  >
                    View Repo
                  </a>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion> : ""}
        </div>
      )}
    </Col>
  );

  const repoLoading = (
    <div className={`centered ${classes.loadspinner}`}>
      <LoadingSpinner />
    </div>
  );

  const errorData = (
    <>
      <Col lg={8} sm={8} xs={12}>
        <h1 className={`centered ${classes.error}`}>{errorMessage}</h1>
      </Col>
    </>
  );

  return (
    <Container fluid>
      <Row>
        {isLoading === true && repoLoading}
        {errorMessage && repoData.error && errorData}
        {repoData && !repoData.error && repositoryData}
        {allrepos}
      </Row>
    </Container>
  );
};

export default SingleRepo;
