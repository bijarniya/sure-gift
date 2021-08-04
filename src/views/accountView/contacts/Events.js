import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Typography } from '@material-ui/core';
import { useDialogBox } from 'src/components/popup/common/useDialogBox';
import OpenDialog from 'src/components/popup/common/OpenDialog';

// ---------------------------------------
const itemList = [
  {
    id: 1,
    title: 'Birthday Celebration',
    date: '11 am, Dec 28th 2020 ',
    location: 'Lagos'
  },
  {
    id: 2,
    title: 'Birthday Celebration',
    date: '11 am, Dec 28th 2020 ',
    location: 'Lagos'
  },
  {
    id: 3,
    title: 'Birthday Celebration',
    date: '11 am, Dec 28th 2020 ',
    location: 'Lagos'
  },
  {
    id: 4,
    title: 'Birthday Celebration',
    date: '11 am, Dec 28th 2020 ',
    location: 'Lagos'
  }
];
// --------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0px 25px',
    [theme.breakpoints.down('sm')]: {
      padding: '0px 0px'
    }
  },
  topContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 60
  },
  heading: {
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: theme.palette.text.primary,
    fontSize: 24,
    fontWeight: 700,
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      fontSize: 16
    }
  },
  createNew: {
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: theme.palette.text.primary,
    fontSize: 16,
    fontWeight: 400,
    width: '50%',
    textAlign: 'right',
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      fontSize: 14
    }
  },
  listContainer: {
    marginTop: 10
  },
  itemContainer: {
    background: theme.palette.background.main,
    marginTop: 20,
    borderRadius: 30,
    padding: '25px 20px 25px 30px',
    display: 'flex',
    flexDirection: 'column'
  },
  eventTitle: {
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: theme.palette.text.primary,
    fontSize: 20,
    fontWeight: 400,
    [theme.breakpoints.down('sm')]: {
      fontSize: 16
    }
  },
  locationSec: {
    display: 'flex',
    flexDirection: 'row',
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: theme.palette.text.gray,
    marginTop: 10,
    fontSize: 16,
    fontWeight: 400,
    [theme.breakpoints.down('sm')]: {
      fontSize: 12
    }
  },
  dotSec: {
    padding: '0px 15px'
  },
  addNewEventSec: {
    width: '550px',
    minHeight: '300px',
    background: 'rgba(0, 0, 0, 0.8)',
    borderRadius: '35px',
    border: `1px ${theme.palette.text.primary} solid`
  }
}));

function Events() {
  const classes = useStyles();

  // popup start
  const { dialogBoxName, openDialogBox, closeDialogBox } = useDialogBox();
  const [selectedData, setData] = useState();
  // popup list data
  const popupList = [
    {
      title: 'Add Event',
      Description: 'Add Event',
      popup: 'addNewEvent'
    }
  ];

  // set popup data
  const setSelectedData = (popupName, row) => {
    const filterData = popupList.filter((item) => {
      return item.popup === popupName || item.title === popupName;
    });
    if (filterData && filterData.length) {
      filterData[0].eventData = row;
      setData(filterData[0]);
    }
  };
  // set dynamic popup name
  const openPopup = (popupName, row) => {
    openDialogBox(popupName);
    setSelectedData(popupName, row);
  };

  const confirmRemove = () => {};
  // popup end

  const handleButton = () => {
    openPopup('addNewEvent');
  };

  return (
    <Grid container>
      <Grid item xs={12} className={classes.root}>
        <Box className={classes.topContainer}>
          <Typography className={classes.heading}>Events</Typography>
          <Typography className={classes.createNew} onClick={handleButton}>
            Create new event
          </Typography>
        </Box>
        <Box className={classes.listContainer}>
          {itemList &&
            itemList.length > 0 &&
            itemList.map((item, index) => (
              <Box className={classes.itemContainer} key={index}>
                <Typography className={classes.eventTitle}>
                  {item.title}
                </Typography>
                <Box className={classes.locationSec}>
                  <Typography>{item.date}</Typography>
                  <Typography className={classes.dotSec}>.</Typography>
                  <Typography>{item.location}</Typography>
                </Box>
              </Box>
            ))}
        </Box>
        {!!dialogBoxName && (
          <OpenDialog
            componentName={dialogBoxName}
            open={true}
            closeBox={closeDialogBox}
            data={selectedData}
            onRemove={confirmRemove}
            containerStyle={classes.addNewEventSec}
            center={true}
          />
        )}
      </Grid>
    </Grid>
  );
}
export default Events;
