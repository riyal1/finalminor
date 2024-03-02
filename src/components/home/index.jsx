import React from 'react'
import './index.css'
import { useAuth } from '../../contexts/authContext'
import MainContainer from '../MainContainer'

const Home = () => {
    const { currentUser } = useAuth()
    return (
        <div className="App"> 

       
        <MainContainer></MainContainer>
        </div>
    )
}

export default Home