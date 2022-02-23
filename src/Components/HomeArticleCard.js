import { Link } from "react-router-dom"

function HomeArticleCard(props) {
  const { title, description, image } = props

  return (
    <div>
      <div className="card text-white">
        <Link to="/articles">
          <img className="card-img-top" src={image} alt={title} />
        </Link>
        <div className="card-body">
          <Link className="link-none" to="/articles">
            {title}
          </Link>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default HomeArticleCard
