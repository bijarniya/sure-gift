import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, Box, Typography } from '@material-ui/core';
import Icons from 'src/components/Icons';
import { LoadingButton } from '@material-ui/lab';
import { varFadeInUp, MotionInView } from 'src/components/Animate';
import faker from 'faker';
import Slider from 'react-slick';
import SliderItem from './SliderItem';

// ----------------------------------------------------------------------
const list = [
  {
    id: faker.random.uuid(),
    name: 'James Khaled Olu',
    role: 'HR Admin, PIMP NIG..',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
  },
  {
    id: faker.random.uuid(),
    name: 'James Khaled Olu',
    role: 'HR Admin, PIMP NIG.',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
  },
  {
    id: faker.random.uuid(),
    name: 'James Khaled Olu',
    role: 'HR Admin, PIMP NIG.',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
  },
  {
    id: faker.random.uuid(),
    name: 'James Khaled Olu',
    role: 'HR Admin, PIMP NIG.',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
  },
  {
    id: faker.random.uuid(),
    name: 'James Khaled Olu',
    role: 'HR Admin, PIMP NIG.',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
  },
  {
    id: faker.random.uuid(),
    name: 'James Khaled Olu',
    role: 'HR Admin, PIMP NIG...',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
  },
  {
    id: faker.random.uuid(),
    name: 'James Khaled Olu',
    role: 'HR Admin, PIMP NIG...',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
  },
  {
    id: faker.random.uuid(),
    name: 'James Khaled Olu',
    role: 'HR Admin, PIMP NIG...',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
  },
  {
    id: faker.random.uuid(),
    name: 'James Khaled Olu',
    role: 'HR Admin, PIMP NIG...',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
  }
];

// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  prefectContainer: {
    marginTop: 194,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    [theme.breakpoints.between('sm', 'md')]: {
      flexDirection: 'row'
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      padding: '0px 20px',
      marginTop: 80
    }
  },
  leftBox: {
    display: 'flex',
    flexDirection: 'column',
    width: '27%',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  heading: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 64,
    lineHeight: '110%',
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: 42
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 25,
      textAlign: 'center'
    }
  },
  iconBoxOuter: {
    marginTop: 50,
    display: 'flex',
    flexDirection: 'row',
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      marginTop: 40
    }
  },
  buttonSec: {
    background: theme.palette.background.secondary,
    borderRadius: 50,
    width: 60,
    height: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    boxShadow: 'none',
    '&:hover': {
      background: theme.palette.background.secondary,
      boxShadow: 'none'
    }
  },
  iconSec: {
    width: 30,
    height: 30
  },
  rightBox: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 80,
    width: '79%',
    marginRight: '-9%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginTop: 30,
      marginRight: 0,
      paddingLeft: 0
    }
  },
  sliderSec: {
    width: '100%',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
    position: 'relative',
    '&:before, &:after': {
      width: '100%',
      top: 0,
      left: 0,
      zIndex: 8,
      display: 'none',
      position: 'absolute',
      [theme.breakpoints.up('480')]: {
        display: 'block'
      }
    },
    '&:after': {
      width: '100%',
      height: 100,
      right: 0,
      left: 0,
      transform: 'scaleX(-1)'
    },
    '& .slick-track': {
      marginLeft: 0,
      marginRight: 0,
      '& .slick-slide': {
        width: '366px !important',
        marginLeft: 15,
        [theme.breakpoints.down('sm')]: {
          width: '200px !important'
        }
      },
      '& .slick-list': {}
    }
  },
  slidContainer: {
    width: 366,
    [theme.breakpoints.down('sm')]: {
      width: 200
    }
  }
}));

// ----------------------------------------------------------------------

ClientsAreSaying.propTypes = {
  className: PropTypes.string
};

function ClientsAreSaying({ ...props }) {
  const classes = useStyles();
  const carouselRef = useRef();
  const theme = useTheme();

  const settings = {
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    mobileFirst: true,
    rtl: Boolean(theme.direction === 'rtl'),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const gotoNext = () => {
    carouselRef.current.slickNext();
  };

  const gotoPrev = () => {
    carouselRef.current.slickPrev();
  };

  return (
    <Grid item xs={12} lg={12} className={classes.prefectContainer}>
      <Grid className={classes.leftBox}>
        <MotionInView variants={varFadeInUp}>
          <Typography className={classes.heading}>
            What our Clients Are Saying
          </Typography>
        </MotionInView>
        <Box className={classes.iconBoxOuter}>
          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            className={classes.buttonSec}
            onClick={gotoPrev}
          >
            <Icons url={'leftArroWhite'} className={classes.iconSec} />
          </LoadingButton>
          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            className={classes.buttonSec}
            onClick={gotoNext}
          >
            <Icons url={'rightArrow'} className={classes.iconSec} />
          </LoadingButton>
        </Box>
      </Grid>
      <Grid className={classes.rightBox}>
        <Grid className={classes.sliderSec}>
          <Slider ref={carouselRef} {...settings}>
            {list &&
              list.length > 0 &&
              list.map((item, index) => (
                <div className={classes.slidContainer} key={item.id}>
                  <SliderItem key={index} item={item} {...props} />
                </div>
              ))}
          </Slider>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ClientsAreSaying;
