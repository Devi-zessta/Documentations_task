import './Card.css';

function Card(props){
    return(
        <section className='card'>
          {props.children}
        </section>

    );

}

export default Card;