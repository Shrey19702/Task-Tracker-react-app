import '../App.css'

import Button from './btn'

const Header = (props) => {

    return (
        <div className="top">
            <h1>TASK TRACKER</h1>
            <Button text={props.addForm?'Close':'Add'}  
            onClick={()=>{
                props.setAddForm(!props.addForm)
            }} />
        </div>
    )
}

export default Header