//require dependency
import React from "react";

//functional component creates bootstrap card 
function Card({ icon, title, children }) {
  return (
    <div className="card mt-4">
      <div className="card-header">
        <h3>
          <strong>
            {/* displays favicon/title passed in through props */}
            <i className={`fa fa-${icon}`} aria-hidden="true" /> {title}
          </strong>
        </h3>
      </div>
      {/* children is a prop that is used to store the element body */}
      <div className="card-body">{children}</div>
    </div>
  );
}
//export card component
export default Card;
