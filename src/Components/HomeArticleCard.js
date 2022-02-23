import { Link } from "react-router-dom"

function HomeArticleCard(props) {
  const { title, description, image } = props

  return (
    <div>
      <div class="card">
        <img src={image} class="card-img-top" alt={title} />
        <div class="card-body">
          <Link className="link-none" to="/articles">
            {title}
          </Link>
          <p class="card-text">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default HomeArticleCard;
