import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Input, InputAdornment } from '@material-ui/core';
import Icons from 'src/components/Icons';

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background.activeMenu,
    display: 'flex',
    width: '100%',
    height: 60,
    borderRadius: 18
  },
  input: {
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: theme.palette.text.primary,
    fontSize: 16,
    fontWeight: 400,
    paddingRight: 10,
    '& .MuiInput-input': {
      color: theme.palette.text.primary,
      '&::placeholder': {
        color: theme.palette.text.primary
      }
    }
  },
  icon: {
    marginRight: 12,
    marginLeft: 17
  }
}));

// ----------------------------------------------------------------------
function Search({ searchItem, handleSearch }) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Input
        autoFocus
        fullWidth
        disableUnderline
        placeholder={searchItem}
        onChange={(e) => handleSearch(e.target.value)}
        startAdornment={
          <InputAdornment position="start">
            <Icons
              className={classes.icon}
              url={'searchOrder'}
              height={30}
              width={30}
            />
          </InputAdornment>
        }
        className={classes.input}
        inputProps={{
          className: classes.input
        }}
      />
    </Box>
  );
}

export default Search;
