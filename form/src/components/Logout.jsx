import React, { useState } from "react"
import {  Button, Alert } from "reactstrap"
import { useAuth } from "../context/AuthContext"
import {  useNavigate } from "react-router-dom"

function Logout() {
const [error, setError] = useState("")
const {  logout } = useAuth()
const nav = useNavigate()

    async function handleLogout(e) {
    e.preventDefault();
    setError("")
    try {
    await logout()
    nav("/")
    } catch {
    setError("Failed to log out")
    }
}

return (
    <div className="d-flex text-decoration-none  something ">
        {error && <Alert color="danger">{error}</Alert>}
        <div >
        <Button type='click' color="info" className=" " onClick={handleLogout}>
            Log Out
        </Button>
        </div>
    </div>
)
}
export default Logout;