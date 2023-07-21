import { Route, Routes } from "react-router-dom"
import { AppQueryCrud } from "../pages/AppQueryCrud"
import { UserPage } from "../pages/UserPage"

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<AppQueryCrud/>}/>
            <Route path="/users/:userId" element={<UserPage/>}/>
        </Routes>
    </>
  )
}
