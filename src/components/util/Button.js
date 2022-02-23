const Button = (props) => {
  const { className, text } = props;

  return <div className={className}>{text}</div>;
};

export default Button;
