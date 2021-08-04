import React from 'react';
import PropTypes from 'prop-types';
import { Popover } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  paper: {
    marginLeft: 4,
    overflow: 'inherit',
    boxShadow: theme.shadows[25].z20,
    borderRadius: 25,
    borderStyle: 'groove',
    borderWidth: 1,
    borderColor: 'linear-gradient(#e6e6e6, #d9d9d9)'
  },
  BoxInner: {
    padding: 20,
    fontFamily: theme.palette.font.secondaryFontFamily
  },
  root: {
    '& .MuiBackdrop-root': {
      backgroundColor: 'transparent !important'
    }
  }
}));

// ----------------------------------------------------------------------

PopoverMenu.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.number,
  className: PropTypes.string
};

function PopoverMenu({ children, width, className, ...other }) {
  const classes = useStyles();

  return (
    <Popover
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      className={className}
      classes={{
        root: classes.root,
        paper: classes.paper
      }}
      {...other}
    >
      <Box sx={{ width: width, maxWidth: '100%' }} className={classes.BoxInner}>
        {children}
      </Box>
    </Popover>
  );
}

export default PopoverMenu;
