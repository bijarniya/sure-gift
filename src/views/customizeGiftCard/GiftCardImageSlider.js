import clsx from 'clsx';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import LazySize from 'src/components/LazySize';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import ImagesConfig from 'src/layouts/Common/Images';

// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 100,
    margin: 0,
    padding: 0,
    overflow: 'hidden',
    position: 'relative',
    '&:before, &:after': {
      width: '100%',
      height: 100,
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
        width: '99px !important'
      },
      '& .slick-list': {
        marginRight: '-11px'
      }
    }
  },
  imageContainer: {
    height: 100,
    width: '100%',
    borderRadius: 2,
    overflow: 'hidden',
    position: 'relative'
  },
  imageSec: {
    top: 0,
    width: 80,
    height: 100,
    position: 'absolute',
    borderColor: `conic-gradient(${theme.palette.background.conic})`,
    borderWidth: '1px solid',
    cursor: 'pointer'
  },
  activeSlide: {
    border: '2px solid white',
    borderRadius: 14
  }
}));

// ----------------------------------------------------------------------

CarouselItem.propTypes = {
  item: PropTypes.object
};

function CarouselItem({ item, handleActiveSlide, activeSlide }) {
  const classes = useStyles();
  const { image, id } = item;

  return (
    <Grid className={classes.imageContainer}>
      <LazySize
        alt={''}
        src={`${ImagesConfig[image]}`}
        className={clsx(
          classes.imageSec,
          activeSlide && activeSlide.id === id && classes.activeSlide
        )}
        onClick={() => handleActiveSlide(item)}
      />
    </Grid>
  );
}

GiftCardImageSlider.propTypes = {
  carousels: PropTypes.array.isRequired,
  className: PropTypes.string
};

function GiftCardImageSlider({ carousels, className, ...props }) {
  const classes = useStyles();
  const carouselRef = useRef();
  const theme = useTheme();

  const settings = {
    speed: 500,
    slidesToShow: 10,
    centerPadding: 0,
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
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          centerPadding: '0'
        }
      }
    ]
  };
  return (
    <Grid item xs={12} className={clsx(classes.root, className)}>
      <Slider ref={carouselRef} {...settings}>
        {carousels.map((item, index) => (
          <CarouselItem key={index} item={item} {...props} />
        ))}
      </Slider>
    </Grid>
  );
}

export default GiftCardImageSlider;
