import React from 'react'
import Header from '../Utils/Header'
import Card from '../Components/Card'
import Ourwork from '../Components/Services/Ourwork'
import NewsLatter from '../Components/NewsLatter'
import Footer from '../Components/Footer'

function Service() {
  return (
    <div>

       <Header title={"Our Sevices"}/>
       <Card bg={"black"} />
       <Ourwork/>
       <NewsLatter/>
       <Footer/>
       
      
    </div>
  )
}

export default Service
