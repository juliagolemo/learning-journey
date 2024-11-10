import Card from "./Card";
import './CardsList.css';

const CardsList = ({ cards_list }) => {
    return (
      <div className="cards-container">
        {cards_list.map(card => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    );
  };

  export default CardsList;
