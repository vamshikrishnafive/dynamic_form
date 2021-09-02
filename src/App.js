import React, { useState } from 'react';
import { makeStyles, Container, Button, TextField, IconButton } from '@material-ui/core';
import { AddCircleOutline, RemoveCircleOutline, Send, Refresh } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  main: {
    margin: 0,
    padding: 0
  },
  root: {
    '& .MuiTextField-root': {
      background: 'white',
      margin: theme.spacing(1)
    }
  },
  button: {
    margin: theme.spacing(1)
  },
  text: {
    margin: theme.spacing(28)
  }
}))

function App() {
  const classes = useStyles()
  const [formData, setFormData] = useState([
    { firstName: '', middleName: '', lastName: '' }
  ])
  const [result, setResult] = useState([]);
  const handleChange = (index, e) => {
    const values = [...formData];
    values[index][e.target.name] = e.target.value;
    setFormData(values);
  };
  const handleSubmit = (e) => {
    const value = formData
    setResult(value);
  }
  const handleReset = () => {
    setFormData([{ firstName: '', middleName: '', lastName: '' }])
  }
  const handleAddNewField = () => {
    setFormData([...formData, { firstName: ' ', middleName: ' ', lastName: ' ' }])
  }
  const handleRemoveField = (index) => {
    const values = [...formData];
    if (index === 0) {
      setFormData(values);
    } else values.splice(index, 1);
    setFormData(values);
  }
  return (
    <div className={classes.main}>
      <Container>
        <h1>List of Names</h1>
        <form className={classes.root} onSubmit={handleSubmit}>
          {formData.map((name, index) => {
            return <div key={index}>
              <TextField
                name="firstName"
                label="Fist Name"
                value={name.firstName}
                onChange={e => handleChange(index, e)}
              />
              <TextField
                name="middleName"
                label="Middle Name"
                value={name.middleName}
                onChange={e => handleChange(index, e)}
              />
              <TextField
                name="lastName"
                label="Last Name"
                value={name.lastName}
                onChange={e => handleChange(index, e)}
              />
              <IconButton onClick={() => handleRemoveField(index)}>
                <RemoveCircleOutline />
              </IconButton>
              <IconButton onClick={() => handleAddNewField()}>
                <AddCircleOutline />
              </IconButton>
            </div>
          })}
        </form>
        <Button className={classes.button}
          variant="contained"
          color="primary"
          type="submit"
          onClick={() => handleSubmit()}
        > Send <Send /></Button>
        <Button className={classes.button}
          variant="contained"
          color="primary"
          type="submit"
          onClick={() => handleReset()}
        > Reset <Refresh /></Button>
      </Container>
      <span className={classes.text}>{JSON.stringify(result)}</span>
    </div>
  );
}

export default App;
