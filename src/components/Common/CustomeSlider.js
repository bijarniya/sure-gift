import React from 'react';
import { withStyles } from '@material-ui/core';
import Slider from '@material-ui/core/Slider';

const colorConic =
  'conic-gradient(from 151.11deg at 50% 50%, #CC9AC7 0deg, #A082F4 13.37deg, #A6E8F7 106.88deg, #FFF5DD 204.37deg, #FFF4D9 305.62deg, #CC9AC7 360deg)';
const CumSlider = withStyles({
  rail: {
    height: 2,
    backgroundImage: colorConic
  },
  track: {
    height: 2,
    backgroundImage: colorConic
  },
  thumb: {
    backgroundImage: colorConic,
    height: 16,
    width: 16,
    borderRadius: 4,
    marginLeft: 2,
    '&:focus, &:hover, &:active': {
      boxShadow: 'none',
      '@media (hover: none)': {
        boxShadow: 'none'
      }
    }
  }
})(Slider);

// ----------------------------------------------------------------------
const CustomeSlider = ({
  min,
  max,
  getValue,
  steps,
  handleSliderValue,
  sliderValue
}) => {
  function valuetext(value) {
    return value;
  }
  return (
    <CumSlider
      value={sliderValue}
      onChange={handleSliderValue}
      getAriaValueText={valuetext}
      valueLabelDisplay="off"
      step={steps}
      min={min}
      max={max}
    />
  );
};
export default CustomeSlider;
