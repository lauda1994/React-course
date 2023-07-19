import React, { useState } from "react";
import { data } from "../../../data";

const ArrayState = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <div>
      <h2>Array cards</h2>
      {people.map((el) => {
        const { id, name } = el;
        return (
          <div className="item shadow" key={id}>
            <h3>{name}</h3>
            <button type="button" className="button delete-button" onClick={() => removeItem(id)}>
              x
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ArrayState;
