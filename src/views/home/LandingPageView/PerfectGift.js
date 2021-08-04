import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import PerfectGiftEveryone from './PerfectGiftEveryone';
import BestDay from './BestDay';
import DownArrow from 'src/components/Home/DownArrow';
import SharedCount from './SharedCount';
import GiftcardMerchant from './GiftcardMerchant';
import HowItWorks from './HowItWorks';

// ---------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    color: '#fff',
    width: '100%'
  }
}));

// ---------------------------------------------------
PerfectGift.propTypes = {
  className: PropTypes.string
};

function PerfectGift() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={clsx(classes.root)}>
      <SharedCount />
      <PerfectGiftEveryone />
      <BestDay />
      <DownArrow icon={'longDownArrow'} />
      <HowItWorks />
      <GiftcardMerchant />
    </Container>
  );
}

export default PerfectGift;
