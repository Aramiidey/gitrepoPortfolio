import React, {useState, Fragment} from "react"
import { useLocation } from "react-router-dom"
import classes from "./Layout.module.css"
import MainNav from "./MainNav"



const Layout = (props) => {
const [isHome, setIsHome] = useState(false)
const location = useLocation()
const {pathname} = location


    return <Fragment>
        <MainNav />
        <main className={pathname === "/" ? classes.main2 : classes.main}>{props.children}</main>
    </Fragment>
}


export default Layout