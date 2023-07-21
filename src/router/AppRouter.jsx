import { Route, Routes } from "react-router-dom"
import { AppQueryCrud } from "../pages/AppQueryCrud"

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<AppQueryCrud/>}/>
        </Routes>
    </>
  )
}
