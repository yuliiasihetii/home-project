import { useState, useEffect } from "react";
import { API_VEGGIE } from "../../config";
import { Splide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import VeggieItem from "./VeggieItem";

function Veggie() {
    const [veggie, setVeggie] = useState([]);

    useEffect(() => {
        getVeggie();
    }, [])

    const getVeggie = async () => {
        const check = localStorage.getItem('veggie');

        if (check) {
            setVeggie(JSON.parse(check))
        } else {
            const data = await fetch(API_VEGGIE).then((res) => res.json());

            localStorage.setItem('veggie', JSON.stringify(data.recipes))
            setVeggie(data.recipes);
        }

    };

    return (
        <div className="wrapper">
            <h3>Our Vegetarian Picks</h3>
            <Splide options={{
                perPage: 3,
                arrows: true,
                pagination: false,
                drag: 'free',
                gap: '60px'
            }}>
                {veggie.map((recipe) => (
                    <VeggieItem key={recipe.id} recipe={recipe} />)
                )}
            </Splide>

        </div>
    )
}

export default Veggie