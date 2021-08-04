import React from 'react';
import { Container, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ImagesConfig from 'src/layouts/Common/Images';
import clsx from 'clsx';

// ----------------------------------------------------------------------

const Card = [
  {
    path: 'samsungCard',
    shortDiscription:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit ...',
    date: 'May, 15th 2021'
  },
  {
    path: 'sparCard',
    shortDiscription:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit ...',
    date: 'May, 15th 2021'
  },
  {
    path: 'jumiaCard',
    shortDiscription:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit ...',
    date: 'May, 15th 2021'
  },
  {
    path: 'sparCard',
    shortDiscription:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit ...',
    date: 'May, 15th 2021'
  },
  {
    path: 'jumiaCard',
    shortDiscription:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit ...',
    date: 'May, 15th 2021'
  },
  {
    path: 'samsungCard',
    shortDiscription:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit ...',
    date: 'May, 15th 2021'
  },
  {
    path: 'jumiaCard',
    shortDiscription:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit ...',
    date: 'May, 15th 2021'
  },
  {
    path: 'samsungCard',
    shortDiscription:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit ...',
    date: 'May, 15th 2021'
  },
  {
    path: 'sparCard',
    shortDiscription:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit ...',
    date: 'May, 15th 2021'
  }
];

// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.main,
    height: '100%',
    paddingTop: 150
  },
  heading: {
    fontSize: 44,
    fontWeight: 700,
    textAlign: 'center',
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    [theme.breakpoints.down('md')]: {
      fontSize: 22
    }
  },
  container: {
    marginTop: 80,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      alignItems: 'center'
    }
  },
  box: {
    backgroundColor: theme.palette.background.secondary,
    display: 'flex',
    flexDirection: 'column',
    minHeight: 440,
    width: 400,
    background:
      'linear-gradient(191.34deg, rgba(255, 254, 251, 0.025) 8.56%, rgba(255, 254, 251, 0) 85.73%)',
    backdropFilter: 'blur(40px)',
    borderRadius: 50,
    marginBottom: 20,
    [theme.breakpoints.down('md')]: {
      width: '380px !important',
      minHeight: 440
    }
  },
  image: {
    width: 400,
    height: 250,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    [theme.breakpoints.down('md')]: {
      width: '380px !important',
      height: 250
    }
  },
  middleContainer: {
    padding: '30px 30px 40px 30px'
  },
  shortDiscription: {
    fontSize: 18,
    fontWeight: 400,
    color: theme.palette.text.main,
    fontFamily: theme.palette.font.secondaryFontFamily,
    [theme.breakpoints.down('md')]: {
      fontSize: 18
    }
  },
  date: {
    color: '#92FBB3',
    fontSize: 16,
    fontFamily: theme.palette.font.secondaryFontFamily,
    marginTop: 40,
    [theme.breakpoints.down('md')]: {
      fontSize: 16
    }
  }
}));

function SuperGifts() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={clsx(classes.root)}>
      <Typography className={classes.heading}>
        Supergifts in the Press
      </Typography>
      <Box className={classes.container}>
        {Card.map((item, index) => {
          return (
            <Box className={classes.box} key={index}>
              <Box
                style={{ backgroundImage: `url(${ImagesConfig.sumsang})` }}
                className={classes.image}
              />
              <Box className={classes.middleContainer}>
                <Typography className={classes.shortDiscription}>
                  {item.shortDiscription}
                </Typography>
                <Typography className={classes.date}>{item.date}</Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Container>
  );
}
export default SuperGifts;
