import React, {createContext, useState} from 'react'


export const ReviewContext=createContext()

const ReviewProvider = ({children}) => {
    const [review, setReview]=useState('');
    const [searchKey, setSearchKey]=useState('');
    const [selectMovie, setSelectMovie]=useState('');
    

  return (
    <ReviewContext.Provider value={{review, setReview, searchKey, setSearchKey, selectMovie, setSelectMovie }} >
    {children}
    </ReviewContext.Provider>
  )
}

export default ReviewProvider