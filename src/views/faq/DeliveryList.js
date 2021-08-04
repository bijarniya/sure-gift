import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Container, Box } from '@material-ui/core';
import clsx from 'clsx';

// -----------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%'
  },
  containerOuter: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center'
    }
  },
  leftBox: {
    width: '22%'
  },
  rightBox: {
    display: 'flex',
    flexDirection: 'column',
    width: '78%',
    [theme.breakpoints.down('sm')]: {
      marginTop: 20
    }
  },
  rightInner: {},
  heading: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontWeight: 400,
    fontSize: 18
  },
  title: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontWeight: 700,
    fontSize: 24,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      fontSize: 18
    }
  },
  description: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontWeight: 400,
    fontSize: 18,
    marginBottom: 80,
    marginTop: 15,
    width: '76%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      fontSize: 15,
      marginBottom: 50
    }
  }
}));
// ----------------------------------------------------------------------

DeliveryList.propTypes = {
  className: PropTypes.string
};

function DeliveryList() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={clsx(classes.root)}>
      <Grid item xs={12} lg={12} className={classes.containerOuter}>
        <Grid className={classes.leftBox}>
          <Typography className={classes.heading}>Delivery</Typography>
        </Grid>
        <Grid className={classes.rightBox}>
          <Box className={classes.rightInner}>
            <Typography className={classes.title}>
              What can we help you find, Srikant?
            </Typography>
            <Typography className={classes.description}>
              Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce
              dignissim luctus sem eu dapibus. Pellentesque vulputate quam a
              quam volutpat, sed ullamcorper erat commodo. Vestibulum sit amet
              ipsum vitae mauris mattis vulputate lacinia nec neque. Aenean quis
              consectetur nisi, ac interdum elit. Aliquam sit amet luctus elit,
              id tempus purus.
            </Typography>
          </Box>

          <Box className={classes.rightInner}>
            <Typography className={classes.title}>
              Welcome. Here's what you need to know in a nutshell
            </Typography>
            <Box className={classes.description}>
              Vestibulum eu quam nec neque pellentesque efficitur id eget nisl.
              Proin porta est convallis lacus blandit pretium sed non enim.
              Maecenas lacinia non orci at aliquam. Donec finibus, urna bibendum
              ultricies laoreet, augue eros luctus sapien, ut euismod leo tortor
              ac enim. In hac habitasse platea dictumst.
              <div style={{ marginTop: 20 }}></div>
              Sed cursus venenatis tellus, non lobortis diam volutpat sit amet.
              Sed tellus augue, hendrerit eu rutrum in, porttitor at metus.
              Mauris ac hendrerit metus. Phasellus mattis lectus commodo felis
              egestas, id accumsan justo ultrices. Phasellus aliquet, sem a
              placerat dapibus, enim purus dictum lacus, nec ultrices ante dui
              ac ante. Phasellus placerat, urna. Vestibulum eu quam nec neque
              pellentesque efficitur id eget nisl. Proin porta est convallis
              lacus blandit pretium sed non enim. Maecenas lacinia non orci at
              aliquam. Donec finibus, urna bibendum ultricies laoreet, augue
              eros luctus sapien, ut euismod leo tortor ac enim. In hac
              habitasse platea dictumst.
            </Box>
          </Box>

          <Box className={classes.rightInner}>
            <Typography className={classes.title}>
              What can we help you find, Srikant?
            </Typography>
            <Typography className={classes.description}>
              We will send you marketing promotions, special offers,
              inspiration, and policy updates via email.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default DeliveryList;
