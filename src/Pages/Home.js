import ArticlesHome from "../Components/ArticlesHome";
import Carousel from "../Components/Carousel"
import HomeArticles from "../Components/HomeArticles";

function Home() {
  return (
    <div>
      <Carousel />
      {/* <HomeArticles /> */}
      <ArticlesHome />
    </div>
  )
}

export default Home;
