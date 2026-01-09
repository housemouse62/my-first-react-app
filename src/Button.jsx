function Button({
  text = "Click Me!",
  color = "blue",
  fontSize = 12,
  backgroundColor = "orange",
  handleClick,
}) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px",
    backgroundColor: backgroundColor,
  };

  return (
    <button onClick={handleClick} style={buttonStyle}>
      {text}
    </button>
  );
}

export default function ButtonApp() {
  const handleButtonClick = (url) => {
    window.location.href = url;
  };

  return (
    <div>
      <Button
        handleClick={() => handleButtonClick("https://www.theodinproject.com")}
      />
      <Button text="Don't Click Me!" backgroundColor="darkBlue" fontSize={18} />
      <Button text="Sucker" backgroundColor="red" />
    </div>
  );
}
