import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import OptionsDropDown from 'src/components/Common/OptionsDropDown';

// ----------------------------------------------------------------------
const options = [
  {
    id: 1,
    label: 'Action'
  }
];

// ----------------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
  outerClass: {
    background: theme.palette.background.activeMenu,
    display: 'flex',
    alignItems: 'center',
    height: 50,
    width: 114,
    borderRadius: 18
  },
  iconClass: {
    width: 20,
    height: 20
  },
  actionTitle: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.fontFamily,
    fontWeight: 400,
    fontSize: 14
  },
  dropDownOuterCls: {
    padding: '0px 21px 0px 15px'
  }
}));
// ----------------------------------------------------------------------

CheckVoucherFilters.propTypes = {
  className: PropTypes.string
};

function CheckVoucherFilters() {
  const classes = useStyles();
  const [optionDefault, setOptionDefault] = useState(options[0]);

  const handleOptionOnChange = (value) => {
    setOptionDefault(value);
  };

  return (
    <OptionsDropDown
      options={options}
      optionDefault={optionDefault}
      handleOptionOnChange={handleOptionOnChange}
      outerClass={classes.outerClass}
      upIcon={'upArrowN'}
      downIcon={'downArrow'}
      iconClass={classes.iconClass}
      titleCls={classes.actionTitle}
      dropDownOuterCls={classes.dropDownOuterCls}
      width={200}
    />
  );
}

export default CheckVoucherFilters;
