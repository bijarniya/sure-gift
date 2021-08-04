import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import Icons from 'src/components/Icons';
import { useHistory } from 'react-router-dom';
import { PATH_HOME } from 'src/routes/paths';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 238,
    width: 285,
    marginBottom: 15,
    cursor: 'pointer',
    background:
      'linear-gradient(191.34deg, rgba(255, 254, 251, 0.025) 8.56%, rgba(255, 254, 251, 0) 85.73%)',
    backdropFilter: 'blur(64.0164px)',
    borderRadius: 25,
    border: `1px solid ${theme.palette.border.grayWhite}`,
    [theme.breakpoints.down('md')]: {
      marginBottom: 15,
      width: 285
    }
  },
  topBox: {
    width: '100%',
    height: 110,
    backgroundColor: theme.palette.text.primary,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18
  },
  bottomOuter: {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px 25px 30px 25px'
  },
  title: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 20,
    fontWeight: 700
  },
  description: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 14,
    fontWeight: 400,
    marginTop: 6
  }
}));

const ParWithItem = ({ item }) => {
  const classes = useStyles();
  const history = useHistory();

  const handleOnClick = () => {
    history.push(PATH_HOME.directTopUp);
  };

  return (
    <Grid className={classes.root} onClick={handleOnClick}>
      <Grid className={classes.topBox}>
        <Icons url={'bigHm'} />
      </Grid>
      <Grid className={classes.bottomOuter}>
        <Typography className={classes.title}> H&M</Typography>
        <Typography className={classes.description}>
          Benin Electricity Distribution Company Pastpaid
        </Typography>
      </Grid>
    </Grid>
  );
};
export default ParWithItem;
