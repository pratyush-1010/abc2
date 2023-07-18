
// import React,{useState,useEffect}from 'react'
// import axios from 'axios';
// import Card from './Card';
// import { Link, useParams } from 'react-router-dom';
// import { Row,Col } from 'react-bootstrap';
// const Cat = () => {
//     const [data,setdata] = useState([])
//     const {cat}=useParams();
//     // console.log(cat)
//   const getUserData = () =>{
    
    
//     axios.get(`https://dummyjson.com/products/category/${cat}`)
    

  

//     .then((res)=>{
//       setdata(res.data.products)
//     })
//     .catch(err=>console.log(err))
    
 
//     }
//     useEffect(()=>{
//         getUserData();
//     },[])
//     console.log(data)
     
//   return (
//     <div className='container'>
//         <>
        
//       <Row>

//         {
//           data.map((ele,ind)=>{
//             return(
//                     <Col md={6} >
//                         <Link to={`/categories/${ele.category}/product/${ele.id}`} style={{textDecoration:"none"}}>
//                         <Card key={ind} ele={ele}/>
//                         </Link>

        
//                     </Col>
//                 )
//               })
//             }
        
       
       
//             </Row>
        
//         </>
//     </div>
//   )
// }

// export default Cat

import React,{useState,useEffect}from 'react'
import axios from 'axios';
import Card from './Card';
import { Link, useParams } from 'react-router-dom';
import { Row,Col } from 'react-bootstrap';
import Mod from './Mod';
// import React, { useState } from 'react';
// import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const Cat = () => {
    const [data,setdata] = useState([])
    const {cat}=useParams();
    // console.log(cat)
  const getUserData = () =>{
    
    
    axios.get(`https://mapi.trycatchtech.com/v3/stories/post_list?category_id=${cat}`)
    

  

    .then((res)=>{
      setdata(res.data)
    })
    .catch(err=>console.log(err))
    
 
    }
    useEffect(()=>{
        getUserData();
    },[data])
    // console.log(data)
 
     
  return (
    <div className='container'>

        <>
        
      <Row className='g-0'>

       
        {
           data.map((ele,ind)=>{
                        return(
                                <Col md={6} className='cardd'>
                                <Link to={`/categories/${cat}/story/${ele.post_id}`} style={{textDecoration:"none"}}> 
                                      <Card key={ind}  ele={ele}/>
                                 </Link> 
                             
                    
                           </Col>
                            )
                          })
        }
       
       
            </Row>
        
        </>
    </div>
  )
}

export default Cat