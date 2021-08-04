import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, TextField, Box, Typography } from '@material-ui/core';
import ImagesConfig from 'src/layouts/Common/Images';
import Icons from 'src/components/Icons';
import EditorToolBar from 'src/components/Common/EditorToolBar';

// ----------------------------------------------
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    margin: '45px 0px 0px 40px'
  },
  imageContainer: {
    width: '660px',
    height: '480px',
    borderRadius: '30px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    padding: '20px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end'
  },
  inputContainer: {
    width: 290,
    height: 210,
    borderRadius: 20,
    backgroundColor: theme.palette.text.primary,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    cursor: 'pointer'
  },
  fileContainer: {
    width: 290,
    height: 210,
    marginTop: 20,
    borderRadius: 20,
    backgroundColor: theme.palette.background.main,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  fileLable: {
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: theme.palette.text.gray,
    fontSize: 14,
    fontWeight: 400,
    textAlign: 'center',
    cursor: 'pointer',
    display: 'block'
  },
  fileInput: {
    display: 'none'
  },
  iconSec: {
    marginBottom: 25
  },
  iconOuter: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  },
  borderContainer: {
    border: '1.5px dashed #AAAABE',
    borderRadius: 14,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  editSec: {
    height: 45,
    width: '100%'
  },
  editText: {
    marginTop: 26,
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: theme.palette.text.gray,
    fontSize: 14,
    fontWeight: 400
  }
}));

// ------------------------------------------------

const CustomizedGiftCard = ({ activeSlide }) => {
  const classes = useStyles();
  const anchorRef = useRef(null);
  const [isOpen, setOpen] = useState(false);

  const handleToolBar = (status) => {
    setOpen(status);
  };

  return (
    <Grid item xs={12} className={classes.container}>
      <Grid
        style={{ backgroundImage: `url(${ImagesConfig.cust1441Bg})` }}
        className={classes.imageContainer}
      >
        <Grid className={classes.inputContainer}>
          <Box
            className={classes.borderContainer}
            ref={anchorRef}
            onClick={() => handleToolBar(true)}
          >
            <Box className={classes.textContainer}>
              <Icons url={'editIconText'} className={classes.editSec} />
              <Typography className={classes.editText}>
                Click to edit message
              </Typography>
            </Box>
          </Box>
          <EditorToolBar
            handleToolBar={handleToolBar}
            isOpen={isOpen}
            anchorRef={anchorRef}
          />
        </Grid>
        <Grid className={classes.fileContainer}>
          <Box className={classes.borderContainer}>
            <TextField
              accept="image/*"
              className={classes.fileInput}
              id="raised-button-file"
              multiple
              type="file"
            />
            <label htmlFor="raised-button-file" className={classes.fileLable}>
              <Box className={classes.iconOuter}>
                <Icons url={'fileIcon'} className={classes.iconSec} />
              </Box>
              Add photo or video
            </label>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CustomizedGiftCard;
