import {MdOutlineClose} from 'react-icons/md';
import './PopMessage.css'

const PopMessage=({message,status,setDisapear})=>{
    return(
        <div className={`pop-message ${status=="error"?"error":"success"}`}>
            <span className='message'>{message}</span>
            <MdOutlineClose className='close-btn' onClick={()=>setDisapear(true)}/>
        </div>
    )
}

export default PopMessage;