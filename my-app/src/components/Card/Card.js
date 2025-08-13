const Card = ({ children, classes = "" }) => {
  return (
    <div className={`card ${Array.isArray(classes) ? classes.join(" ") : classes}`}>
      {children}
    </div>
  );
}

export default Card;