
import Carousel from "../Components/Carousel"
import HomeArticles from "../Components/HomeArticles";

function Home() {
  return (
    <div className="home-container">
      <Carousel />
      <div className="mt-5">
      <HomeArticles />
      </div>
      
    </div>
  )
}

export default Home;
