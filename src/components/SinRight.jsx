import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun,faMoon} from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
const SinRight = () => {
  
    const [theme,setTheme]=useState("light-theme")
    const [icon1,setIcon1]=useState(faMoon)
    const [mode,setMode]=useState("Night")
    const toggleTheme=()=>{
        if(theme==="dark-theme"){
            setTheme("light-theme")
            setIcon1(faMoon)
            setMode("Night")
        }
        else{
            setTheme("dark-theme")
            setIcon1(faSun)
            setMode("Day")

            
        }
    }
    useEffect(()=>{
        document.body.className=theme;
    },[theme])

    
  return (
    <>
    {['bottom'].map((placement) => (
        <OverlayTrigger
          key={placement}
          placement={placement}
          overlay={
              <Tooltip>
              Switch to {mode} mode
            </Tooltip>
          }
        >
          <Button style={{borderRadius:"50%",height:"45px",width:"45px"}} className='pname offcan mt-1' onClick={toggleTheme}>
          <FontAwesomeIcon icon={icon1}></FontAwesomeIcon>
          </Button>
        </OverlayTrigger>
      ))}

      </>
    
  )
}
export default SinRight;