import React from 'react'
import { Link } from 'react-router-dom'

function CategorieCard({item}) {
  return (
    <Link to={"/gigs?cat=design"}>
        <div className=''>
            <img src={item.img} alt="" />
            <p>{item.desc}</p>
            <p>{item.title}</p>
        </div>
    </Link>
  )
}

export default CategorieCard
