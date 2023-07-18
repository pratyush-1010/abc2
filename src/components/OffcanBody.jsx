import React from 'react'
import { Dropdown, NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart,faHandshake,faFaceSadTear,faBrain,faPray,faGhost,faFaceLaughWink,faGun,faFaceGrinSquintTears} from '@fortawesome/free-solid-svg-icons'
import Mod from './Mod'

const OffcanBody = ({ele}) => {
    // const{id,title}=ele;
    console.log(ele)
    
  return (
    <div>
        <ul className='types' >
            <Link to={`/categories/2`}  className='typess'>
             <li>Friendship<FontAwesomeIcon icon={faHandshake} className='licon'></FontAwesomeIcon></li>
            </Link>
            <Link to={`/categories/3`} className='typess' >
            <li >Love <FontAwesomeIcon icon={faHeart} className='licon'></FontAwesomeIcon></li>
            </Link>
            <Link to={`/categories/4`} className='typess' >
            <li >Tragedy <FontAwesomeIcon icon={faFaceSadTear} className='licon'></FontAwesomeIcon></li>
            </Link>
            <Link to={`/categories/5`} className='typess' >
            <li >Inspiration <FontAwesomeIcon icon={faBrain} className='licon'></FontAwesomeIcon></li>
            </Link>
            <Link to={`/categories/6`} className='typess' >
            <li >Mythology <FontAwesomeIcon icon={faPray} className='licon'></FontAwesomeIcon></li>
            </Link>
            <Link to={`/categories/7`} className='typess' >
            <li >Horror <FontAwesomeIcon icon={faGhost} className='licon'></FontAwesomeIcon></li>
            </Link>
            <Link to={`/categories/8`} className='typess' >
            <li >Comedy<FontAwesomeIcon icon={faFaceGrinSquintTears} className='licon'/></li>
            </Link>
            <Link to={`/categories/9`} className='typess' >
            <li >Thriller <FontAwesomeIcon icon={faGun} className='licon'></FontAwesomeIcon></li>
            </Link>
        </ul>
        
    </div>
  )
}

export default OffcanBody