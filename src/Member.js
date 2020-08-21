import React from 'react';

export default function Member({ details }) {

    return (
      <div className="member-details">
        <h2>{details.name}</h2>
        <p>Email: {details.email}</p>
        <p>
          Password: {details.password} (
          <u style={{color: "red", fontWeight: "bold"}}>
            Please keep secret!
          </u>
          )
        </p>
      </div>
    );
}