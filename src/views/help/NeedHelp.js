import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Typography, Container } from '@material-ui/core';
import {
  varFadeInUp,
  MotionInView,
  varFadeInRight
} from 'src/components/Animate';
import ButtonLoading from 'src/components/Common/ButtonLoading';
import clsx from 'clsx';
import Icons from 'src/components/Icons';
import { useDialogBox } from 'src/components/popup/common/useDialogBox';
import OpenDialog from 'src/components/popup/common/OpenDialog';

// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background.main,
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
    fontSize: 100,
    lineHeight: '110%',
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: 52
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 32,
      textAlign: 'center'
    }
  },
  tagline: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 20,
    marginTop: 25,
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: 16
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 14,
      textAlign: 'center'
    }
  },
  prefectButton: {
    marginTop: 40,
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
      width: 200
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
  bestDayInner: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      marginTop: 40
    }
  },
  bestDayHeading: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 18,
    fontWeight: 400,
    background:
      'linear-gradient(180deg, rgba(255, 254, 251, 0.01) 0%, rgba(255, 254, 251, 0.13) 100%)',
    padding: '11px 15px',
    borderRadius: '50px',
    marginLeft: 10
  },
  bestDayInfor: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 18,
    fontWeight: 400,
    background:
      'linear-gradient(180deg, rgba(255, 254, 251, 0.01) 0%, rgba(255, 254, 251, 0.13) 100%)',
    padding: '11px 15px',
    borderRadius: '50px',
    marginTop: 10,
    marginLeft: '15%',
    [theme.breakpoints.down('sm')]: {
      marginTop: 10
    }
  },
  bestDayContainer: {
    marginLeft: 5
  },
  time: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: '11px',
    transform: 'rotate(-5deg)',
    padding: '11px 15px',
    textAlign: 'right'
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
  }
}));
// ----------------------------------------------------------------------

NeedHelp.propTypes = {
  className: PropTypes.string
};

function NeedHelp() {
  const classes = useStyles();

  // popup start
  const { dialogBoxName, openDialogBox, closeDialogBox } = useDialogBox();
  const [selectedData, setData] = useState();
  // popup list data
  const popupList = [
    {
      title: '',
      Description: 'Contact Us one step',
      popup: 'stepOnePopup'
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
    openPopup('stepOnePopup');
  };

  return (
    <Container maxWidth="lg" className={clsx(classes.root)}>
      <Grid item xs={12} lg={12} className={classes.prefectContainer}>
        <Grid item xs={6} className={classes.prefectLeftBox}>
          <MotionInView variants={varFadeInUp}>
            <Typography className={classes.prefectHeading}>
              Need help?
            </Typography>
            <Typography className={classes.tagline}>
              Reach out to us. We’ve got answers to your questions
            </Typography>
            <Box className={classes.prefectButton}>
              <ButtonLoading
                title={'Contact us'}
                handleClick={handleButton}
                container={classes.buttonOuter}
                buttonClass={classes.buttonInner}
                status={true}
                icon={'doubleRightArrow'}
              />
            </Box>
          </MotionInView>
        </Grid>
        <Grid item xs={6} className={classes.prefectRightBox}>
          <MotionInView variants={varFadeInRight}>
            <Box className={classes.bestDayInner}>
              <Box className={classes.info}>
                <Icons url={'bestDay'} />
                <Box className={classes.bestDayHeading}>Email:</Box>
              </Box>
              <Box className={classes.info}>
                <Box className={classes.bestDayInfor}>hello@suregifts.com</Box>
              </Box>
              <Box className={classes.bottomContainer}>
                <Box className={classes.bottomInner}>
                  <Box className={classes.bestDayHeading}>Phone Number:</Box>
                  <Icons url={'helpAvtar'} className={classes.iconSec} />
                </Box>
                <Box className={classes.bottomInner}>
                  <Box className={clsx(classes.bestDayInfor, classes.bottomM)}>
                    0700–SUREGIFTS
                  </Box>
                </Box>
              </Box>
            </Box>
          </MotionInView>
        </Grid>
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
    </Container>
  );
}

export default NeedHelp;
