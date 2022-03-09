import React from "react";

const Ninja = (props) => {
  const ninjaInfo = props.info.map((item) => {
    return (
      item.age > 27 && (
        <div className="ninja" key={item.name}>
          <div>Name: {item.name}</div>
          <div>Age: {item.age}</div>
          <div>Belt: {item.belt}</div>
        </div>
      )
    );
  });

  return <div className="ninja">{ninjaInfo}</div>;
};

export default Ninja;
