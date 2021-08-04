import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Typography, IconButton } from '@material-ui/core';
import Icons from 'src/components/Icons';
import { useDialogBox } from 'src/components/popup/common/useDialogBox';
import OpenDialog from 'src/components/popup/common/OpenDialog';
import clsx from 'clsx';
import { useHistory } from 'react-router-dom';
import { PATH_ACCOUNT } from 'src/routes/paths';

// ---------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 234,
    width: 295,
    marginBottom: 30,
    padding: '25px 0px 30px 25px',
    background:
      'linear-gradient(191.34deg, rgba(255, 254, 251, 0.025) 8.56%, rgba(255, 254, 251, 0) 85.73%)',
    backdropFilter: 'blur(64.0164px)',
    borderRadius: 25,
    border: `1px solid ${theme.palette.border.grayWhite}`,
    [theme.breakpoints.down('md')]: {}
  },
  contentBox: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginTop: 20,
    paddingRight: 25
  },
  heading: {
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: theme.palette.text.gray,
    fontSize: 12,
    fontWeight: 400,
    [theme.breakpoints.down('sm')]: {}
  },
  info: {
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: theme.palette.text.primary,
    fontSize: 14,
    fontWeight: 400,
    marginTop: 6,
    [theme.breakpoints.down('sm')]: {}
  },
  topContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  name: {
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: theme.palette.text.primary,
    fontSize: 18,
    fontWeight: 400,
    marginLeft: 15,
    width: '55%',
    [theme.breakpoints.down('sm')]: {}
  },
  iconBox: {
    width: '20%',
    cursor: 'pointer'
  },
  shortName: {
    background: `conic-gradient(${theme.palette.background.conic})`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textTransform: 'uppercase',
    borderRadius: 26,
    width: 50,
    height: 50,
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: theme.palette.background.main,
    fontSize: 16,
    fontWeight: 700
  },
  addNewEventSec: {
    width: '555px',
    minHeight: '349px',
    background: 'rgba(0, 0, 0, 0.8)',
    borderRadius: '35px',
    border: `1px ${theme.palette.text.primary} solid`
  },
  actionOuter: {
    display: 'flex',
    alignItems: 'center'
  },
  actionInner: {
    display: 'flex',
    width: '30%',
    justifyContent: 'flex-end'
  },
  edit: {
    cursor: 'pointer'
  },
  delete: {
    marginLeft: 14,
    cursor: 'pointer'
  },
  phone: {
    width: '70%'
  }
}));

// ----------------------------------------------------------------------
function CotactsListItems({ item, index, handleDelete }) {
  const classes = useStyles();
  const history = useHistory();

  // popup start
  const { dialogBoxName, openDialogBox, closeDialogBox } = useDialogBox();
  const [selectedData, setData] = useState();
  // popup list data
  const popupList = [
    {
      title: 'Event Notification',
      Description: 'Event Notification',
      popup: 'eventNotification'
    }
  ];

  // set popup data
  const setSelectedData = (popupName, row) => {
    const filterData = popupList.filter((item) => {
      return item.popup === popupName || item.title === popupName;
    });
    if (filterData && filterData.length) {
      filterData[0].merchantData = row;
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
    openPopup('eventNotification');
  };

  // Redirect
  const handleRedirect = (id) => {
    history.push(`${PATH_ACCOUNT.contacts}?id=${id}`);
  };

  return (
    <Grid
      className={classes.root}
      style={{ marginRight: Math.round((index + 1) % 3) === 0 ? 0 : 25 }}
    >
      <Box className={classes.topContainer}>
        <Box className={classes.shortName}>
          {item && item.firstName.substr(0, 1)}
          {item && item.lastName.substr(0, 1)}
        </Box>
        <Typography className={classes.name}>
          {item && item.firstName} {item && item.lastName}
        </Typography>
        <Box className={classes.iconBox} onClick={handleButton}>
          <IconButton color="inherit">
            <Icons url={'notificationIcon'} />
          </IconButton>
        </Box>
      </Box>
      <Box className={classes.contentBox}>
        <Typography className={classes.heading}>Address</Typography>
        <Typography className={classes.info}>{item && item.address}</Typography>
      </Box>

      <Box className={classes.contentBox}>
        <Typography className={classes.heading}>Contact</Typography>
        <Typography className={classes.info}>{item && item.email}</Typography>
      </Box>

      <Box className={classes.contentBox}>
        <Typography className={classes.heading}>phone</Typography>
        <Box className={classes.actionOuter}>
          <Typography className={clsx(classes.info, classes.phone)}>
            {item && item.phone}
          </Typography>
          <Box className={classes.actionInner}>
            <Icons
              url={'editContacts'}
              className={classes.edit}
              onClick={() => handleRedirect(item.id)}
            />
            <Icons
              url={'delete'}
              className={classes.delete}
              onClick={() => handleDelete(item.id)}
            />
          </Box>
        </Box>
      </Box>
      {!!dialogBoxName && (
        <OpenDialog
          componentName={dialogBoxName}
          open={true}
          closeBox={closeDialogBox}
          data={selectedData}
          onRemove={() => confirmRemove()}
          containerStyle={classes.addNewEventSec}
          center={true}
        />
      )}
    </Grid>
  );
}

export default CotactsListItems;
