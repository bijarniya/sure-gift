import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Typography, TextField } from '@material-ui/core';
import ButtonLoading from 'src/components/Common/ButtonLoading';
import ImagesConfig from 'src/layouts/Common/Images';
import useAuth from 'src/hooks/useAuth';
import { apiMessage } from 'src/constants/message';
import { getSuccess, getError } from 'src/redux/slices/error';
import { useDispatch } from 'react-redux';

// --------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }
  },
  profileImg: {},
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 30,
    [theme.breakpoints.down('sm')]: {
      marginTop: 20
    }
  },
  heading: {
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: theme.palette.text.primary,
    fontSize: 20,
    fontWeight: 700
  },
  picSize: {
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: theme.palette.text.gray,
    fontSize: 10,
    fontWeight: 400,
    marginTop: 15
  },
  buttonBox: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 12
  },
  buttonOuter: {
    background: theme.palette.text.primary,
    display: 'flex',
    flexDirection: 'row',
    width: 150,
    height: 40,
    borderRadius: 13,
    padding: 0,
    margin: 0
  },
  buttonInner: {
    background: theme.palette.text.primary,
    border: `0px solid ${theme.palette.text.primary}`,
    color: theme.palette.text.dark,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 12,
    fontWeight: 600,
    boxShadow: 'none',
    borderRadius: 13,
    margin: 0,
    padding: '0px 0px',
    '&:hover': {
      background: theme.palette.text.primary,
      boxShadow: 'none',
      borderRadius: 13
    },
    [theme.breakpoints.down('md')]: {
      padding: '0px 0px'
    }
  },
  fileInput: {
    display: 'none'
  },
  buttonOuterDelete: {
    background: theme.palette.background.secondary,
    display: 'flex',
    flexDirection: 'row',
    width: 110,
    height: 40,
    borderRadius: 13,
    padding: 0,
    margin: '0px 0px 0px 10px'
  },
  buttonInnerDelete: {
    background: theme.palette.background.secondary,
    border: `0px solid ${theme.palette.background.secondary}`,
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 12,
    fontWeight: 600,
    boxShadow: 'none',
    borderRadius: 13,
    margin: 0,
    padding: '0px 0px',
    '&:hover': {
      background: theme.palette.background.secondary,
      boxShadow: 'none',
      borderRadius: 13
    },
    [theme.breakpoints.down('md')]: {
      padding: '0px 0px'
    }
  }
}));

function ProfilePicture() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { updateProfileImage } = useAuth();

  const handleButton = () => {
    let fileinput = document.getElementById('raised-button-file');
    fileinput.click();
  };

  async function handleUploadImage(event) {
    const data = new FormData();
    data.append('imagePath', event.target.files[0]);
    data.append('fileName', event.target.files[0].name);
    try {
      await updateProfileImage(data);
      dispatch(getSuccess(apiMessage.profileImage));
    } catch (error) {
      dispatch(getError(error));
    }
  }

  return (
    <Grid className={classes.root}>
      <Box
        component="img"
        alt="icon"
        src={ImagesConfig.profileBig}
        className={classes.profileImg}
      />
      <Box className={classes.container}>
        <Typography className={classes.heading}>Profile Picture</Typography>
        <Box className={classes.buttonBox}>
          <Box>
            <TextField
              accept="image/png, image/jpeg"
              className={classes.fileInput}
              id="raised-button-file"
              multiple
              type="file"
              onChange={handleUploadImage}
            />
            <ButtonLoading
              title={'Upload new picture'}
              handleClick={handleButton}
              container={classes.buttonOuter}
              buttonClass={classes.buttonInner}
            />
          </Box>
          <ButtonLoading
            title={'Delete'}
            container={classes.buttonOuterDelete}
            buttonClass={classes.buttonInnerDelete}
          />
        </Box>

        <Typography className={classes.picSize}>
          Maximum size allowed is 500kb of PNG,JPEG.
        </Typography>
      </Box>
    </Grid>
  );
}
export default ProfilePicture;
