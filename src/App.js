import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import style from "styled-components";
import Form from './Form';
import './App.css';
import formSchema from './validation/formSchema';
import Member from './Member';

const SuperFancy = style.div`
display: flex;
justify-content: center;
color: white;
background-color: royalblue;
padding: 1%;
margin: 2% auto;
width: 80%;
box-shadow: 10px 5px 5px black;
`;

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  tos: {
    read: false,
  }
}

const initialFormErrors = {
  name: '',
  email: '',
  password: '',
}

const initialMembers = [];
const initialDisabled = true;

function App() {
  const [members, setMembers] = useState(initialMembers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  const getMembers = () => {
    axios.get("https://reqres.in/api/users")
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      }, [])
  }

  const postNewMember = newMember => {
    axios.post("https://reqres.in/api/users", newMember)
      .then(res => {
        setMembers([res.data, ...members])
        setFormValues(initialFormValues)
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      }, [])
  }

  const inputChange = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: ""
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      })
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const checkboxChange = (name, isChecked) => {
    setFormValues({
      ...formValues,
      tos: {
        ...formValues.tos,
        [name]: isChecked
      }
    })
  }

  const submit = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
    }
    postNewMember(newMember)
  }

  useEffect(() => {
    getMembers()
  }, [])

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => {
      setDisabled(!valid)
    })
  }, [formValues])


  return (
    <div>
        <h1>Advanced Forms</h1>
      <SuperFancy>
        {members.map((member) => {
          return <Member key={member.id} details={member} />;
        })}
      </SuperFancy>
      <Form
        values={formValues}
        inputChange={inputChange}
        checkboxChange={checkboxChange}
        submit={submit}
        disabled={disabled}
        errors={formErrors}
      />
    </div>
  );
}

export default App;