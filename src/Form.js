import React from 'react';
import style from "styled-components";

const SuperFancy = style.div`
display: flex;
justify-content: center;
color: white;
background-color: rebeccapurple;
border-radius: 15%;
padding: 1%;
margin: 2% auto;
border: 2.5px solid goldenrod;
width: 80%;
.errors{
    color: red;
}
.button {
  background-color: goldenrod;
  border: none;
  color: white;
  padding: 2%;
  text-align: center;
  font-size: .75rem;
}
`;

export default function Form(props) {

    const {
        values,
        submit,
        inputChange,
        checkboxChange,
        disabled,
        errors,
    } = props

    const onSubmit = event => {
        event.preventDefault()
        submit()
    }

    const onCheckboxChange = event => {
        const { name, checked } = event.target
        checkboxChange(name, checked)
    }

    const onInputChange = event => {
        const { name, value } = event.target
        inputChange(name, value)
    }

    return (
      <SuperFancy>
        <form className="form-wrapper" onSubmit={onSubmit}>
          <div className="errors">
            <div>{errors.name}</div>
            <div>{errors.email}</div>
            <div>{errors.password}</div>
          </div>
          <div className="form-group input">
            <div className="form-name">
              <label>
                Name:&nbsp;&nbsp;
                <input
                  value={values.name}
                  onChange={onInputChange}
                  name="name"
                  type="text"
                  placeholder="Enter Your Name"
                  maxLength="25"
                />
              </label>
            </div>
            <div className="form-email">
              <label>
                Email:&nbsp;&nbsp;
                <input
                  value={values.email}
                  onChange={onInputChange}
                  name="email"
                  type="text"
                  placeholder="Enter Your Email"
                  maxLength="50"
                />
              </label>
            </div>
            <div className="form-password">
              <label>
                Password:&nbsp;&nbsp;
                <input
                  value={values.password}
                  onChange={onInputChange}
                  name="password"
                  type="text"
                  placeholder="Enter Your Password"
                  maxLength="50"
                />
              </label>
            </div>
            <div className="form-tos">
              <label>
                Terms of Service:&nbsp;
                <input
                  type="checkbox"
                  name="read"
                  checked={values.tos.read === true}
                  onChange={onCheckboxChange}
                />
              </label>
            </div>
            <br/>
            <button className="button" disabled={disabled}>Submit</button>
          </div>
        </form>
      </SuperFancy>
    );
}