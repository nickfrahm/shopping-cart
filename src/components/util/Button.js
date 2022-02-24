const Button = (props) => {
  const { className, text, id, incrementDecrement } = props;

  return (
    <div className={className} id={id} onClick={incrementDecrement}>
      {text}
    </div>
  );
};

export default Button;
