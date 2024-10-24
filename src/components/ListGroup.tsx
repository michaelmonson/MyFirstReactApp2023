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

  if (items.length === 0)
    return (
      <>
        <h1>List</h1>
        <p>No items found...</p>
      </>
    );

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
