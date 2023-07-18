import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Card from './Card'
import{Row,Col,Button} from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom'
import SinRight from './SinRight'
// import Button from 'react-bootstrap/Button';
const Home = ({ele}) => {
  console.log(ele)
    const RanCount= Math.floor(Math.random()*7)+2
    const RanCount2= Math.floor(Math.random()*100)+1

// console.log(RanCount)
const [data,setdata] = useState([])
const {cat}=useParams();
// console.log(cat)
const getUserData = () =>{


axios.get(`https://mapi.trycatchtech.com/v3/stories/post_list?category_id=8`)




.then((res)=>{
  setdata(res.data)
})
.catch(err=>console.log(err))


}
useEffect(()=>{
    getUserData();
},[])
  return (
    
    <div className='container py-5'>
      {/* <SinRight/> */}
      <Carousel className='caro' interval={10000}>
      <Carousel.Item  >
        <img
          className="d-block w-100"
          src="http://mapi.trycatchtech.com/uploads/stories/ae1579bdf0a4201318f27341de0ee0dd.jpg"
          alt="First slide"
        />
        <Carousel.Caption className='carocap'>
          <h1 className='pname text-white'>Most Liked Story of Month</h1>
          <Link to={`/categories/2/story/8`} style={{textDecoration:"none"}}>
          <Button variant="outline-danger">View</Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="http://mapi.trycatchtech.com/uploads/stories/5e9e1485440a5c01d4854a61898993ca.jpg"
          alt="Second slide"
        />

        <Carousel.Caption className='carocap'>
          <h1 className='pname text-white'>Most Read Story of Month</h1>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          <Link to={`/categories/5/story/32`} style={{textDecoration:"none"}}>
          <Button variant="outline-danger">View</Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item >
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="http://mapi.trycatchtech.com/uploads/stories/1eecd7d67950945ac56581fc7bd59c4a.jpg"
          alt="Third slide"
        />

        <Carousel.Caption className='carocap'>
          <h1 className='pname text-white'>Most Rated Story of Month</h1>
          <Link to={`/categories/9/story/65`} style={{textDecoration:"none"}}>
          <Button variant="outline-danger">View</Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <Row className='g-0 mt-5'>
      <h1 className='pname'>Most Liked Category Of Month:<br></br><span className='text-danger'>Comedy</span></h1>
      {
           data.map((ele,ind)=>{
            return(
                    <Col md={6} className="cardd">
                    <Link to={`/categories/8/story/${ele.post_id}`} style={{textDecoration:"none"}}> 
                          <Card key={ind}  ele={ele} />
                     </Link> 
                 
        
               </Col>
                )
              })
      }
      
    </Row>
    </div>
  )
}

export default Home