import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Typography, Container } from '@material-ui/core';
import { varFadeInUp, MotionInView } from 'src/components/Animate';
import ButtonLoading from 'src/components/Common/ButtonLoading';
import clsx from 'clsx';
import { useDialogBox } from 'src/components/popup/common/useDialogBox';
import OpenDialog from 'src/components/popup/common/OpenDialog';

// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    color: '#fff',
    width: '100%'
  },
  prefectContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 58,
    width: '100%',
    [theme.breakpoints.between('sm', 'md')]: {
      flexDirection: 'row'
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      padding: '0px 20px'
    }
  },
  prefectLeftBox: {
    [theme.breakpoints.down('md')]: {
      width: '100%',
      maxWidth: '100%'
    }
  },
  prefectRightBox: {
    [theme.breakpoints.down('md')]: {
      width: '100%',
      maxWidth: '100%'
    }
  },
  prefectHeading: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 64,
    lineHeight: '110%',
    width: '90%',
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: 52,
      width: '90%'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 32,
      textAlign: 'center',
      width: '90%'
    }
  },
  tagline: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 18,
    marginTop: 25,
    width: '90%',
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: 16,
      width: '100%'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 14,
      textAlign: 'center',
      width: '100%'
    }
  },
  prefectButton: {
    marginTop: 40,
    position: 'relative',
    zIndex: 99,
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'center'
    }
  },
  buttonOuter: {
    display: 'flex',
    flexDirection: 'row',
    background: `conic-gradient(${theme.palette.background.conic})`,
    borderRadius: 18,
    padding: 1,
    width: 270,
    [theme.breakpoints.down('md')]: {
      width: 270
    }
  },
  info: {
    display: 'flex',
    flexDirection: 'row'
  },
  buttonInner: {
    background: `conic-gradient(${theme.palette.background.conic})`,
    border: `2px solid ${theme.palette.text.dark}`,
    color: theme.palette.text.dark,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 18,
    boxShadow: 'none',
    borderRadius: 18,
    fontWeight: 700,
    margin: 1,
    padding: '29px 20px 29px 25px',
    '&:hover': {
      backgroundColor: theme.palette.text.dark,
      padding: '29px 20px 29px 25px',
      boxShadow: 'none',
      borderRadius: 18
    },
    [theme.breakpoints.down('md')]: {
      padding: '29px 20px 29px 25px'
    }
  },
  bottomContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  bottomInner: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  iconSec: {
    marginLeft: 10
  },
  bottomM: {
    marginRight: '15%'
  },
  stepOnePopup: {
    width: '100%',
    minHeight: '100%',
    background: theme.palette.background.main,
    borderRadius: '0px',
    border: `0px ${theme.palette.text.primary} solid`
  },
  bottomBox: {
    background: 'linear-gradient(180deg, #100F15 0%, rgba(16, 15, 21, 0) 100%)',
    transform: 'matrix(1, 0, 0, -1, 0, 0)',
    height: 400,
    marginTop: '-104px',
    width: '107%',
    [theme.breakpoints.between('sm', 'md')]: {
      height: 0,
      marginTop: 0
    },
    [theme.breakpoints.down('sm')]: {
      height: 0,
      marginTop: 0
    }
  }
}));
// ----------------------------------------------------------------------

SignUp.propTypes = {
  className: PropTypes.string
};

function SignUp() {
  const classes = useStyles();

  // popup start
  const { dialogBoxName, openDialogBox, closeDialogBox } = useDialogBox();
  const [selectedData, setData] = useState();
  // popup list data
  const popupList = [
    {
      title: '',
      Description: 'Contact Us one step',
      popup: 'brandPopup'
    }
  ];

  // set popup data
  const setSelectedData = (popupName, row) => {
    const filterData = popupList.filter((item) => {
      return item.popup === popupName || item.title === popupName;
    });
    if (filterData && filterData.length) {
      filterData[0].merchantData = row;
      setData(filterData[0]);
    }
  };
  // set dynamic popup name
  const openPopup = (popupName, row) => {
    openDialogBox(popupName);
    setSelectedData(popupName, row);
  };

  const confirmRemove = () => {};
  // popup end

  const handleButton = () => {
    openPopup('brandPopup');
  };

  return (
    <Container maxWidth="lg" className={clsx(classes.root)}>
      <Grid item xs={12} lg={12} className={classes.prefectContainer}>
        <Grid item xs={6} className={classes.prefectLeftBox}>
          <MotionInView variants={varFadeInUp}>
            <Typography className={classes.prefectHeading}>
              Merchant Sign-up is Easy as 1, 2, 3 ...
            </Typography>
            <Typography className={classes.tagline}>
              Join our merchant network and put your brand on top-of-mind for
              all gifting occasions with your own customised Suregifts Cards
            </Typography>
            <Box className={classes.prefectButton}>
              <ButtonLoading
                title={'Sign-up as Merchant'}
                handleClick={handleButton}
                container={classes.buttonOuter}
                buttonClass={classes.buttonInner}
                status={true}
                icon={'doubleRightArrow'}
              />
            </Box>
          </MotionInView>
        </Grid>
        <Grid item xs={6} className={classes.prefectRightBox}></Grid>
      </Grid>
      {!!dialogBoxName && (
        <OpenDialog
          componentName={dialogBoxName}
          open={true}
          closeBox={closeDialogBox}
          data={selectedData}
          onRemove={() => confirmRemove()}
          containerStyle={classes.stepOnePopup}
          center={true}
        />
      )}
      <Grid className={classes.bottomBox}></Grid>
    </Container>
  );
}

export default SignUp;
