import "./SortField.scss";

const SortField = ({dateTo}) => {
  return (
    <div className="main-container">
      <div className="sort-buttons">
        <button className="price">Fiyat</button>
        <button className="time">Kalkış saati</button>
        <button className="duration">Uçuş süresi</button>
      </div>
      <div className="date">
        <span>{dateTo}</span>
      </div>
    </div>
  );
};

export default SortField;
