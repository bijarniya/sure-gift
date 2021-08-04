import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Card, Typography } from '@material-ui/core';
import Icons from 'src/components/Icons';
import { Link } from 'react-router-dom';
// ----------------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    padding: '30px 20px 30px 20px',
    background: theme.palette.background.secondary,
    borderRadius: 25
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  infoOuter: {
    marginLeft: 15
  },
  count: {
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontWeight: 400,
    fontSize: 20,
    color: theme.palette.text.primary,
    padding: 0
  },
  countHeading: {
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontWeight: 400,
    fontSize: 14,
    color: theme.palette.text.gray,
    padding: 0
  },
  link: {
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: theme.palette.text.primary,
    textDecoration: 'none'
  }
}));

// ----------------------------------------------------------------------

InfoWidget.propTypes = {
  className: PropTypes.string
};

function InfoWidget({ item, className, ...other }) {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root)}>
      {item && item.url ? (
        <Link to={item.url} className={classes.link}>
          <Box className={classes.mainContainer}>
            {item && item.icon && (
              <Icons url={item.icon} height={50} width={50} />
            )}
            {item && (item.total || item.title) && (
              <Box className={classes.infoOuter}>
                <Typography className={classes.count}>{item.title}</Typography>
                <Typography className={classes.countHeading}>
                  {item.total}
                </Typography>
              </Box>
            )}
          </Box>
        </Link>
      ) : (
        <Box className={classes.mainContainer}>
          {item && item.icon && (
            <Icons url={item.icon} height={50} width={50} />
          )}
          {item && (item.total || item.title) && (
            <Box className={classes.infoOuter}>
              <Typography className={classes.count}>{item.title}</Typography>
              <Typography className={classes.countHeading}>
                {item.total}
              </Typography>
            </Box>
          )}
        </Box>
      )}
    </Card>
  );
}

export default InfoWidget;
