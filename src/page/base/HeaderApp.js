import React from "react";
import { makeStyles, Paper } from "@material-ui/core";

const useStyle = makeStyles({
  mainStyle: {
    height: "100%",
    backgroundColor: "teal",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontSize: "28px",
  },
});

const HeaderApp = () => {
  const classes = useStyle();

  return (
    <>
      <Paper className={classes.mainStyle}>IOT Data Viewer</Paper>
    </>
  );
};

export default HeaderApp;
