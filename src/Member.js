import React from 'react';

export default function Member({ details }) {

    return (
      <div className="member-details">
        <h2>{details.name}</h2>
        <p>Email: {details.email}</p>
        <p>
          Password: {details.password} (
          <b>
            <u>Please keep secret!</u>
          </b>
          )
        </p>
      </div>
    );
}