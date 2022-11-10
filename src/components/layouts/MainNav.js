import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from "react-router-dom"
import Nav from 'react-bootstrap/Nav';
import classes from "./MainNav.module.css"
import SearchBar from './SearchBar';
import ProfileImage from "../../assets/profile.jpg"

const  MainNav = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={ProfileImage}
              width="30"
              height="30"
              className={`d-inline-block align-top ${classes.img}`}
            />{' '}
            GitHub Repo
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink to={"/"}> <span style={{color:"white", marginRight:"20px"}}>Home</span></NavLink>
            <NavLink to={"/repositories"}><span style={{color:"white", marginRight:"20px"}}>Repos</span></NavLink>
          </Nav>
          <SearchBar />
        </Navbar.Collapse>

        </Container>
      </Navbar>
    </>
  );
}


export default MainNav;