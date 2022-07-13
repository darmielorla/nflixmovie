import React, {useContext, useState} from 'react'
import { ReviewContext } from '../ReviewContext'





const ReviewForm = () => {
    const {setSearchKey}=useContext(ReviewContext)
    const [show, setShow]=useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        setSearchKey(show)
        setShow('')
    }
  return (
    <header className='form'>
       <main className='form-change'>
       <h1>nFlix</h1>

<form onSubmit={handleSubmit}>
    <input type="text" placeholder="Search" value={show} onChange={(e)=> setShow(e.target.value)} />
    <button>Search</button>
</form>
        </main> 
    </header>
  )
}

export default ReviewForm