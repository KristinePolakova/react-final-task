import { Route, Routes } from "react-router"
import AboutMe from "../Pages/AboutMe"
import Articles from "../Pages/Articles"
import Chat from "../Pages/Chat"
import Home from "../Pages/Home"
import Register from "../Pages/Register"
import HomeArticle from "./HomeArticle"
import HomeArticles from "./HomeArticles"

function Content() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articlesHome" element={<HomeArticles />} />
        <Route path="/articlesHome/:index" element={<HomeArticle />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/register" element={<Register />} />
        <Route path="/aboutMe" element={<AboutMe />} />
      </Routes>
    </div>
  )
}

export default Content
