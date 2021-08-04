import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container } from '@material-ui/core';
import TopBar from 'src/components/Common/TopBar';
import Footer from 'src/components/Common/Footer';
import NavBar from './NavBar';

// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background.main
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    padding: '120px 0px 0px 0px',
    background: theme.palette.background.main,
    [theme.breakpoints.down('md')]: {
      padding: '60px 0px 0px 0px',
      flexDirection: 'column'
    }
  },
  bottomContainer: {
    backgroundColor: theme.palette.background.main,
    padding: '50px 0px 100px 0px',
    [theme.breakpoints.down('md')]: {
      padding: '50px 0px 100px 0px'
    }
  },
  leftBox: {
    display: 'flex',
    flexDirection: 'column',
    width: '19.2%'
  },
  rightBox: {
    display: 'flex',
    flexDirection: 'column',
    width: '80.8%',
    paddingLeft: 60,
    [theme.breakpoints.down('md')]: {
      padding: '10px 0px 0px 0px',
      flexDirection: 'column',
      width: '100%'
    }
  }
}));

// -------------------------------------------------
AccountLayout.propTypes = {
  children: PropTypes.node
};

function AccountLayout({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TopBar status={true} />
      <Container maxWidth="lg">
        <Grid className={classes.content}>
          <Grid className={classes.leftBox}>
            <NavBar />
          </Grid>
          <Grid className={classes.rightBox}>{children}</Grid>
        </Grid>
      </Container>
      <div className={classes.bottomContainer}>
        <Footer />
      </div>
    </div>
  );
}

export default AccountLayout;
