import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Box } from '@material-ui/core';
import ImagesConfig from 'src/layouts/Common/Images';
import clsx from 'clsx';
import Icons from 'src/components/Icons';
import ButtonLoading from 'src/components/Common/ButtonLoading';
import { useHistory } from 'react-router-dom';
import { PATH_HOME } from 'src/routes/paths';

// ----------------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
  container: {
    borderRadius: 20,
    background: `conic-gradient(${theme.palette.background.conic})`,
    padding: '0.8px',
    marginTop: 50,
    marginBottom: 20
  },
  containerInner: {
    background: theme.palette.background.black,
    width: '100%',
    height: 90,
    borderRadius: 20,
    padding: 20,
    display: 'flex',
    flexDirection: 'row'
  },
  leftBox: {
    display: 'flex',
    flexDirection: 'row',
    width: '15%',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 20
  },
  title: {
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: theme.palette.text.primary,
    fontSize: 14,
    fontWeight: 400
  },
  price: {
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: theme.palette.text.primary,
    fontSize: 20,
    fontWeight: 700,
    marginTop: 5
  },
  rightBox: {
    display: 'flex',
    flexDirection: 'row',
    width: '85%',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  buttonOuter: {
    marginLeft: 10,
    display: 'flex',
    flexDirection: 'row',
    background: theme.palette.text.primary,
    borderRadius: 18,
    padding: 0,
    width: 150,
    [theme.breakpoints.down('md')]: {
      width: 150
    }
  },
  buttonInner: {
    background: theme.palette.text.primary,
    border: `0px solid ${theme.palette.text.primary}`,
    color: theme.palette.text.dark,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 14,
    boxShadow: 'none',
    borderRadius: 18,
    fontWeight: 400,
    margin: 0,
    padding: '16px 23px',
    '&:hover': {
      background: theme.palette.text.primary,
      boxShadow: 'none',
      borderRadius: 18
    },
    [theme.breakpoints.down('md')]: {
      padding: '0px 0px'
    }
  },
  giftButtonOuter: {
    marginLeft: 80,
    display: 'flex',
    flexDirection: 'row',
    background: theme.palette.text.activeMenu,
    borderRadius: 18,
    padding: 0,
    width: 150,
    [theme.breakpoints.down('md')]: {
      width: 150
    }
  },
  giftButtonInner: {
    background: theme.palette.background.activeMenu,
    border: `0px solid ${theme.palette.background.activeMenu}`,
    color: theme.palette.text.primay,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 14,
    boxShadow: 'none',
    borderRadius: 18,
    fontWeight: 400,
    margin: 0,
    padding: '16px 37px',
    '&:hover': {
      background: theme.palette.background.activeMenu,
      boxShadow: 'none',
      borderRadius: 18
    },
    [theme.breakpoints.down('md')]: {
      padding: '0px 0px'
    }
  },
  addGiftButtonOuter: {
    marginLeft: 10,
    display: 'flex',
    flexDirection: 'row',
    background: theme.palette.text.activeMenu,
    borderRadius: 18,
    padding: 0,
    width: 190,
    height: '100%',
    [theme.breakpoints.down('md')]: {
      width: 190
    }
  },
  paymentOuter: {
    marginLeft: 10,
    display: 'flex',
    flexDirection: 'row',
    background: theme.palette.text.primary,
    borderRadius: 18,
    padding: 0,
    width: 196,
    [theme.breakpoints.down('md')]: {
      width: 196
    }
  },
  stepBox: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 50
  },
  stepIconOuter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: theme.palette.background.activeMenu,
    width: 50,
    height: 50,
    borderRadius: 40
  },
  stepBoxInner: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 20
  },
  stepTitle: {
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: theme.palette.text.gray,
    fontSize: 14,
    fontWeight: 400
  },
  stepLink: {
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: 'rgba(255, 255, 255, 0.3)',
    fontSize: 16,
    fontWeight: 400
  },
  stepActive: {
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: theme.palette.text.primary,
    fontSize: 16,
    fontWeight: 400
  },
  stepIconOuterActive: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: `conic-gradient(${theme.palette.background.conic})`,
    width: 50,
    height: 50,
    padding: 2,
    borderRadius: 40
  },
  stepIconOuterActiveInner: {
    background: theme.palette.background.black,
    width: '100%',
    borderRadius: 40,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  previousActive: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: theme.palette.text.primary,
    width: 50,
    height: 50,
    borderRadius: 40
  },
  previousActiveInner: {
    background: theme.palette.text.primary,
    width: '100%',
    borderRadius: 40,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonBox: {
    display: 'flex'
  },
  step3LeftBox: {
    display: 'flex',
    flexDirection: 'row',
    width: '65%',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  step3rightBox: {
    display: 'flex',
    flexDirection: 'row',
    width: '35%',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  leftM: {
    marginLeft: 0
  },
  previousButton: {
    width: 40,
    height: 50,
    background: theme.palette.background.activeMenu,
    borderRadius: 12,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer'
  },
  leftSpace: {
    marginLeft: 150
  }
}));
// -------      ---------------------------------------------------------------

