import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Typography } from '@material-ui/core';
import Search from 'src/components/Common/Search';
import ButtonLoading from 'src/components/Common/ButtonLoading';
import { useHistory } from 'react-router-dom';
import { PATH_ACCOUNT } from 'src/routes/paths';

// ---------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {},
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  leftBox: {
    display: 'flex',
    flexDirection: 'row',
    width: '48%',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  rightBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '52%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginTop: 20
    }
  },
  heading: {
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: theme.palette.text.primary,
    fontSize: 24,
    fontWeight: 700,
    [theme.breakpoints.down('sm')]: {
      fontSize: 16
    }
  },
  searchBox: {
    width: '65%'
  },
  buttonOuter: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: theme.palette.text.primary,
    borderRadius: 18,
    padding: 0,
    width: 160,
    height: 60,
    marginLeft: 10
  },
  buttonInner: {
    backgroundColor: theme.palette.text.primary,
    border: `0px solid ${theme.palette.text.primary}`,
    color: theme.palette.text.dark,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 14,
    fontWeight: 400,
    borderRadius: 18,
    margin: 0,
    height: 60,
    padding: '0px 0px',
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: theme.palette.text.primary,
      boxShadow: 'none',
      borderRadius: 18
    },
    [theme.breakpoints.down('md')]: {
      padding: '0px 0px'
    }
  }
}));

// ----------------------------------------------------------------------
function ContactsListTop(props) {
  const classes = useStyles();
  const history = useHistory();

  const handleButton = () => {
    history.push(PATH_ACCOUNT.contacts);
  };

  return (
    <Grid container>
      <Grid item xs={12} className={classes.root}>
        <Grid className={classes.container}>
          <Box className={classes.leftBox}>
            <Typography className={classes.heading}>Contacts</Typography>
          </Box>
          <Box className={classes.rightBox}>
            <Box className={classes.searchBox}>
              <Search searchItem={'Search Contact'} {...props} />
            </Box>
            <ButtonLoading
              title={'Add Contact'}
              container={classes.buttonOuter}
              buttonClass={classes.buttonInner}
              handleClick={handleButton}
            />
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ContactsListTop;
