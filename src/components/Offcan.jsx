import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import OffcanBody from './OffcanBody';

const options = [

  {
    name: 'Enable both scrolling & backdrop',
    scroll: true,
    backdrop: true,
  },
];

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
      <Link  onClick={toggleShow} className="me-2 offbut" style={{textDecoration:"none"}}>
        Categories
      </Link>
      <Offcanvas show={show}  onHide={handleClose} {...props} className="p-0 offcan">
        <Offcanvas.Header closeButton className='offhead'>
          <Offcanvas.Title className='me-auto pname'><h3>Categories</h3></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='p-0'>
          <OffcanBody/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Example() {
  return (
    <>
      {options.map((props, idx) => (
        <OffCanvasExample key={idx} {...props} />
      ))}
    </>
  );
}

// render(<Example />);
export default Example 