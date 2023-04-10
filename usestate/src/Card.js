import './Card.css'

const Card = (props) => {
  

    return(
        <div className="kartica">
    <h1> {props.ime}</h1>
    <h2> {props.prezime}</h2>
    <p>Podaci:</p>
  </div>
    )
};

export default Card;
