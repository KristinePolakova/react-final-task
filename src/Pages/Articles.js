import React, { useState } from "react"
import ReactPaginate from "react-paginate"
import { Link } from "react-router-dom"
import getArticles from "../API/getArticles"
import "../Components/Pagination.css"

function Articles() {
  const [articles] = useState(getArticles())
  const [pageNumber, setPageNumber] = useState(0)

  const articlesPerPage = 3
  const pagesVisited = pageNumber * articlesPerPage

  const pageCount = Math.ceil(articles.length / articlesPerPage)

  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  const displayArticles = articles
    .slice(pagesVisited, pagesVisited + articlesPerPage)
    .map((article, index) => {
      return (
        <div className="row mx-5 border-bottom py-4" key={index}>
          <div className="col-md-4">
            <Link to={`/articlesHome/${index}`}>
              <img className="img-fluid" src={article.image} alt="article" />
            </Link>
          </div>
          <div className="col-md-8 text-left px-5 ">
            <Link
              className="linkDecoration"
              to={`/articlesHome/${index}`}
              style={{ fontSize: "2rem" }}
            >
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
    <div className="articleContainer font-family">
      <div className="container ">
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
        <div className="pb-5">
          {displayArticles}
          <div className="pt-5">
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationsBttns"}
              previousLinkClassName={"previousBttn"}
              nextLinkClassName={"nextBttn"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Articles
