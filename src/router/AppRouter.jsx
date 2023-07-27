import { Route, Routes } from "react-router-dom"
import { AppQueryCrud } from "../pages/AppQueryCrud"
import { EditUserPage } from "../pages/EditUserPage"
import { FormUser } from "../pages/FormUser"
import { UserPage } from "../pages/UserPage"

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<AppQueryCrud/>}/>
            <Route path="/users/:userId" element={<UserPage/>}/>
            <Route path="/form" element={<FormUser/>}/>
            <Route path="/edit/:userId" element={<EditUserPage/>}/>
        </Routes>
    </>
  )
}
