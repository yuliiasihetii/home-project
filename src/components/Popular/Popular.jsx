import { useState, useEffect } from "react";
import { API_POPULAR } from "../../config";
import PopularItem from "./PopularItem";
import { Splide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'

function Popular() {

    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular();
    }, [])

    const getPopular = async () => {
        const check = localStorage.getItem('popular');

        if (check) {
            setPopular(JSON.parse(check))
        } else {
            const data = await fetch(API_POPULAR).then((res) => res.json());

            localStorage.setItem('popular', JSON.stringify(data.recipes))
            setPopular(data.recipes);
        }

    };


    return (
        <div className="wrapper">
            <h3>Popular Picks</h3>
            <Splide options={{
                perPage: 4,
                arrows: true,
                pagination: false,
                drag: 'free',
                gap: '60px'
            }}>
                {popular.map((recipe) => (
                    <PopularItem key={recipe.id} recipe={recipe} />)
                )}
            </Splide>

        </div>
    )
}

export default Popular