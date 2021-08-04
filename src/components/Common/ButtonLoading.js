import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { LoadingButton } from '@material-ui/lab';
import { Box, Typography } from '@material-ui/core';
import Icons from 'src/components/Icons';
// ----------------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    background:
      'conic-gradient(from 151.11deg at 50% 50%, #CC9AC7 0deg, #A082F4 13.37deg, #A6E8F7 106.88deg, #FFF5DD 204.37deg, #FFF4D9 305.62deg, #CC9AC7 360deg)',
    borderRadius: 18,
    padding: 1
  },
  button: {
    backgroundColor: theme.palette.text.dark,
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 14,
    boxShadow: 'none',
    borderRadius: 18,
    fontWeight: 700,
    padding: '16px 40px',
    '&:hover': {
      backgroundColor: theme.palette.text.dark,
      boxShadow: 'none',
      borderRadius: 18
    },
    [theme.breakpoints.down('md')]: {
      padding: '0px 0px'
    }
  },
  buttonTextOuter: {
    display: 'flex',
    width: '100%'
  },
  buttonTextLeft: {
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    textAlign: 'left'
  },
  buttonTextInner: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center'
  },
  buttonTitle: {
    width: '90%'
  }
}));

// ----------------------------------------------------------------------

ButtonLoading.propTypes = {
  className: PropTypes.string
};

function ButtonLoading({
  container,
  buttonClass,
  title,
  handleClick,
  pending,
  icon,
  iconClass,
  status
}) {
  const classes = useStyles();

  return (
    <Box className={clsx(classes.root, container ? container : '')}>
      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        className={clsx(classes.button, buttonClass ? buttonClass : '')}
        onClick={handleClick}
        pending={pending ? pending.toString() : ''}
      >
        <Box className={classes.buttonTextOuter}>
          {status ? (
            <Box className={classes.buttonTextLeft}>
              <Typography className={classes.buttonTitle}>{title}</Typography>
              {icon && <Icons url={icon} className={iconClass} />}
            </Box>
          ) : (
            <Box className={classes.buttonTextInner}>
              {icon && <Icons url={icon} className={iconClass} />}
              {title}
            </Box>
          )}
        </Box>
      </LoadingButton>
    </Box>
  );
}

export default ButtonLoading;
