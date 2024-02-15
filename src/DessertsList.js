function DessertsList(props) {
  const desserts = props.data
    .filter((item) => item.calories < 500)
    .sort((a, b) => a.calories - b.calories)
    .map((item, index) => (
      <li key={index}>
        {item.name} - {item.calories} cal
      </li>
    ));
  return <ul>{desserts}</ul>;
}

export default DessertsList;
