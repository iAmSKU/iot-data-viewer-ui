import React from "react";
import { Paper, makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  mainStyle: {
    height: "100%",
    backgroundColor: "teal",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: "white",
    fontSize: "28px",
  },
});

const HeaderCompany = () => {
  const classes = useStyle();

  return (
    <>
      <Paper className={classes.mainStyle}>SIEMENS</Paper>
    </>
  );
};

export default HeaderCompany;
