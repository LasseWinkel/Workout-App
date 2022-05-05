function Card(props) {
  const classes = "Card text-1xl text-white m-5 rounded-3xl " + props.className;
  return <div className={classes}> {props.children}</div>;
}

export default Card;
