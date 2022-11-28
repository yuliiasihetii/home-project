import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_SEARCH } from '../config'
import CuisineItem from './Cuisine/CuisineItem';

function Searched() {

    const [searchedReipes, setsearchedReipes] = useState([])
    let params = useParams();

    const getSearched = async (name) => {
        const data = await fetch(`${API_SEARCH}+${name}`).then((res) => res.json())
        setsearchedReipes(data.results)
    }

    useEffect(() => {
        getSearched(params.search)
    }, [params.search])


    return (
        <div className='cuisine'>
            {searchedReipes.map((item) => (
                <CuisineItem key={item.id} item={item} />
            ))}
        </div>
    )
}

export default Searched