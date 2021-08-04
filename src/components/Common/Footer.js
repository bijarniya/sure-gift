import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import Icons from 'src/components/Icons';
import { Link as ScrollLink } from 'react-scroll';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Typography,
  Grid,
  Box,
  Input,
  InputAdornment
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { PATH_HOME } from 'src/routes/paths';
import ButtonLoading from 'src/components/Common/ButtonLoading';
import Country from 'src/components/Common/Country';
import Language from 'src/components/Common/Language';
// ----------------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    paddingTop: 50
  },
  topContainer: {
    alignItems: 'center',
    background: theme.palette.background.secondary,
    display: 'flex',
    flexDirection: 'row',
    height: 115,
    borderRadius: 30,
    padding: '0px 40px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      padding: '0px 10px',
      margin: '0px 20px'
    }
  },
  logoSection: {
    width: '70%',
    marginRight: 40,
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      width: '30%',
      justifyContent: 'center',
      marginTop: '10px'
    }
  },
  logoImage: {
    width: 196,
    height: 40
  },
  socialSection: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
    width: '30%',
    [theme.breakpoints.down('sm')]: {
      width: '70%',
      justifyContent: 'center',
      marginTop: '10px'
    }
  },
  socialHeading: {
    background: theme.palette.background.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 18,
    fontWeight: 400,
    cursor: 'pointer'
  },
  minusIcon: {
    height: 24,
    width: 16,
    marginLeft: 50,
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 45
    }
  },
  facebookIcon: {
    height: 20,
    width: 20,
    marginLeft: 55,
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 50
    }
  },
  instagramIcon: {
    height: 20,
    marginLeft: 44,
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 39
    }
  },
  twitterIcon: {
    width: 20,
    marginLeft: 40,
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 36
    }
  },
  productContainer: {
    paddingTop: 80,
    paddingLeft: 25,
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      paddingLeft: 20,
      paddingRight: 10
    }
  },
  leftBox: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    flexBasis: '54.333%',
    flexGrow: 0,
    maxWidth: '54.333%',
    [theme.breakpoints.down('md')]: {
      flexBasis: '100%',
      flexGrow: 0,
      maxWidth: '100%',
      paddingRight: 10
    }
  },
  rightBox: {
    display: 'flex',
    flexDirection: 'column',
    flexBasis: '45.667%',
    flexGrow: 0,
    maxWidth: '45.667%',
    paddingLeft: 120,
    [theme.breakpoints.down('md')]: {
      paddingLeft: 0,
      flexBasis: '100%',
      flexGrow: 0,
      maxWidth: '100%',
      paddingRight: 10
    }
  },
  columnSec: {
    paddingLeft: 0,
    display: 'flex',
    flexDirection: 'column'
  },
  productTittle: {
    color: theme.palette.text.secondary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 12,
    fontWeight: 400,
    paddingBottom: 20,
    cursor: 'pointer'
  },
  productName: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 16,
    fontWeight: 400,
    paddingTop: 20,
    cursor: 'pointer',
    [theme.breakpoints.down('md')]: {
      fontSize: 13
    }
  },
  promotion: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 24,
    fontWeight: 700,
    paddingTop: 20,
    [theme.breakpoints.down('md')]: {
      fontSize: 18
    }
  },
  discription: {
    color: theme.palette.text.secondary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 16,
    fontWeight: 400,
    paddingTop: 15,
    [theme.breakpoints.down('md')]: {
      fontSize: 14
    }
  },
  pt: {
    paddingTop: 20,
    display: 'flex',
    width: 420
  },
  textField: {
    width: '100%',
    background: theme.palette.background.dark
  },
  prefectButton: {
    marginLeft: -50
  },
  buttonOuter: {
    display: 'flex',
    flexDirection: 'row',
    background: `conic-gradient(${theme.palette.background.conic})`,
    borderRadius: 18,
    padding: 1,
    width: 80,
    height: 70,
    [theme.breakpoints.down('md')]: {
      width: 80
    }
  },
  buttonInner: {
    background: `conic-gradient(${theme.palette.background.conic})`,
    border: `2px solid ${theme.palette.text.dark}`,
    color: theme.palette.text.dark,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 14,
    boxShadow: 'none',
    borderRadius: 18,
    fontWeight: 700,
    margin: 1,
    padding: '25px 0px 25px 0px',
    height: 66,
    [theme.breakpoints.down('md')]: {
      padding: '0px 0px'
    }
  },
  dropdown: {
    paddingTop: 30,
    display: 'flex',
    width: '100%',
    paddingRight: 10,
    [theme.breakpoints.down('md')]: {
      paddingRight: 14
    }
  },
  countryBox: {
    width: '50%'
  },
  enBox: {
    width: '50%'
  },
  footerBottom: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 120
  },
  reverved: {
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    width: '100%',
    fontSize: 16,
    fontWeight: 400,
    paddingTop: 14,
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: theme.palette.text.gray,
    paddingLeft: 20,
    [theme.breakpoints.down('md')]: {
      fontSize: 13,
      paddingTop: 0
    }
  },
  terms: {
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
    display: 'flex',
    width: '100%',
    fontSize: 16,
    fontWeight: 400,
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: theme.palette.text.gray,
    paddingRight: 10,
    [theme.breakpoints.down('md')]: {
      fontSize: 13,
      paddingRight: 20
    }
  },
  termsTitle: {
    marginRight: 8,
    cursor: 'pointer'
  },
  privacy: {
    marginLeft: 8,
    cursor: 'pointer'
  },
  respMargin: {
    [theme.breakpoints.between('sm', 'md')]: {
      marginBottom: 0
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: 40
    }
  },
  emailSec: {
    marginTop: 20,
    background: theme.palette.background.secondary,
    borderRadius: 18,
    paddingLeft: 25,
    height: 70,
    marginRight: 10,
    display: 'flex',
    color: theme.palette.text.gray
  },
  input: {
    background: theme.palette.background.secondary,
    color: theme.palette.text.gray,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontWeight: 400,
    fontSize: 16,
    borderRadius: 18,
    paddingLeft: 2,
    paddingRight: 2,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 2,
      paddingRight: 2
    }
  },
  outerClass: {
    background: theme.palette.background.secondary,
    [theme.breakpoints.down('md')]: {
      height: '50px'
    }
  }
}));

