export const baseApiUrl = `http://dev-web-api.suregifts.com.ng/api/`;
export const apiList = {
  login: `${baseApiUrl}Account/Login`,
  register: `${baseApiUrl}Account/Register`,
  getProfile: `${baseApiUrl}Account/GetProfile`,
  updateProfile: `${baseApiUrl}Account/UpdateProfile`,
  changePassword: `${baseApiUrl}Account/ChangePassword`,
  sendVerifyEmailCode: `${baseApiUrl}Account/SendVerifyEmailCode`,
  updateProfileImage: `${baseApiUrl}Account/UpdateProfileImage`,
  addContact: `${baseApiUrl}Contacts/AddContact`,
  getContacts: `${baseApiUrl}Contacts/GetContacts`,
  countContacts: `${baseApiUrl}Contacts/CountContacts`,
  deleteContact: `${baseApiUrl}Contacts/DeleteContact`,
  editContact: `${baseApiUrl}Contacts/EditContact`,
  addEvent: `${baseApiUrl}Contacts/AddEvent`,
  editEvent: `${baseApiUrl}Contacts/EditEvent`,
  deleteEvent: `${baseApiUrl}Contacts/DeleteEvent`,
  getEventRepeatTypes: `${baseApiUrl}Contacts/GetEventRepeatTypes`,
  getEventReminderTypes: `${baseApiUrl}Contacts/GetEventReminderTypes`,
  sendEnquiry: `${baseApiUrl}Enquires/SendEnquiry`,
  submitApplication: `${baseApiUrl}Merchant/SubmitApplication`,
  getCountries: `${baseApiUrl}Orders/GetCountries`,
  getCategories: `${baseApiUrl}Orders/GetCategories`,
  getGiftCards: `${baseApiUrl}Orders/GetGiftCards`,
  countGiftCards: `${baseApiUrl}Orders/CountGiftCards`,
  getGiftCardInfos: `${baseApiUrl}Orders/GetGiftCardInfos`
};

export const headers = {
  applicationJson: {
    'Content-Type': 'application/json'
  },
  fileType: {
    'Content-Type': 'multipart/form-data'
  }
};
