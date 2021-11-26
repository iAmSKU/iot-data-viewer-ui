import HeaderApp from "./page/base/HeaderApp";
import HeaderCompany from "./page/base/HeaderCompany";
import Workflow from "./page/base/Workflow";
import IDVConnection from "./page/IDVConnection";
import IDVManageConnection from "./page/IDVManageConnection";
import IDVVisualization from "./page/IDVVisualization";
import Footer from "./page/base/Footer";

import { Grid, CssBaseline, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  headerItem1: {
    height: "75px",
    padding: "1px",
  },
  headerItem2: {
    height: "75px",
    padding: "1px",
  },
  workflowItem: {
    height: "50px",
    padding: "1px",
  },
  connectionItem1: {
    height: "350px",
    padding: "1px",
  },
  connectionItem2: {
    height: "225px",
    padding: "1px",
  },
  viewItem: {
    height: "575px",
    padding: "1px",
  },
  footerStatus: {
    height: "25px",
    padding: "1px",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <>
      <Grid container>
        <Grid item lg={10} className={classes.headerItem1}>
          <HeaderApp></HeaderApp>
        </Grid>

        <Grid item lg={2} className={classes.headerItem2}>
          <HeaderCompany></HeaderCompany>
        </Grid>

        <Grid item lg={12} className={classes.workflowItem}>
          <Workflow></Workflow>
        </Grid>

        <Grid item lg={6}>
          <Grid item lg={12} className={classes.connectionItem1}>
            <IDVConnection></IDVConnection>
          </Grid>
          <Grid item lg={12} className={classes.connectionItem2}>
            <IDVManageConnection></IDVManageConnection>
          </Grid>
        </Grid>

        <Grid item lg={6} className={classes.viewItem}>
          <IDVVisualization></IDVVisualization>
        </Grid>
        <Grid item lg={12} className={classes.footerStatus}>
          <Footer></Footer>
        </Grid>
      </Grid>

      <CssBaseline />
    </>
  );
}

export default App;
