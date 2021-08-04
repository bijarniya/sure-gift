import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Typography } from '@material-ui/core';
import Icons from 'src/components/Icons';
import ImagesConfig from 'src/layouts/Common/Images';
import { useHistory } from 'react-router-dom';
import { PATH_ACCOUNT } from 'src/routes/paths';

// ---------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 200,
    width: 295,
    marginBottom: 50,
    cursor: 'pointer',
    [theme.breakpoints.down('md')]: {}
  },
  imgContainer: {
    width: '100%'
  },
  imgBox: {
    width: '100%',
    height: 176,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'baseline',
    paddingRight: '24.55px',
    paddingTop: '23.2px'
  },
  contentBox: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginTop: 20
  },
  date: {
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: theme.palette.text.gray,
    fontSize: 14,
    fontWeight: 400,
    [theme.breakpoints.down('sm')]: {}
  },
  containerInner: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10
  },
  name: {
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: theme.palette.text.primary,
    fontSize: 18,
    fontWeight: 400,
    width: '70%',
    [theme.breakpoints.down('sm')]: {}
  },
  amount: {
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: theme.palette.text.primary,
    fontSize: 18,
    fontWeight: 400,
    width: '30%',
    textAlign: 'right',
    [theme.breakpoints.down('sm')]: {}
  }
}));

// ----------------------------------------------------------------------
function MyVoucherItems({ item }) {
  const classes = useStyles();
  const history = useHistory();

  const handleRoutes = () => {
    history.push(PATH_ACCOUNT.checkVoucherBlance);
  };

  return (
    <Grid className={classes.root} onClick={handleRoutes}>
      <Box className={classes.imgContainer}>
        <Box
          style={{ backgroundImage: `url(${ImagesConfig.full97})` }}
          className={classes.imgBox}
        >
          <Icons url={'amazonIcon'} />
        </Box>
      </Box>
      <Box className={classes.contentBox}>
        <Typography className={classes.date}>{item.date}</Typography>
        <Box className={classes.containerInner}>
          <Typography className={classes.name}>{item.name}</Typography>
          <Typography className={classes.amount}>N {item.amount} </Typography>
        </Box>
      </Box>
    </Grid>
  );
}

export default MyVoucherItems;
