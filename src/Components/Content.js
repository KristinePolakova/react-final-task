import { Route, Routes } from "react-router";
import AboutMe from "../Pages/AboutMe";
import Articles from "../Pages/Articles";
import Chat from "../Pages/Chat";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import ArticleHome from "./ArticleHome";
import ArticlesHome from "./ArticlesHome";

function Content() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/articlesHome" element={<ArticlesHome />} />
                <Route path="/articlesHome/:index" element={<ArticleHome />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/register" element={<Register />} />
                <Route path="/aboutMe" element={<AboutMe />} />
            </Routes>

        </div>
    )
}

export default Content;