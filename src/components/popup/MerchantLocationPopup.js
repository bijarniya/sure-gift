import React from 'react';
import { makeStyles, Grid, Box, Typography } from '@material-ui/core';
import Icons from 'src/components/Icons';
import faker from 'faker';

// ----------------------------------------------------------------------
const list = [
  {
    id: faker.random.uuid(),
    name: 'H&M',
    location: '3 location',
    address: 'Lagos, Behind Nicon Town, Total Filling Station, Ikate Elegushi',
    email: 'feedback@sparnigeria.com',
    status: 1
  },
  {
    id: faker.random.uuid(),
    name: 'H&M',
    location: '3 location',
    address: 'Lagos, Behind Nicon Town, Total Filling Station, Ikate Elegushi',
    email: 'feedback@sparnigeria.com',
    status: 0
  },
  {
    id: faker.random.uuid(),
    name: 'H&M',
    location: '3 location',
    address: 'Lagos, Behind Nicon Town, Total Filling Station, Ikate Elegushi',
    email: 'feedback@sparnigeria.com',
    status: 0
  },
  {
    id: faker.random.uuid(),
    name: 'H&M',
    location: '3 location',
    address: 'Lagos, Behind Nicon Town, Total Filling Station, Ikate Elegushi',
    email: 'feedback@sparnigeria.com',
    status: 1
  },
  {
    id: faker.random.uuid(),
    name: 'H&M',
    location: '3 location',
    address: 'Lagos, Behind Nicon Town, Total Filling Station, Ikate Elegushi',
    email: 'feedback@sparnigeria.com',
    status: 0
  },
  {
    id: faker.random.uuid(),
    name: 'H&M',
    location: '3 location',
    address: 'Lagos, Behind Nicon Town, Total Filling Station, Ikate Elegushi',
    email: 'feedback@sparnigeria.com',
    status: 0
  },
  {
    id: faker.random.uuid(),
    name: 'H&M',
    location: '3 location',
    address: 'Lagos, Behind Nicon Town, Total Filling Station, Ikate Elegushi',
    email: 'feedback@sparnigeria.com',
    status: 0
  },
  {
    id: faker.random.uuid(),
    name: 'H&M',
    location: '3 location',
    address: 'Lagos, Behind Nicon Town, Total Filling Station, Ikate Elegushi',
    email: 'feedback@sparnigeria.com',
    status: 0
  },
  {
    id: faker.random.uuid(),
    name: 'H&M',
    location: '3 location',
    address: 'Lagos, Behind Nicon Town, Total Filling Station, Ikate Elegushi',
    email: 'feedback@sparnigeria.com',
    status: 0
  },
  {
    id: faker.random.uuid(),
    name: 'H&M',
    location: '3 location',
    address: 'Lagos, Behind Nicon Town, Total Filling Station, Ikate Elegushi',
    email: 'feedback@sparnigeria.com',
    status: 0
  },
  {
    id: faker.random.uuid(),
    name: 'H&M',
    location: '3 location',
    address: 'Lagos, Behind Nicon Town, Total Filling Station, Ikate Elegushi',
    email: 'feedback@sparnigeria.com',
    status: 0
  },
  {
    id: faker.random.uuid(),
    name: 'H&M',
    location: '3 location',
    address: 'Lagos, Behind Nicon Town, Total Filling Station, Ikate Elegushi',
    email: 'feedback@sparnigeria.com',
    status: 0
  }
];

