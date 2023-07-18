import React from 'react'
import { useParams } from 'react-router-dom'
const Card2 = ({ele2,Data}) => {
  let {pid}=useParams()
  let num=Number(ele2.post_id)

  // console.log(ele2.post_id)
if(pid==num){
  return (
 
    <img src={ele2.story_image} style={{height:"200px",width:"300px",display:"none"}} className='border my-2' ></img>

   
  )
}

// toString(num)
  console.log(num)
  return (
    <div className='card2sin'>
        <img src={ele2.story_image} style={{height:"200px",width:"300px"}} className='border my-2 '></img>
        <div className='incard2sin'>
          <h4 className='text-white text-center'>{ele2.post_name}</h4>
        </div>
    </div>
  )
}

export default Card2