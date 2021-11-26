import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  InputLabel,
  makeStyles,
  Paper,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import { SaveConfigData } from "../service/IDVApi";

const useStyle = makeStyles((theme) => ({
  titleStyle: {
    height: "30px",
    width: "100%",
    backgroundColor: "teal",
    padding: "5px",
    fontSize: "20px",
    fontWeight: "bold",
  },
  paperStyle: {
    padding: "10px",
    height: "100%",
  },
  oneItemStyle: {
    backgroundColor: "white",
    width: "100%",
  },
  twoItemStyle: {
    backgroundColor: "white",
    width: "50%",
  },
  buttonGroupStyle: {
    margin: "20px",
  },
  buttonStyle: {
    padding: "10px",
    width: "50%",
    margin: "5px",
    fontWeight: "bold",
    backgroundColor: "teal",
  },
}));

var configData = {
  connectionName: "",
  hostName: "",
  hostPort: "",
  userName: "",
  password: "",
  topic: "",
};

const IDVConnection = () => {
  const classes = useStyle();

  const [values, setValues] = useState(configData);

  const updateData = (e) => {
    console.log("Updating variable...", values);
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const addRecord = () => {
    console.log("Request to save data...", values);
    SaveConfigData(values);
  };

  const clearRecord = () => {
    setValues(configData);
  };
  return (
    <>
      <Paper className={classes.paperStyle}>
        <Box>
          <InputLabel className={classes.titleStyle}>Add Connection</InputLabel>

          <FormControl className={classes.oneItemStyle}>
            <TextField
              label="Name"
              className={classes.oneItemStyle}
              id="idv-connection-name"
              name="connectionName"
              value={values.connectionName}
              onChange={updateData}
            ></TextField>
            <Box>
              <TextField
                label="Host Name"
                className={classes.twoItemStyle}
                id="idv-host-name"
                name="hostName"
                value={values.hostName}
                onChange={updateData}
              ></TextField>
              <TextField
                label="Port"
                className={classes.twoItemStyle}
                id="idv-host-port"
                name="hostPort"
                value={values.hostPort}
                onChange={updateData}
              ></TextField>
            </Box>

            <Box>
              <TextField
                label="User Name"
                className={classes.twoItemStyle}
                id="idv-user-name"
                name="userName"
                value={values.userName}
                onChange={updateData}
              ></TextField>
              <TextField
                label="Password"
                className={classes.twoItemStyle}
                id="idv-user-password"
                name="password"
                value={values.password}
                onChange={updateData}
              ></TextField>
            </Box>

            <TextField
              label="Topic"
              className={classes.oneItemStyle}
              id="idv-user-topic"
              name="topic"
              value={values.topic}
              onChange={updateData}
            ></TextField>

            <ButtonGroup className={classes.buttonGroupStyle}>
              <Button
                variant="contained"
                className={classes.buttonStyle}
                onClick={addRecord}
              >
                {"Add"}
              </Button>
              <Button
                variant="contained"
                className={classes.buttonStyle}
                onClick={clearRecord}
              >
                {"Clear"}
              </Button>
            </ButtonGroup>
          </FormControl>
        </Box>
      </Paper>
    </>
  );
};

export default IDVConnection;
