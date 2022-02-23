import articles from "../Data/articles"
import HomeArticleCard from "./HomeArticleCard"
import "../Components/HomeArticles.css"

function HomeArticles() {
  const article = articles
  const items = article.map((articleItem, index) => {
    return (
      <div className="col" key={index}>
        <HomeArticleCard
          title={articleItem.title}
          image={articleItem.image}
          description={articleItem.description}
        />
      </div>
    )
  })

  return (
    <div className="container p-0 my-5">
      <div className="card-group font-family">{items}</div>
    </div>
  )
}

export default HomeArticles;
