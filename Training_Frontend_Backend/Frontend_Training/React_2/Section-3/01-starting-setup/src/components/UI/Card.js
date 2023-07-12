import './Card.css'
function Card(props){
    const classes='card '+ props.className;
    return <div className={classes}>{props.children}</div>;// children is reserved word.
}

export default Card;