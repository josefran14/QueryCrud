import { Route, Routes } from "react-router-dom"
import { AddUserPage } from "../pages/AddUserPage"
import { AppQueryCrud } from "../pages/AppQueryCrud"
import { EditUserPage } from "../pages/EditUserPage"
import { UserPage } from "../pages/UserPage"

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<AppQueryCrud/>}/>
            <Route path="/users/:userId" element={<UserPage/>}/>
            <Route path="/form" element={<AddUserPage/>}/>
            <Route path="/user/:userId/edit" element={<EditUserPage/>}/>
        </Routes>
    </>
  )
}
