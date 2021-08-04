import React, { useState } from 'react';
import clsx from 'clsx';
import { Grid, Box, Typography } from '@material-ui/core';
import { Container } from '@material-ui/core';
import ButtonLoading from 'src/components/Common/ButtonLoading';
import { makeStyles } from '@material-ui/core/styles';
import { useDialogBox } from 'src/components/popup/common/useDialogBox';
import OpenDialog from 'src/components/popup/common/OpenDialog';

// ------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      alignItems: 'center'
    }
  },
  helpTitle: {
    textTransform: 'upperCase',
    backgroundImage: `conic-gradient(${theme.palette.background.conic})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    MozBackgroundClip: 'text',
    MozTextFillColor: 'transparent',
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 12,
    fontWeight: 400,
    width: '13%',
    [theme.breakpoints.down('sm')]: {
      width: '50%',
      marginTop: 50
    }
  },
  container: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    }
  },
  leftBox: {
    display: 'flex',
    flexDirection: 'column',
    width: '45%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
    }
  },
  rightBox: {
    display: 'flex',
    flexDirection: 'column'
  },
  heading: {
    width: '100%',
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 80,
    fontWeight: 700,
    lineHeight: '110%',
    marginTop: '30px',
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: 64,
      width: '100%',
      padding: '0px 10px'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 52,
      width: '100%',
      padding: '0px 10px'
    }
  },
  prefectButton: {
    marginTop: 50,
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'center'
    }
  },
  buttonOuter: {
    display: 'flex',
    flexDirection: 'row',
    background: theme.palette.text.primary,
    borderRadius: 18,
    padding: 1,
    width: 270,
    [theme.breakpoints.down('md')]: {
      width: 270
    }
  },
  buttonInner: {
    background: theme.palette.text.primary,
    border: `0px solid ${theme.palette.text.primary}`,
    color: theme.palette.text.dark,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 18,
    boxShadow: 'none',
    borderRadius: 18,
    fontWeight: 700,
    margin: 1,
    padding: '29px 20px 29px 25px',
    '&:hover': {
      backgroundColor: theme.palette.text.primary,
      padding: '29px 20px 29px 25px',
      boxShadow: 'none',
      borderRadius: 18
    },
    [theme.breakpoints.down('md')]: {
      padding: '29px 20px 29px 25px'
    }
  },
  stepOnePopup: {
    width: '100%',
    minHeight: '100%',
    background: theme.palette.background.main,
    borderRadius: '0px',
    border: `0px ${theme.palette.text.primary} solid`
  }
}));

function HowToUse() {
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
      <Typography className={classes.helpTitle}>
        Help center · GIFT CARD
      </Typography>
      <Grid item xs={12} className={classes.container}>
        <Grid className={classes.leftBox}>
          <Typography className={classes.heading}>
            How To Use Gift Cards
          </Typography>
          <Box className={classes.prefectButton}>
            <ButtonLoading
              title={'Contact us'}
              handleClick={handleButton}
              container={classes.buttonOuter}
              buttonClass={classes.buttonInner}
              status={true}
              icon={'blackRightArrow'}
            />
          </Box>
        </Grid>
        <Grid className={classes.rightBox}></Grid>
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
export default HowToUse;
