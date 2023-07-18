// import React from 'react'
// import { Row,Col} from 'react-bootstrap'

// const Card = ({ele}) => {
//   console.log(ele)
//   return (
//     <div>
//       <Row className='p-5 text-start g-5'>
//         <Col md={6} className='border p-0'>
//           <img src={ele.thumbnail} className='proimg'></img>
//         </Col>
//         <Col md={6} className='border'>
//           <h4 className='my-2 text-dark'>{ele.title}</h4>
//           <p className='my-1 text-dark'>{ele.description}</p>
//           <p className='my-1 text-success' style={{fontWeight:"bold"}}>Price: ${ele.price}</p>
//           {/* <p className='my-1 text-danger '>Price: ${ele.discountPercentage}</p> */}
//         </Col>
//           {/* <hr className='mt-1'></hr> */}
//       </Row>
//     </div>
//   )
// }

// export default Card

// import React from 'react'
import { Row,Col, Button} from 'react-bootstrap'
import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

const Card = ({ele}) => {
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  console.log(ele)
  return (
    <div>
      <Row className='p-5 text-start g-5'  >
        <Col md={6} className='border p-0'>
          <img src={ele.story_image} className='proimg'></img>
        </Col>
        <Col md={6} className='border'>
          <h4 className='my-2  pname'>{ele.post_name}</h4>
          {/* <div  style={{overflow:"hidden",textOverflow:"ellipsis"}}> */}
          <div className='desdiv'>
          <p className='mt-2 text-muted pdesc'>{ele.post_desc}</p>
        </div>
      {/* <Link onClick={() => setLgShow(true)} style={{textDecoration:"none",color:"grey"}} className='pdesc pdesc2'>read more...</Link>
      <Modal
        size="md"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Small Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>
      <Modal
        size="xl"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body  className='text-center'>
          <h1 className='mx-auto pname'>{ele.post_name}</h1>
          <img src={ele.story_image} style={{height:"400px",width:"500px"}}></img>
          <p className='my-3 mx-auto des w-75 '>{ele.post_desc}</p>

        </Modal.Body>
      </Modal> */}
          
          
          {/* <p className='my-1 text-success' style={{fontWeight:"bold"}}>Price: ${ele.price}</p> */}
          {/* <p className='my-1 text-danger '>Price: ${ele.discountPercentage}</p> */}
        </Col>
          {/* <hr className='mt-1'></hr> */}
      </Row>
      
    </div>
  )
}

export default Card