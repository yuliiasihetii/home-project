import { SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import { Link } from 'react-router-dom'

function PopularItem({ recipe }) {
    return (
        <SplideSlide>
            <div className="card gradient">
                <Link to={'/recipe/' + recipe.id}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                </Link>
            </div>
        </SplideSlide>
    )
}

export default PopularItem