// ----------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: '40px 40px 30px 40px',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      padding: '40px 40px 30px 40px'
    }
  },
  topBox: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  contaienr: {
    [theme.breakpoints.down('md')]: {
      marginTop: 0
    }
  },
  icons: {
    cursor: 'pointer',
    width: 30,
    height: 30,
    zIndex: 999
  },
  titleOne: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 20,
    fontWeight: 700,
    marginTop: 5
  },
  locationOne: {
    color: theme.palette.text.gray,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 14,
    fontWeight: 400
  },
  headingSec: {
    width: '95%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  merchCard: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 40,
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center'
    }
  },

  rootOne: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 344,
    width: 285,
    padding: '25px 15px 15px 15px',
    marginBottom: 15,
    background:
      'linear-gradient(191.34deg, rgba(255, 254, 251, 0.025) 8.56%, rgba(255, 254, 251, 0) 85.73%)',
    backdropFilter: 'blur(64.0164px)',
    borderRadius: 25,
    border: `1px solid ${theme.palette.border.grayWhite}`,
    [theme.breakpoints.down('sm')]: {
      marginBottom: 15,
      width: 285
    }
  },
  topBoxOne: {
    paddingLeft: 10,
    width: '100%'
  },
  topBoxInner: {
    display: 'flex',
    flexDirection: 'row'
  },
  iconOuter: {
    width: 60,
    height: 60,
    backgroundColor: theme.palette.text.primary,
    borderRadius: 16,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer'
  },
  infoOuter: {
    paddingLeft: 15,
    display: 'flex',
    flexDirection: 'column'
  },
  title: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 20,
    fontWeight: 700
  },
  location: {
    color: theme.palette.text.gray,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 14,
    fontWeight: 400,
    marginTop: 5
  },
  addressOuter: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 30
  },
  addressHeading: {
    color: theme.palette.text.gray,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 12,
    fontWeight: 400,
    textTransform: 'uppercase'
  },
  address: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 14,
    fontWeight: 400,
    marginTop: 6
  },
  contact: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 20
  },
  buttonOuter: {
    marginTop: 30,
    width: 255,
    borderRadius: 16,
    background: 'rgba(255, 255, 255, 0.05)',
    height: 50,
    display: 'flex',
    padding: 0,
    cursor: 'pointer'
  },
  dropDownOuter: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: '0px 25px 0px 25px',
    [theme.breakpoints.down('md')]: {
      width: '100%'
    }
  },
  catInfo: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 14,
    width: '91%'
  },
  iconClass: {
    width: 24,
    height: 24
  }
}));

// ----------------------------------------------------------------------
const MerchantLocationPopup = ({ closePopUp, onRemove, ...props }) => {
  const classes = useStyles();

  const handleClosePopup = () => {
    onRemove();
    closePopUp();
  };

  return (
    <Grid className={classes.root}>
      <Box className={classes.topBox}>
        <Box className={classes.headingSec}>
          <Typography className={classes.locationOne}>All Locations</Typography>
          <Typography className={classes.titleOne}> H&M</Typography>
        </Box>
        <Icons
          url={'closePopup'}
          className={classes.icons}
          onClick={handleClosePopup}
        />
      </Box>
      <Grid item xs={12} className={classes.merchCard}>
        {list &&
          list.length > 0 &&
          list.map((item, index) => {
            return (
              <Grid className={classes.rootOne} key={index}>
                <Grid className={classes.topBoxOne}>
                  <Grid className={classes.topBoxInner}>
                    <Box className={classes.iconOuter}>
                      <Icons url={'hmShort'} />
                    </Box>
                    <Box className={classes.infoOuter}>
                      <Typography className={classes.title}>
                        {item.name}
                      </Typography>
                      <Typography className={classes.location}>
                        {item.location}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid className={classes.addressOuter}>
                    <Typography className={classes.addressHeading}>
                      Address
                    </Typography>
                    <Typography className={classes.address}>
                      {item.address}
                    </Typography>
                  </Grid>
                  <Grid className={classes.contact}>
                    <Typography className={classes.addressHeading}>
                      Contact
                    </Typography>
                    <Typography className={classes.address}>
                      {item.email}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            );
          })}
      </Grid>
      <Grid container className={classes.contaienr}></Grid>
    </Grid>
  );
};
export default MerchantLocationPopup;
