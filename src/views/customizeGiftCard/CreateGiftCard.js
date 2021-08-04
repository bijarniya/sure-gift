import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import GiftCardImageSlider from './GiftCardImageSlider';
import CustomizedGiftCard from './CustomizedGiftCard';

// ---------------------------------------------
const imgSlider = [
  {
    id: 1,
    image: 'cust1440'
  },
  {
    id: 2,
    image: 'cust1442'
  },
  {
    id: 3,
    image: 'cust1441'
  },
  {
    id: 4,
    image: 'cust1443'
  },
  {
    id: 5,
    image: 'cust1444'
  },
  {
    id: 6,
    image: 'cust1445'
  },
  {
    id: 7,
    image: 'cust1446'
  },
  {
    id: 8,
    image: 'cust1447'
  },
  {
    id: 9,
    image: 'cust1448'
  },
  {
    id: 10,
    image: 'cust1449'
  },
  {
    id: 11,
    image: 'cust1449'
  },
  {
    id: 12,
    image: 'cust1449'
  },
  {
    id: 13,
    image: 'cust1449'
  }
];

// ----------------------------------------------
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 30
  }
}));

// ------------------------------------------------

const CreateGiftCard = () => {
  const classes = useStyles();
  const [activeSlide, setActiveSlide] = useState(imgSlider[2]);

  const handleActiveSlide = (item) => {
    setActiveSlide(item);
  };

  return (
    <Grid item xs={10} lg={10} className={classes.container}>
      <GiftCardImageSlider
        carousels={imgSlider}
        handleActiveSlide={handleActiveSlide}
        activeSlide={activeSlide}
      />
      <CustomizedGiftCard activeSlide={activeSlide} />
    </Grid>
  );
};

export default CreateGiftCard;
