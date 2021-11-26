import { makeStyles, Paper } from "@material-ui/core";
import React from "react";

const useStyle = makeStyles({
  mainStyle: {
    height: "100%",
    backgroundColor: "Azure",
    textAlign: "center",
    display: "flex",
  },
});

const IDVManageConnection = () => {
  const classes = useStyle();
  return (
    <>
      <Paper className={classes.mainStyle}></Paper>
    </>
  );
};

export default IDVManageConnection;
