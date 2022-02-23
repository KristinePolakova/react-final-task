import articles from "../Data/articles"
import HomeArticleCard from "./HomeArticleCard"

function HomeArticles() {
  const article = articles
  //   const items = []
  //   for (const index in article) {
  //     const articleItem = article[index]
  //     items.push(
  //       <div className="col">
  //         <HomeArticleCard
  //           title={articleItem.title}
  //           image={articleItem.image}
  //           description={articleItem.description}
  //         />
  //       </div>
  //     )

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
    <div className="container">
      <div className="row">{items}</div>
    </div>
  )
}

export default HomeArticles
