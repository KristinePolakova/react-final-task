import { Link } from "react-router-dom"
import getArticles from "../API/getArticles"
import "../Components/HomeArticles.css"
import "../Components/HomeArticles.css"

function HomeArticles() {
  
  const articles = getArticles()
  const articlesPerPage = 3

  const articlesList = articles.slice(0, articlesPerPage).map((article, index) => {
    return (
      <div className="card text-white" key={index}>
        <Link to={`/articlesHome/${index}`}>
        <img className="card-img-top" src={article.image} alt="article" />
        </Link>
        
        <div className="card-body">
          <h5 className="card-title link-none">
            <Link className="linkDecoration" to={`/articlesHome/${index}`}>{article.title}</Link>
          </h5>
          <p className="card-text"> <Link className="linkDecoration" to={`/articlesHome/${index}`}>{article.description}</Link></p>
        </div>
      </div>
    )
  })

  return (
    <div className="container mt-5 my-0 px-0 pb-5">
      <div className="card-group font-family">{articlesList}</div>
    </div>
  )
}

export default HomeArticles;
