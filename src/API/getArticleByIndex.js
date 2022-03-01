import getArticles from "./getArticles"

function getArticleByIndex(index) {
  const articles = getArticles()

  return articles[index]
}

export default getArticleByIndex
