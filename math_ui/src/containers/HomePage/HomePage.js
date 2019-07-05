import React from "react";
import "./HomePage.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faGreaterThanEqual
} from "@fortawesome/free-solid-svg-icons";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";

class HomePage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Grid container spacing={24}>
          <Grid item xs={4}>
            <Paper className="paper-container">
              <Grid container spacing={24}>
                <Grid item>
                  <FontAwesomeIcon icon={faPlus} size="3x" />
                </Grid>
                <Grid item xs container direction="column" spacing={8}>
                  <Grid item xs>
                    <Link component={RouterLink} to="/add_upto20">
                      Numbers up to 20
                    </Link>
                  </Grid>
                  <Grid item xs>
                    <Link component={RouterLink} to="/add_mn_upto20">
                      Missing numbers up to 20
                    </Link>
                  </Grid>
                  <Grid item xs>
                    <Link component={RouterLink} to="/add_upto40">
                      Numbers up to 40
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className="paper-container">
              <Grid container spacing={24}>
                <Grid item>
                  <FontAwesomeIcon icon={faMinus} size="3x" />
                </Grid>
                <Grid item xs container direction="column" spacing={8}>
                  <Grid item xs>
                    <Link component={RouterLink} to="/subtract_upto20">
                      Numbers up to 20
                    </Link>
                  </Grid>
                  <Grid item xs>
                    <Link component={RouterLink} to="/subtract_mn_upto20">
                      Missing numbers up to 20
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className="paper-container">
              <Grid container spacing={24}>
                <Grid item>
                  <FontAwesomeIcon icon={faGreaterThanEqual} size="3x" />
                </Grid>
                <Grid item xs container direction="column" spacing={8}>
                  <Grid item xs>
                    <Link component={RouterLink} to="/greater_than_less_than">
                      Greater, equal or less
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default HomePage;
