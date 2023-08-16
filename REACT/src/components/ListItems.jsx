import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ListItems(props) {
  const data = props.items;

  const handleDelete = (index) => {
    props.deleteItem(index);
  };

  return (
    <div className='container' style={{ alignItems: "center" }}>
      <div className='container' style={{ alignItems: "center", width: "20%" }}>
        {data.map((str, index) => (
          <Card key={index} style={{ margin: "10px" }} className="bg-dark text-white">
            <Card.Body>{str}</Card.Body>
            <Button variant="danger" onClick={() => handleDelete(index)}>Delete</Button>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ListItems;