GiftFooter.propTypes = {
  className: PropTypes.string
};

function GiftFooter({ activeStep, handleButton }) {
  const classes = useStyles();
  const history = useHistory();

  const handleReDirection = (path) => {
    history.push(path);
  };

  return (
    <Grid item xs={12} lg={12} className={classes.container}>
      {activeStep === 1 || activeStep === 2 ? (
        <Grid className={classes.containerInner}>
          <Grid className={classes.leftBox}>
            <Box component="img" alt="" src={ImagesConfig.img97} />
            <Box className={classes.info}>
              <Typography className={classes.title}>Lavien Spa</Typography>
              <Typography className={classes.price}>$ 300</Typography>
            </Box>
          </Grid>

          <Grid className={classes.rightBox}>
            {
              // Active section
              activeStep === 1 && (
                <Box className={classes.stepBox}>
                  <Box className={classes.stepIconOuterActive}>
                    <Box className={classes.stepIconOuterActiveInner}>
                      <Icons url={'subtractActive'} />
                    </Box>
                  </Box>
                  <Box className={classes.stepBoxInner}>
                    <Typography className={classes.stepTitle}>
                      Step 1
                    </Typography>
                    <Typography className={classes.stepActive}>
                      Personalize
                    </Typography>
                  </Box>
                </Box>
              )
            }

            {
              // Previous active
              (activeStep === 2 || activeStep === 3) && (
                <Box className={classes.stepBox}>
                  <Box className={classes.previousActive}>
                    <Box className={classes.previousActiveInner}>
                      <Icons url={'subtractBlack'} />
                    </Box>
                  </Box>
                  <Box className={classes.stepBoxInner}>
                    <Typography className={classes.stepTitle}>
                      Step 1
                    </Typography>
                    <Typography className={classes.stepLink}>
                      Personalize
                    </Typography>
                  </Box>
                </Box>
              )
            }
            {
              // Next step(Disabled)
              activeStep === 1 && (
                <Box className={classes.stepBox}>
                  <Box className={classes.stepIconOuter}>
                    <Icons url={'deliveryIcon'} />
                  </Box>
                  <Box className={classes.stepBoxInner}>
                    <Typography className={classes.stepTitle}>
                      Step 2
                    </Typography>
                    <Typography className={classes.stepLink}>
                      Delivery
                    </Typography>
                  </Box>
                </Box>
              )
            }

            {
              // Active section
              activeStep === 2 && (
                <Box className={classes.stepBox}>
                  <Box className={classes.stepIconOuterActive}>
                    <Box className={classes.stepIconOuterActiveInner}>
                      <Icons url={'deliveryActive'} />
                    </Box>
                  </Box>
                  <Box className={classes.stepBoxInner}>
                    <Typography className={classes.stepTitle}>
                      Step 2
                    </Typography>
                    <Typography className={classes.stepActive}>
                      Delivery
                    </Typography>
                  </Box>
                </Box>
              )
            }
            {
              // Previous active
              activeStep === 3 && (
                <Box className={classes.stepBox}>
                  <Box className={classes.previousActive}>
                    <Box className={classes.previousActiveInner}>
                      <Icons url={'deliveryBlack'} />
                    </Box>
                  </Box>
                  <Box className={classes.stepBoxInner}>
                    <Typography className={classes.stepTitle}>
                      Step 2
                    </Typography>
                    <Typography className={classes.stepActive}>
                      Delivery
                    </Typography>
                  </Box>
                </Box>
              )
            }

            {
              // Next step(Disabled)
              (activeStep === 1 || activeStep === 2) && (
                <Box className={classes.stepBox}>
                  <Box className={classes.stepIconOuter}>
                    <Icons url={'subtract'} />
                  </Box>
                  <Box className={classes.stepBoxInner}>
                    <Typography className={classes.stepTitle}>
                      Step 3
                    </Typography>
                    <Typography className={classes.stepLink}>
                      Payment
                    </Typography>
                  </Box>
                </Box>
              )
            }
            {
              // Active section
              activeStep === 3 && (
                <Box className={classes.stepBox}>
                  <Box className={classes.stepIconOuterActive}>
                    <Box className={classes.stepIconOuterActiveInner}>
                      <Icons url={'paymentActive'} />
                    </Box>
                  </Box>
                  <Box className={classes.stepBoxInner}>
                    <Typography className={classes.stepTitle}>
                      Step 3
                    </Typography>
                    <Typography className={classes.stepActive}>
                      Payment
                    </Typography>
                  </Box>
                </Box>
              )
            }
            {activeStep === 1 ? (
              <Box className={classes.buttonBox}>
                <ButtonLoading
                  title={'Change Gift'}
                  handleClick={() => handleReDirection(PATH_HOME.giftcard)}
                  container={classes.giftButtonOuter}
                  buttonClass={classes.giftButtonInner}
                />
                <ButtonLoading
                  title={'Choose Delivery'}
                  handleClick={() =>
                    handleReDirection(PATH_HOME.customizeStep2)
                  }
                  container={classes.buttonOuter}
                  buttonClass={classes.buttonInner}
                />
              </Box>
            ) : (
              <Box className={classes.buttonBox}>
                <Box
                  className={clsx(classes.previousButton, classes.leftSpace)}
                  onClick={() => handleReDirection(PATH_HOME.customizeStep1)}
                >
                  <Icons url={'previousArrow'} />
                </Box>
                <ButtonLoading
                  title={'Continue to Pyamenut'}
                  handleClick={() =>
                    handleReDirection(PATH_HOME.customizeStep3)
                  }
                  container={classes.paymentOuter}
                  buttonClass={classes.buttonInner}
                />
              </Box>
            )}
          </Grid>
        </Grid>
      ) : (
        <Grid className={classes.containerInner}>
          <Grid className={classes.step3LeftBox}>
            {
              // Previous active
              (activeStep === 2 || activeStep === 3) && (
                <Box className={clsx(classes.stepBox, classes.leftM)}>
                  <Box className={classes.previousActive}>
                    <Box className={classes.previousActiveInner}>
                      <Icons url={'subtractBlack'} />
                    </Box>
                  </Box>
                  <Box className={classes.stepBoxInner}>
                    <Typography className={classes.stepTitle}>
                      Step 1
                    </Typography>
                    <Typography className={classes.stepLink}>
                      Personalize
                    </Typography>
                  </Box>
                </Box>
              )
            }
            {
              // Previous active
              activeStep === 3 && (
                <Box className={classes.stepBox}>
                  <Box className={classes.previousActive}>
                    <Box className={classes.previousActiveInner}>
                      <Icons url={'deliveryBlack'} />
                    </Box>
                  </Box>
                  <Box className={classes.stepBoxInner}>
                    <Typography className={classes.stepTitle}>
                      Step 2
                    </Typography>
                    <Typography className={classes.stepActive}>
                      Delivery
                    </Typography>
                  </Box>
                </Box>
              )
            }
            {
              // Active section
              activeStep === 3 && (
                <Box className={classes.stepBox}>
                  <Box className={classes.stepIconOuterActive}>
                    <Box className={classes.stepIconOuterActiveInner}>
                      <Icons url={'paymentActive'} />
                    </Box>
                  </Box>
                  <Box className={classes.stepBoxInner}>
                    <Typography className={classes.stepTitle}>
                      Step 3
                    </Typography>
                    <Typography className={classes.stepActive}>
                      Payment
                    </Typography>
                  </Box>
                </Box>
              )
            }
          </Grid>
          <Grid className={classes.step3rightBox}>
            <Box className={classes.buttonBox}>
              <Box
                className={classes.previousButton}
                onClick={() => handleReDirection(PATH_HOME.customizeStep2)}
              >
                <Icons url={'previousArrow'} />
              </Box>
              <ButtonLoading
                title={'Add Another Gift'}
                handleClick={() => handleButton('paymentFailedPopup')}
                container={classes.addGiftButtonOuter}
                buttonClass={classes.giftButtonInner}
              />

              <ButtonLoading
                title={'Complete Order'}
                handleClick={() => handleButton('successfullPopup')}
                container={classes.buttonOuter}
                buttonClass={classes.buttonInner}
              />
            </Box>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}

export default GiftFooter;
