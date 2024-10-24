function ListGroup() {
  const items = [
    "New York",
    "Columbus",
    "Melbourne",
    "Uppsala",
    "Salt Lake City",
    "Eagle Mountain",
    "Riverton",
  ];

  return (
    //Using the angle bracket notation (open and close) to replace the 'Fragment' component
    <>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
