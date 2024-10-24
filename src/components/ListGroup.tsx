function ListGroup() {
  let items = [
    "New York",
    "Columbus",
    "Melbourne",
    "Uppsala",
    "Salt Lake City",
    "Eagle Mountain",
    "Riverton",
  ];

  //items = [];

  const getMessage = () => {
    /* Ternary Approach */    
    // return items.length === 0 ? <p>No items found...</p> : null;

    /* More Concise logic w/out ternary; common React.js pattern - returns value if condition is true */
    return items.length === 0 && <p>No items found...</p>;
  };

  return (
    //Using the angle bracket notation (open and close) to replace the 'Fragment' component
    <>
      {getMessage()}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
