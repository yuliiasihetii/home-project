import React from 'react'
// import { motion } from 'framer-motion'
import { useParams } from 'react-router-dom'
import { API_CUISINE } from '../../config'
import { useState } from 'react'
import { useEffect } from 'react'
import CuisineItem from './CuisineItem'
import { motion } from 'framer-motion'

function Cuisine() {

    const [cuisine, setCuisine] = useState([])
    let params = useParams();

    const getCuisine = async (name) => {
        const data = await fetch(`${API_CUISINE}+${name}`).then((res) => res.json())
        setCuisine(data.results)
    }

    useEffect(() => {
        getCuisine(params.type)
    }, [params.type])


    return (
        <motion.div className='cuisine' animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            {cuisine.map((item) => (
                <CuisineItem key={item.id} item={item} />
            ))}
        </motion.div>
    )
}

export default Cuisine