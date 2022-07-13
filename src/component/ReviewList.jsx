import React,  {useContext, useEffect} from 'react'
import { ReviewContext }from '../ReviewContext'
import ReviewItems from './ReviewItems'


const url='https://api.themoviedb.org/3/'
// // const key='61bbc12bb9d13a0679b8165b927ceeee'
// const number ='https://api.themoviedb.org/3/search/movie?api_key=61bbc12bb9d13a0679b8165b927ceeee&query=lost'




const ReviewList = () => {
    const{review, setReview, searchKey, setSelectMovie}=useContext(ReviewContext)

    useEffect(()=>{
        const getReview= async () =>{
            const type = searchKey ? 'search' : 'discover'
            const response = await fetch(`${url}${type}/movie?api_key=61bbc12bb9d13a0679b8165b927ceeee&query=${searchKey}`)
            const review = await response.json()
            setReview(review.results)
            setSelectMovie(review.results[0])
            console.log(review.results)
        }
        getReview() 
    }, [setReview, setSelectMovie, searchKey ])

    if (!review || review.length === 0){
        return 'loading...'
    }
  return (
    <div className='film'>
        {review.map((film)=>(
            <ReviewItems key={film.id} film={film} />
        ))}
        
    </div>
  )
}

export default ReviewList