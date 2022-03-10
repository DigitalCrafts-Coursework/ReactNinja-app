import React from "react";

const Ninja = (props) => {
  const ninjaInfo = props.ninjas.map((item) => {
    return (
      item.age > 27 && (
        <div className="ninja" key={item.name}>
          <div>Name: {item.name}</div>
          <div>Age: {item.age}</div>
          <div>Belt: {item.belt}</div>
          {/* calls deleteNinja function using onChange event handler, anonymous function needed to not call function immediately*/}
          <input type="checkbox" onChange={() => props.deleteNinja(item)} />
        </div>
      )
    );
  });
  return <div className="ninja">{ninjaInfo}</div>;
};

export default Ninja;
