import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Input, InputAdornment, ClickAwayListener } from "@material-ui/core";
import Icons from "src/components/Icons";

// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background.main,
    borderRadius: 18,
    height: 60,
    display: 'flex',
    justifyContent: 'center'
  },
  inputSection: {
    padding: 5,
    paddingRight: 25,
    marginLeft: 0,
    [theme.breakpoints.down('md')]: {

    }
  },
  iconImage: {
    marginRight: 15,
    marginLeft: 20
  },
  input: {
    color: theme.palette.text.gray,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontWeight: 400,
    fontSize: 16,
    width: '100%',
    "&::placeholder": {
      color: theme.palette.text.gray,
      fontWeight: 400,
      fontSize: 16,
    },
    [theme.breakpoints.down('md')]: {
      width: '100%'
    }
  },
}));

// ----------------------------------------------------------------------

GiftSearchBar.propTypes = {
  className: PropTypes.string,
};

function GiftSearchBar({ className }) {
  const classes = useStyles();

  const handleClose = () => { };

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div className={clsx(classes.root, className)}>
        <Input
          autoFocus
          fullWidth
          disableUnderline
          className={clsx(classes.inputSection, classes.input)}
          placeholder="Search"
          startAdornment={
            <InputAdornment position="start">
              <Icons
                className={classes.iconImage}
                url={"searchOrder"}
              />
            </InputAdornment>
          }
          inputProps={{
            className: classes.input,
          }}
        />
      </div>
    </ClickAwayListener>
  );
}

export default GiftSearchBar;
