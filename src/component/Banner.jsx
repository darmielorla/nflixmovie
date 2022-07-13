import React, { useContext } from 'react'
import { ReviewContext } from '../ReviewContext'

const imgPath = 'https://image.tmdb.org/t/p/w500/'


const Banner = () => {
    const {selectMovie}= useContext(ReviewContext)
  return (
    <div>
        <div className='banner' style={{backgroundImage: `url(${imgPath}${selectMovie.backdrop_path})`}}>
            <div className='movie-content'>
                <h1 className='movie-title'>{selectMovie.title}</h1>
                <span className='movie_overview'>{selectMovie.overview}</span>

            </div>

        </div>

    </div>
  )
}

export default Banner