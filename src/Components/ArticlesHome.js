import { Link } from "react-router-dom"
import getArticles from "../API/getArticles"
import "../Components/HomeArticles.css"

function ArticlesHome() {
  const articles = getArticles()

  const articlesList = articles.map((article, index) => {
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
    <div className="container p-0 my-5">
      <div className="card-group font-family">{articlesList}</div>
    </div>
  )
}

export default ArticlesHome