import React from "react";
import { makeStyles, Paper } from "@material-ui/core";

const useStyle = makeStyles({
  mainStyle: {
    height: "100%",
    backgroundColor: "Azure",
    textAlign: "center",
    display: "flex",
    fontSize: "20px",
    color: "white",
  },
});

const Workflow = () => {
  const classes = useStyle();
  return (
    <>
      <Paper className={classes.mainStyle}></Paper>
    </>
  );
};

export default Workflow;
