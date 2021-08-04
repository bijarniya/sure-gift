import React, { useState, useEffect } from 'react';
import {
  makeStyles,
  Grid,
  Box,
  Accordion,
  Typography,
  AccordionSummary,
  AccordionDetails
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Icons from 'src/components/Icons';
import ImagesConfig from 'src/layouts/Common/Images';
import ButtonLoading from 'src/components/Common/ButtonLoading';
import CustomeSlider from 'src/components/Common/CustomeSlider';
import { PATH_HOME } from 'src/routes/paths';
import clsx from 'clsx';

// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: '30px 31px 40px 50px',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      padding: '30px 31px 40px 31px'
    }
  },
  topBox: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  contaienr: {
    marginTop: '-18px',
    [theme.breakpoints.down('md')]: {
      marginTop: 0
    }
  },
  icons: {
    cursor: 'pointer',
    width: 30,
    height: 30,
    zIndex: 999
  },
  topMargin: {
    marginTop: 20
  },
  buttonOuter: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: theme.palette.button.primary,
    borderRadius: 18,
    width: 350,
    boxShadow: 'none',
    marginTop: 30,
    [theme.breakpoints.down('md')]: {
      width: 350
    }
  },
  buttonInner: {
    backgroundColor: theme.palette.button.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: theme.palette.text.dark,
    borderRadius: 18,
    fontSize: 14,
    fontWeight: 400,
    padding: '16px 107px',
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: theme.palette.text.primary,
      color: theme.palette.text.dark,
      boxShadow: 'none',
      borderRadius: 18
    },
    [theme.breakpoints.down('md')]: {
      backgroundColor: theme.palette.button.primary,
      padding: '0px 0px'
    }
  },
  leftBox: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
      marginTop: 10
    }
  },
  leftInner: {
    display: 'flex',
    flexDirection: 'row'
  },
  imgSec: {
    width: 310,
    height: 185,
    [theme.breakpoints.down('md')]: {
      width: 310,
      height: 'auto'
    }
  },
  iconContainer: {
    width: 70,
    height: 55,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    background: theme.palette.background.lighDark,
    cursor: 'pointer'
  },
  socialIcon: {
    height: 20,
    width: 20
  },
  infoBox: {
    padding: 0,
    marginTop: 10
  },
  summaryPadding: {
    paddingLeft: 0,
    paddingRight: 0,
    display: 'flex'
  },
  infohading: {
    width: '92%',
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 20,
    fontWeight: 700
  },
  descriptionOuter: {
    display: 'flex',
    flexDirection: 'column',
    width: '94%'
  },
  descriptionInner: {
    color: theme.palette.text.gray,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 14,
    fontWeight: 400,
    padding: 0
  },
  rightBox: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 50,
    [theme.breakpoints.down('md')]: {
      paddingLeft: 0,
      marginTop: 20
    }
  },
  headingSection: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  heading: {
    backgroundImage: `conic-gradient(${theme.palette.background.conic})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    MozBackgroundClip: 'text',
    MozTextFillColor: 'transparent',
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 30,
    fontWeight: 700
  },
  subHeading: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 400,
    fontFamily: theme.palette.font.secondaryFontFamily
  },
  priceText: {
    fontSize: 14,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontWeight: 400
  },
  amount: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 30,
    fontWeight: 400
  },
  plusIcon: {
    display: 'flex',
    alignItems: 'center'
  },
  slider: {
    width: 350,
    marginTop: 30,
    backgroundColor: `conic-gradient(${theme.palette.background.conic})`
  },
  iconOuter: {
    paddingLeft: 20
  },
  accordionIcon: {
    height: 18,
    width: 18
  },
  accordionLine: {
    backgroundColor: 'transparent',
    '&:before': {
      display: 'none',
      height: 0
    }
  },
  priceSection: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 30
  },
  amountOuter: {
    display: 'flex',
    marginTop: 2,
    alignItems: 'center'
  },
  editPrice: {
    cursor: 'pointer',
    marginLeft: 10,
    height: 22,
    width: 22
  },
  minMaxSec: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5
  },
  minSec: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 14,
    fontWeight: 400,
    width: '87%'
  },
  maxSec: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 14,
    fontWeight: 400
  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 30,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center'
    }
  },
  priceInner: {
    backgroundColor: theme.palette.background.activeMenu,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    marginBottom: 5,
    width: '83.75px',
    height: 40,
    [theme.breakpoints.down('sm')]: {
      marginRight: 5
    }
  },
  priceInnerActive: {
    backgroundColor: theme.palette.text.primary
  },
  priceList: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 14,
    fontWeight: 400
  },

  priceListActive: {
    color: theme.palette.text.dark
  }
}));

// ----------------------------------------------------------------------
const QuickOrderPopup = ({ closePopUp, onRemove, ...props }) => {
  const classes = useStyles();
  const history = useHistory();
  const min = 50;
  const max = 1000;
  const steps = min;
  const [price, setPrice] = useState(min);
  const [sliderRange, setSliderRange] = useState([]);
  const [sliderValue, setSliderValue] = useState(0);

  useEffect(() => {
    handleRange();
  }, []);

  const handleRange = () => {
    let temp = [];
    for (var i = 50; i <= max; ) {
      temp.push(i);
      i += 50;
    }
    setSliderRange(temp);
  };

  const onSubmit = () => {
    history.push(PATH_HOME.customizeStep1);
    closePopUp();
  };

  const [expanded, setExpanded] = useState(1);
  const handleChAccordion = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleSliderValue = (event, newValue) => {
    setTimeout(() => {
      setPrice(newValue);
      setSliderValue(newValue);
    }, 0);
  };

  return (
    <Grid className={classes.root}>
      <Box className={classes.topBox}>
        <Icons
          url={'closePopup'}
          className={classes.icons}
          onClick={closePopUp}
        />
      </Box>
      <Grid container className={classes.contaienr}>
        <Grid item xs={12} md={6} className={classes.leftBox}>
          <Box className={classes.leftInner}>
            <Box
              component="img"
              alt="icon"
              src={ImagesConfig[`${'giftCardtImage'}`]}
              className={classes.imgSec}
            />
            <Box className={classes.iconOuter}>
              <Box className={classes.iconContainer}>
                <Icons url={'facebook'} className={classes.socialIcon} />
              </Box>
              <Box className={classes.iconContainer}>
                <Icons url={'twitter'} className={classes.socialIcon} />
              </Box>
            </Box>
          </Box>
          <Box className={classes.infoBox}>
            <Accordion
              key={1}
              expanded={expanded === 1}
              onChange={handleChAccordion(1)}
              classes={{ root: classes.accordionLine }}
            >
              <AccordionSummary className={classes.summaryPadding}>
                <Box className={classes.descriptionOuter}>
                  <Typography
                    variant="subtitle1"
                    className={classes.infohading}
                  >
                    Description
                  </Typography>
                  {expanded === 1 && (
                    <Icons url={'minus'} className={classes.accordionIcon} />
                  )}
                </Box>
                <Box className={classes.plusIcon}>
                  <Icons
                    url={expanded === 1 ? 'minus' : 'plus'}
                    className={classes.accordionIcon}
                  />
                </Box>
              </AccordionSummary>
              <AccordionDetails className={classes.descriptionInner}>
                Shoprite made a promise of lower prices. This promise has formed
                the very foundation of our business, and has helped us grow into
                Africa’s largest food retailer. Using our massive bulk buying
                power, we’re able to offer you a world-class shopping experience
                on a variety of food products, household goods and small
                appliances at our lowest possible prices.
              </AccordionDetails>
            </Accordion>
            <Accordion
              key={2}
              expanded={expanded === 2}
              onChange={handleChAccordion(2)}
              classes={{ root: classes.accordionLine }}
            >
              <AccordionSummary className={classes.summaryPadding}>
                <Box className={classes.descriptionOuter}>
                  <Typography
                    variant="subtitle1"
                    className={classes.infohading}
                  >
                    Redemption Details
                  </Typography>
                  {expanded === 2 && (
                    <Icons url={'minus'} className={classes.accordionIcon} />
                  )}
                </Box>
                <Box className={classes.plusIcon}>
                  <Icons
                    url={expanded === 2 ? 'minus' : 'plus'}
                    className={classes.accordionIcon}
                  />
                </Box>
              </AccordionSummary>
              <AccordionDetails className={classes.descriptionInner}>
                Shoprite made a promise of lower prices. This promise has formed
                the very foundation of our business, and has helped us grow into
                Africa’s largest food retailer. Using our massive bulk buying
                power, we’re able to offer you a world-class shopping experience
                on a variety of food products, household goods and small
                appliances at our lowest possible prices.
              </AccordionDetails>
            </Accordion>
            <Accordion
              key={3}
              expanded={expanded === 3}
              onChange={handleChAccordion(3)}
              classes={{ root: classes.accordionLine }}
            >
              <AccordionSummary className={classes.summaryPadding}>
                <Box className={classes.descriptionOuter}>
                  <Typography
                    variant="subtitle1"
                    className={classes.infohading}
                  >
                    Location
                  </Typography>
                  {expanded === 3 && (
                    <Icons url={'minus'} className={classes.accordionIcon} />
                  )}
                </Box>
                <Box className={classes.plusIcon}>
                  <Icons
                    url={expanded === 3 ? 'minus' : 'plus'}
                    className={classes.accordionIcon}
                  />
                </Box>
              </AccordionSummary>
              <AccordionDetails className={classes.descriptionInner}>
                Shoprite made a promise of lower prices. This promise has formed
                the very foundation of our business, and has helped us grow into
                Africa’s largest food retailer. Using our massive bulk buying
                power, we’re able to offer you a world-class shopping experience
                on a variety of food products, household goods and small
                appliances at our lowest possible prices.
              </AccordionDetails>
            </Accordion>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} className={classes.rightBox}>
          <Box className={classes.headingSection}>
            <Typography className={classes.heading}>
              Lavien Spa Gift Card
            </Typography>
            <Typography className={classes.subHeading}>
              Life is like a water fall, you’ve gotta flow
            </Typography>
          </Box>

          <Box className={classes.priceSection}>
            <Typography className={classes.priceText}>Price</Typography>
            <Box className={classes.amountOuter}>
              <Typography className={classes.amount}>$ {price}</Typography>
              <Icons url={'editIcon'} className={classes.editPrice} />
            </Box>
            <Grid item xs className={classes.slider}>
              <CustomeSlider
                min={min}
                max={max}
                steps={steps}
                handleSliderValue={handleSliderValue}
                sliderValue={sliderValue}
              />
            </Grid>
            <Grid className={classes.minMaxSec}>
              <Box className={classes.minSec}>$ 10</Box>
              <Box className={classes.maxSec}>$ 1000</Box>
            </Grid>
          </Box>
          <Box className={classes.priceContainer}>
            {sliderRange &&
              sliderRange.length > 0 &&
              sliderRange.map((v, index) => {
                return (
                  <Box
                    className={clsx(
                      classes.priceInner,
                      price === v && classes.priceInnerActive
                    )}
                    key={index}
                    onClick={() => handleSliderValue('', v)}
                  >
                    <Typography
                      className={clsx(
                        classes.priceList,
                        price === v && classes.priceListActive
                      )}
                    >
                      ${v}
                    </Typography>
                  </Box>
                );
              })}
          </Box>
          <Box>
            <ButtonLoading
              title={'Personalize Gift Card'}
              handleClick={onSubmit}
              container={classes.buttonOuter}
              buttonClass={classes.buttonInner}
            />
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default QuickOrderPopup;
