import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import ProjectPage from "../pages/ProjectPage"


const RouterPage = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/:projectId" element={<ProjectPage />}/>
    </Routes>
  )
}

export default RouterPage