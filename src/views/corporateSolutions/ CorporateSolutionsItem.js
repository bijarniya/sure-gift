import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Box,
  Accordion,
  Typography,
  AccordionSummary,
  AccordionDetails,
  Divider
} from '@material-ui/core';
import Icons from 'src/components/Icons';
import ButtonLoading from 'src/components/Common/ButtonLoading';

// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 10,
      paddingRight: 10
    }
  },
  infoBox: {
    padding: 0,
    marginTop: 100,
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      marginTop: 50
    }
  },
  summaryPadding: {
    paddingLeft: 0,
    paddingRight: 0,
    display: 'flex'
  },
  iconOuter: {
    paddingLeft: 20
  },
  accordionIcon: {
    height: 40,
    width: 40,
    [theme.breakpoints.down('sm')]: {
      height: 20,
      width: 20
    }
  },
  accordionLine: {
    backgroundColor: 'transparent',
    '&:before': {
      display: 'none',
      height: 0
    }
  },
  infohading: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 74,
    fontWeight: 400,
    [theme.breakpoints.down('md')]: {
      fontSize: 20
    }
  },
  descriptionOuter: {
    display: 'flex',
    flexDirection: 'column',
    width: '97%'
  },
  descriptionInner: {
    color: theme.palette.text.gray,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 24,
    fontWeight: 400,
    padding: 0,
    [theme.breakpoints.down('md')]: {
      fontSize: 14
    }
  },
  plusIcon: {
    display: 'flex',
    alignItems: 'center'
  },
  dividerSec: {
    border: '0.5px solid #FFFFFF',
    marginTop: 40,
    [theme.breakpoints.down('md')]: {
      marginTop: 30,
      marginBottom: 10
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
    padding: '29px 0px 29px 0px',
    '&:hover': {
      backgroundColor: theme.palette.text.dark,
      boxShadow: 'none',
      borderRadius: 18
    },
    [theme.breakpoints.down('md')]: {
      padding: '0px 0px'
    }
  }
}));

// ----------------------------------------------------------------------

CorporateSolutionsItem.propTypes = {
  className: PropTypes.string
};

function CorporateSolutionsItem() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(2);

  const handleChAccordion = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleButton = () => {};

  return (
    <Grid item xs={12} md={12} className={classes.root}>
      <Box className={classes.infoBox}>
        <Accordion
          key={1}
          expanded={expanded === 1}
          onChange={handleChAccordion(1)}
          classes={{ root: classes.accordionLine }}
        >
          <AccordionSummary className={classes.summaryPadding}>
            <Box className={classes.descriptionOuter}>
              <Typography variant="subtitle1" className={classes.infohading}>
                Channel Incentives
              </Typography>
            </Box>
            <Box className={classes.plusIcon}>
              <Icons
                url={expanded === 1 ? 'minus' : 'plus'}
                className={classes.accordionIcon}
              />
            </Box>
          </AccordionSummary>
          <AccordionDetails className={classes.descriptionInner}>
            Our personalized gift cards are designed to help organizations
            increase overall empoyee performance
          </AccordionDetails>
        </Accordion>
        <Divider className={classes.dividerSec} />
        <Accordion
          key={2}
          expanded={expanded === 2}
          onChange={handleChAccordion(2)}
          classes={{ root: classes.accordionLine }}
        >
          <AccordionSummary className={classes.summaryPadding}>
            <Box className={classes.descriptionOuter}>
              <Typography variant="subtitle1" className={classes.infohading}>
                Employee Rewards
              </Typography>
            </Box>
            <Box className={classes.plusIcon}>
              <Icons
                url={expanded === 2 ? 'minus' : 'plus'}
                className={classes.accordionIcon}
              />
            </Box>
          </AccordionSummary>
          <AccordionDetails className={classes.descriptionInner}>
            Our personalized gift cards are designed to help organizations
            increase overall empoyee performance
            <Box className={classes.prefectButton}>
              <ButtonLoading
                title={'Registration Now'}
                handleClick={handleButton}
                container={classes.buttonOuter}
                buttonClass={classes.buttonInner}
              />
            </Box>
          </AccordionDetails>
        </Accordion>
        <Divider className={classes.dividerSec} />

        <Accordion
          key={3}
          expanded={expanded === 3}
          onChange={handleChAccordion(3)}
          classes={{ root: classes.accordionLine }}
        >
          <AccordionSummary className={classes.summaryPadding}>
            <Box className={classes.descriptionOuter}>
              <Typography variant="subtitle1" className={classes.infohading}>
                Customer Rewards
              </Typography>
            </Box>
            <Box className={classes.plusIcon}>
              <Icons
                url={expanded === 3 ? 'minus' : 'plus'}
                className={classes.accordionIcon}
              />
            </Box>
          </AccordionSummary>
          <AccordionDetails className={classes.descriptionInner}>
            Our personalized gift cards are designed to help organizations
            increase overall empoyee performance
          </AccordionDetails>
        </Accordion>
        <Divider className={classes.dividerSec} />

        <Accordion
          key={4}
          expanded={expanded === 4}
          onChange={handleChAccordion(4)}
          classes={{ root: classes.accordionLine }}
        >
          <AccordionSummary className={classes.summaryPadding}>
            <Box className={classes.descriptionOuter}>
              <Typography variant="subtitle1" className={classes.infohading}>
                Consumer Promotions
              </Typography>
            </Box>
            <Box className={classes.plusIcon}>
              <Icons
                url={expanded === 4 ? 'minus' : 'plus'}
                className={classes.accordionIcon}
              />
            </Box>
          </AccordionSummary>
          <AccordionDetails className={classes.descriptionInner}>
            Our personalized gift cards are designed to help organizations
            increase overall empoyee performance
          </AccordionDetails>
        </Accordion>
        <Divider className={classes.dividerSec} />
      </Box>
    </Grid>
  );
}
export default CorporateSolutionsItem;
