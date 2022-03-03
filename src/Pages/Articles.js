import { Link } from "react-router-dom"
import getArticles from "../API/getArticles"

function Articles() {
  const articles = getArticles()
  const articlesList = articles.map((article, index) => {
    return (
      <div className="row mx-5 border-bottom py-4" key={index}>
        <div className="col-md-4">
          <Link to={`/articlesHome/${index}`}>
            <img className="img-fluid" src={article.image} alt="article" />
          </Link>
        </div>
        <div className="col-md-8 text-left px-5 ">
            <Link className="linkDecoration" to={`/articlesHome/${index}`} style={{fontSize: "2rem"}}>
              {article.title}
            </Link>
          <p>
            <Link className="linkDecoration" to={`/articlesHome/${index}`}>
              {article.longDescription}
            </Link>
          </p>
        </div>
      </div>
    )
  })
  return (
    <div className="container articleContainer font-family">
      <div className="row mx-5 px-5">
        <div className="col-sm-12 my-3">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item nav-link">
                <Link className="breadcrumbDecoration font-family" to="/">
                  Home
                </Link>
              </li>
              <li
                className="breadcrumb-item active nav-link active-breadcrumb font-family"
                aria-current="page"
              >
                Articles
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {articlesList}
    </div>
  )
}

export default Articles
