import React, { useState } from "react"
import {  Button, Alert } from "reactstrap"
import { useAuth } from "../context/AuthContext"
import {  useNavigate } from "react-router-dom"
import axios from 'axios'
import Cookies from "js-cookie"

function Logout() {
const [error, setError] = useState("")

const nav = useNavigate()

    async function handleLogout(e) {
    e.preventDefault();
    setError("")
    try {
    await axios.post('http://192.168.1.93/logout')
    .then((res) => {
        Cookies.remove('sessionid', 'j0trvckxlgkmomr3sgmann8p412aenlz')
        console.log(res);
        nav("/")
    })
    } catch {
    setError("Failed to log out")
    }
}

return (
    <div className="d-flex text-decoration-none  something ">
        {error && <Alert color="danger">{error}</Alert>}
        <div >
        <Button type='click'  className="bg-white text-black " onClick={handleLogout}>
            Log Out
        </Button>
        </div>
    </div>
)
}
export default Logout;