// ----------------------------------------------------------------------

Footer.propTypes = {
  className: PropTypes.string
};

function Footer({ className }) {
  const classes = useStyles();
  const history = useHistory();

  const handleRoutes = (path) => {
    history.push(path);
  };

  return (
    <Container maxWidth="lg" className={clsx(classes.root, className)}>
      <Grid item xs={12} lg={12} className={classes.topContainer}>
        <Box className={classes.logoSection}>
          <ScrollLink to="move_top" spy={true} smooth={true}>
            <Icons className={classes.logoImage} url={'logo'} />
          </ScrollLink>
        </Box>
        <Box className={classes.socialSection}>
          <Typography className={classes.socialHeading}>Social</Typography>
          <Icons url={'minus'} className={classes.minusIcon} />
          <Icons url={'facebook'} className={classes.facebookIcon} />
          <Icons url={'instagram'} className={classes.instagramIcon} />
          <Icons url={'twitter'} className={classes.twitterIcon} />
        </Box>
      </Grid>
      <Grid item xs={12} lg={12} className={classes.productContainer}>
        <Grid item xs={12} md={7} className={classes.leftBox}>
          <Box className={classes.columnSec}>
            <Typography className={classes.productTittle}>Products</Typography>
            <Typography className={classes.productName}>
              Become a Merchant
            </Typography>
            <Typography
              className={classes.productName}
              onClick={() => handleRoutes(PATH_HOME.merchantLocation)}
            >
              Merchant Locations
            </Typography>
          </Box>
          <Box className={classes.columnSec}>
            <Typography className={classes.productTittle}>Support</Typography>
            <Typography
              className={classes.productName}
              onClick={() => handleRoutes(PATH_HOME.howToUse)}
            >
              How Gifts works
            </Typography>
            <Typography
              className={classes.productName}
              onClick={() => handleRoutes(PATH_HOME.faq)}
            >
              FAQs
            </Typography>
            <Typography
              className={classes.productName}
              onClick={() => handleRoutes(PATH_HOME.termsAndConditions)}
            >
              Terms and cinditions
            </Typography>
            <Typography className={classes.productName}>Delivery</Typography>
            <Typography className={classes.productName}>
              Privacy Policy
            </Typography>
            <Typography
              className={classes.productName}
              onClick={() => handleRoutes(PATH_HOME.help)}
            >
              Contact Us
            </Typography>
          </Box>
          <Box className={classes.columnSec}>
            <Typography className={clsx(classes.productTittle)}>
              Company
            </Typography>
            <Typography className={classes.productName}>About Gifts</Typography>
            <Typography className={classes.productName}>Careers</Typography>
            <Typography className={classes.productName}>Blog</Typography>
            <Typography
              className={classes.productName}
              onClick={() => handleRoutes(PATH_HOME.press)}
            >
              Press Kit
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={5} className={classes.rightBox}>
          <Typography className={classes.productTittle}>Newsletter</Typography>
          <Typography className={classes.promotion}>
            Subscribe for more information
          </Typography>
          <Typography className={classes.discription}>
            Get daily information about our procut and services
          </Typography>
          <Box className={classes.emailSec}>
            <Input
              fullWidth
              disableUnderline
              className={clsx(classes.inputSection, classes.input)}
              type="text"
              placeholder="Enter email"
              endAdornment={
                <InputAdornment position="end">
                  <ButtonLoading
                    title={'Send'}
                    container={classes.buttonOuter}
                    buttonClass={classes.buttonInner}
                  />
                </InputAdornment>
              }
              inputProps={{
                className: classes.input
              }}
            />
          </Box>
          <Box className={classes.dropdown}>
            <Box className={classes.countryBox}>
              <Language outerClass={classes.outerClass} status={true} />
            </Box>
            <Box className={classes.enBox}>
              <Country outerClass={classes.outerClass} status={true} />
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Grid item xs={12} lg={12} className={classes.footerBottom}>
        <Typography className={classes.reverved}>
          © 2020 Gifts. All Rights Reserved.
        </Typography>
        <Box className={classes.terms}>
          <Box className={classes.termsTitle}> Terms </Box>|{' '}
          <Box className={classes.privacy}>Privacy Policy</Box>
        </Box>
      </Grid>
    </Container>
  );
}
export default Footer;
