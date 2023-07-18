// import React,{useState,useEffect} from 'react'
// import axios from 'axios'
// import { useParams } from 'react-router-dom'
// import {Row,Col,Carousel} from 'react-bootstrap'
// const Single = ({ele}) => {
//     const [sinData,setSinData]=useState({})
//     const {pid}=useParams()
//     const getUserData = () =>{
    
//         axios.get(`https://dummyjson.com/product/${pid}`)
      
    
//         .then((res)=>{
//           setSinData(res.data)
//         })
//         .catch(err=>console.log(err))
        
     
//         }
//         useEffect(()=>{
//             getUserData();
//         },[])
//         console.log(sinData)
         
//   return (
//     <div className='container p-5'>
//         <Row className='g-0'>
//             <Col md={6} className=' text-end pe-5'>
//                <img src={sinData.thumbnail} className='sinimg'/>
          
//             </Col>
//             <Col md={6} className='text-start'>
//                 <h1 className=''>{sinData.title}</h1>
//                 <h3 className='mb-5'>{sinData.description}</h3>
//                 <h3 className='my-3'>Brand: {sinData.brand}</h3>
//                 <h3 className='my-3'>Rating: {sinData.rating}/5</h3>
//                 <h3 className='text-success my-3'>Price: ${sinData.price}</h3>
//             </Col>
//         </Row>
//     </div>
//   )
// }

// export default Single


import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import {Row,Col,Carousel} from 'react-bootstrap'
import Card2 from './Card2'
import { Link } from 'react-router-dom'
import SinRight from './SinRight'
const Single = () => {
    const [sinData,setSinData]=useState({})
    const [catData,setCatData]=useState([])
    const {pid}=useParams()
    const {cat}=useParams();

    // const{cat}=useParams()
    const getUserData = () =>{
    
        axios.get(`https://mapi.trycatchtech.com/v3/stories/single_post?story_id=${pid}`)
      
    
        .then((res)=>{
          setSinData(res.data)
        })
        .catch(err=>console.log(err))
        
     
        }
        useEffect(()=>{
            getUserData(sinData);
            getUserData2()
        },[catData])


        const getUserData2 = () =>{
    
          axios.get(`https://mapi.trycatchtech.com/v3/stories/post_list?category_id=${cat}`)
        
      
          .then((res)=>{
            setCatData(res.data)
          })
          .catch(err=>console.log(err))
          
       
          }
          // useEffect(()=>{
          //     getUserData2();
          // },[catData])
        
    
        // console.log(catData)
      
         
  return (
    <>
    <div className='container p-5 text-center'>
        <Row className='g-0'>
            <Col md={9} className=''>
                <h1 className='pname'>{sinData.post_name}</h1>
               <img src={sinData.story_image} className='sinimg'/>
          
            {/* </Col> */}
            {/* <Col md={6} className='text-start'> */}
                <p className='my-3 mx-auto des w-75 pdesc'>{sinData.post_desc}</p>
                {/* <h3 className='my-3'>Brand: {sinData.brand}</h3>
                <h3 className='my-3'>Rating: {sinData.rating}/5</h3>
                <h3 className='text-success my-3'>Price: ${sinData.price}</h3> */}
            </Col>
            
            {/* {
           Data.map((ele,ind)=>{
                        return( */}
                        
                            <Col md={3} style={{borderLeft:"1px solid grey",marginTop:"-50px"}} className='px-5'>
                            <h2 className='pname my-4' >Related Stories</h2>
                            
                            {
                            
                              catData.slice(0,4).map((ele2,ind)=>{
                                return(
                                  <Link to={`/categories/${cat}/story/${ele2.post_id}`} >
                                  <Card2 ele2={ele2} />
                                  </Link>
                                  
                                )
                                
                              })
                            
                            }
                            
                            
                        </Col>
                            {/* )
                          })
        } */}

        </Row>
    </div>
           <hr style={{marginTop:"-48px"}}></hr>
           </>
  )
}

export default Single