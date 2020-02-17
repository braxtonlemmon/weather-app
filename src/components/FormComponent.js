import React from 'react';
import styled from 'styled-components';

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px 0;
  width: 80%;
`

const Form = styled.form`
  display: grid;
  gap: 10px;
`

const H2 = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 10px;
`

const Input = styled.input`
  text-align: center;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid black;
  font-size: 18px;
  background: #DAD2D8;
`

const Button = styled.button`
  border: none;
  border-radius: 8px;
  padding: 6px 8px;
  width: 100px;
  margin: 0 auto;
  color: #EC9A29;
  background: #A8201A;
  font-weight: bold;
`
const FormComponent = (props) => {
  return (
    <FormWrapper>
      <Form>
        <H2>Find weather</H2>
        <Input
          placeholder="Location"
          type="text"
          name="location"
          id="location"
          minLength="2"
          required
          value={props.data.location}
          onChange={props.handleChange}
        />
        <Button
          className="search-button"
          onClick={props.handleSubmit}
        >SEARCH</Button>
      </Form>
    </FormWrapper>
  )
}

export default FormComponent;