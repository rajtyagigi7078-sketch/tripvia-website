const ScrollCard = ({ 
  name, 
  description, 
  image, 
  price, 
  budgetType, 
  onClick,
  testId 
}) => {
  return (
    <div 
      className="scroll-card" 
      onClick={onClick}
      data-testid={testId}
    >
      <div 
        className="scroll-card-image"
        style={image ? { 
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        } : {}}
      />
      <div className="scroll-card-content">
        <h3 className="scroll-card-name">{name}</h3>
        <p className="scroll-card-description">{description}</p>
        {price && (
          <span className={`budget-tag ${budgetType ? `budget-${budgetType}` : ''}`}>
            {price}
          </span>
        )}
      </div>
    </div>
  );
};

export default ScrollCard;
