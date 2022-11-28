import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiKey } from "../config";


function Recipe() {
    let params = useParams();
    const [details, setDetails] = useState([]);
    const [activeTab, setActiveTab] = useState('instructions')

    const getDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${apiKey}`).then((res) => res.json())
        setDetails(data)
    }

    useEffect(() => {
        getDetails()
    }, [params.name])
    return (
        <div className="detail-wrapper">
            <div>
                <h2>{details.title}</h2>
                <img src={details.image} alt='' />
            </div>
            <div className="info">
                <button className={activeTab === 'instructions' ? 'btn active' : 'btn'} onClick={() => setActiveTab('instructions')}>Instructions</button>
                <button className={activeTab === 'ingredients' ? 'btn active' : 'btn'} onClick={() => setActiveTab('ingredients')}>Ingredients</button>
                {activeTab === 'instructions' && (
                    <div>
                        <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
                        <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
                    </div>
                )}
                {activeTab === 'ingredients' && (
                    <ul>
                        {details.extendedIngredients.map((ingredient) =>
                            <li key={ingredient.id}>{ingredient.original}</li>)}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default Recipe