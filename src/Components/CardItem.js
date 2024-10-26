import React from 'react'
import { Link } from 'react-router-dom'

function CardItem({ path, label, src, text }) {
  return (
    <li className="relative overflow-hidden rounded-lg shadow-md group">
      <Link className="block" to={path}>
        <figure className="cards__item__pic-wrap" data-category={label}>
          <img src={src} alt={text} className="cards__item__img"/>
        </figure>
        <div className="p-4">
          <h5 className="text-lg font-medium text-gray-900">{text}</h5>
        </div>
      </Link>
    </li>
  )
}

export default CardItem
