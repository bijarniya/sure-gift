import React, { useEffect, useState } from 'react';
import Page from 'src/components/Page';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import ContactsListTop from './ContactsListTop';
import CotactsListItems from './CotactsListItems';
import PaginationList from 'src/components/PaginationList';
import {
  getContact,
  countContacts,
  deleteContact
} from 'src/redux/slices/contacts';
import { useDispatch, useSelector } from 'react-redux';

// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {},
  topContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0px 0px 0px 0px',
    [theme.breakpoints.down('sm')]: {
      padding: '0px 0px 0px 0px'
    }
  },
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    //justifyContent: 'space-between',
    marginTop: 30,
    minHeight: 400,
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center'
    }
  },
  paginationSec: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

function ContactsList() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { contactList, count } = useSelector((state) => state.contacts);
  const limit = 9;
  const [search, setSearch] = useState(0);

  useEffect(() => {
    dispatch(getContact({ Page: 0, Size: limit }));
    dispatch(countContacts());
  }, [dispatch]);

  const loadData = (page, text) => {
    let where = {
      Size: limit,
      Page: page
    };
    // if user any contacts
    if (text) {
      where.Search = text;
    }
    dispatch(getContact(where));
  };

  const handleChange = (event, value) => {
    loadData(value, search);
  };

  const handleSearch = (text) => {
    loadData(0, text);
    setSearch(text);
    dispatch(countContacts({ Search: text }));
  };

  const handleDelete = (id) => {
    dispatch(deleteContact({ contactId: id }));
  };

  return (
    <Page title="Suregifts business" id="move_top" className={classes.root}>
      <Grid className={classes.topContainer}>
        <ContactsListTop handleSearch={handleSearch} />
        <Grid className={classes.listItem}>
          {contactList &&
            contactList.length > 0 &&
            contactList.map((item, index) => (
              <CotactsListItems
                item={item}
                key={index}
                index={index}
                handleDelete={handleDelete}
              />
            ))}
        </Grid>
        <Grid className={classes.paginationSec}>
          <PaginationList
            limit={limit}
            count={count}
            handleChange={handleChange}
          />
        </Grid>
      </Grid>
    </Page>
  );
}
export default ContactsList;
