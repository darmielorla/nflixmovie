import React from 'react'
const imgPath = 'https://image.tmdb.org/t/p/w500/'
const unavailable = 'https://www.movienewz.com/img/films/poster-holder.jpg'

const ReviewItems = ({film}) => {
  return (
    <div className='poster'>
        <div className='poster-img'>
        <img src={film.poster_path ? `${imgPath}${film.poster_path}` : unavailable} alt="" />
        </div>
        

        <span className='movie-film'>
            <h4>{film.title}</h4>
            <h6>{film.vote_average}</h6>
        </span>

    </div>
  )
}

export default ReviewItems