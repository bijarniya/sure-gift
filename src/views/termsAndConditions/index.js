import React from 'react';
import Page from 'src/components/Page';
import { makeStyles } from '@material-ui/core/styles';
import Footer from 'src/components/Common/Footer';
import { Typography, Container } from '@material-ui/core';
import clsx from 'clsx';

// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    backgroundColor: theme.palette.background.main
  },
  content: {
    backgroundColor: theme.palette.background.main,
    padding: '160px 0px 0px 0px',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      padding: '100px 0px 0px 0px'
    }
  },
  bottomContainer: {
    backgroundColor: theme.palette.background.main,
    padding: '50px 0px 100px 0px',
    [theme.breakpoints.down('md')]: {
      padding: '50px 0px 100px 0px'
    }
  },
  containerOuter: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '60%',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      width: '95%'
    }
  },
  heading: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 64,
    fontWeight: 400,
    [theme.breakpoints.down('md')]: {
      fontSize: 25
    }
  },
  tagline: {
    color: theme.palette.text.gray,
    fontFamily: theme.palette.font.secondaryFontFamily,
    textTransform: 'uppercase',
    marginTop: 10,
    fontSize: 10,
    fontWeight: 400
  },
  title: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 30,
    fontWeight: 400,
    marginTop: 60,
    [theme.breakpoints.down('md')]: {
      fontSize: 25,
      marginTop: 40
    }
  },
  discription: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 16,
    fontWeight: 400,
    marginTop: 20,
    [theme.breakpoints.down('md')]: {
      fontSize: 14,
      marginTop: 10
    }
  }
}));

function TermsAndConditions() {
  const classes = useStyles();

  return (
    <Page title="Suregifts Customer" id="move_top" className={classes.root}>
      <div className={classes.content}>
        <Container maxWidth="lg" className={clsx(classes.containerOuter)}>
          <Typography className={classes.heading}>
            TERMS AND CONDITIONS
          </Typography>
          <Typography className={classes.tagline}>
            THIS SITE AND RELATED SERVICES ARE PROVIDED SUBJECT TO YOUR
            COMPLIANCE WITH THE TERMS AND CONDITIONS SET FORTH BELOW. PLEASE
            READ THE FOLLOWING INFORMATION CAREFULLY. YOUR CONTINUED USE OF THIS
            SITE WILL INDICATE YOUR AGREEMENT TO BE BOUND BY THE TERMS AND
            CONDITIONS SET FORTH BELOW. IF YOU DO NOT AGREE TO BE BOUND BY THE
            TERMS AND CONDITIONS, PROMPTLY EXIT THIS SITE.
          </Typography>
          <Typography className={classes.title}>
            1. Acceptance of Terms.
          </Typography>
          <Typography className={classes.discription}>
            Welcome to suregifts.com.ng, a website owned by Surebids Limited
            (“Surebids”). Surebids provides its service to you subject to the
            following Terms of Service (“Terms”). By accessing a Surebids
            website (each, a “Site”) on the Internet or World Wide Web, you are
            agreeing to comply with and be bound by the Terms. If you do not
            wish to agree to the Terms, do not access or use any part of any
            Site. In addition, when using particular Surebids services, you are
            subject to any posted guidelines or rules applicable to such
            services or products. All such guidelines and rules applicable to
            such services or products are hereby incorporated by reference into
            the Terms. We may refuse any or all of our services to anyone at any
            time, in our sole discretion. This site is intended for use by
            individuals who are at least 13 years of age. If your parent or
            guardian has any concerns, please feel free to contact us via email
            at hello@suregifts.com.ng
          </Typography>
          <Typography className={classes.title}>
            2. Products and Services.
          </Typography>
          <Typography className={classes.discription}>
            Various products such as gift cards, whether they are physical or
            electronic, may be selected and purchased on a Site (“Surebids
            Products”). Some Surebids Products can be customized with text,
            pictures and/or graphics. When you have completed and paid for your
            order, Surebids will produce the Surebids Products you have selected
            and send them to the recipients specified by you. The pricing for
            Surebids Products, which is stated in Nigerian Naira, is set forth
            on the applicable Site, and incorporated into these Terms by
            reference. Please note that prices and fees may change from time to
            time; the price charged to you will be the price set forth on the
            Site at the time you place your order. Please place and complete
            your order carefully. All purchases of Surebids Products are
            non-returnable and non-refundable. If you have any questions or
            problems with your order or the order has not been received within
            the expected time frame, please contact us immediately at
            hello@suregifts.com.ng or 080-9118-9900. Please include your order
            number in all communications for prompt service.
          </Typography>
        </Container>
      </div>
      <div className={classes.bottomContainer}>
        <Footer />
      </div>
    </Page>
  );
}
export default TermsAndConditions;
