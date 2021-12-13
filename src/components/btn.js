import PropTypes from 'prop-types'
const Button = (props) => {
    return( 
        <button 
            className="btn"
            onClick={props.onClick}    
        >{props.text}</button> 
    );
}

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func.isRequired,
}

export default Button
