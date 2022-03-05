import { useParams } from "react-router"
import { Link } from "react-router-dom"
import getArticleByIndex from "../API/getArticleByIndex"
import '../Components/Article.css'

function HomeArticle() {
  const { index } = useParams()
  const article = getArticleByIndex(index)
  
  return (
    <div className="container-fluid articleContainer font-family px-5">
      <div className="row px-5">
        <div className="col-sm-12 my-3">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item nav-link">
                <Link className="breadcrumbDecoration font-family" to="/">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item nav-link">
                <Link
                  className="breadcrumbDecoration font-family"
                  to="/articles"
                >
                  Articles
                </Link>
              </li>
              <li
                className="breadcrumb-item active nav-link active-breadcrumb font-family"
                aria-current="page"
              >
                {article.title}
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="row mx-5">
        <div className="col-md-6">
          <div className="row p-2">
            <div className="col-md-12">
              <a data-fancybox href={article.image1}>
                <img
                  src={article.image1}
                  className="fancyBoxPoster"
                  style={{ width: "100%", height: "auto" }}
                  alt="bigPhoto"
                />
              </a>
            </div>
          </div>
          <div className="row p-2">
            <div className="col-md-4 p-2">
              <a data-fancybox href={article.image2}>
                <img src={article.image2} className="fancyBoxImg" alt="" />
              </a>
            </div>
            <div className="col-md-4 p-2">
              <a data-fancybox href={article.image3}>
                <img src={article.image3} className="fancyBoxImg" alt="" />
              </a>
            </div>
            <div className="col-md-4 p-2">
              <a data-fancybox href={article.image4}>
                <img src={article.image4} className="fancyBoxImg" alt="" />
              </a>
            </div>
            <div className="col-md-4 p-2">
              <a data-fancybox href={article.image5}>
                <img src={article.image5} className="fancyBoxImg" alt="" />
              </a>
            </div>
            <div className="col-md-4 p-2">
              <a data-fancybox href={article.image6}>
                <img src={article.image6} className="fancyBoxImg" alt="" />
              </a>
            </div>
            <div className="col-md-4 p-2">
              <a data-fancybox href={article.image7}>
                <img src={article.image7} className="fancyBoxImg" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 articleText">
          <h2>{article.title}</h2>
          <p>{article.longDescription}</p>
        </div>
      </div>
    </div>
  )
}

export default HomeArticle
