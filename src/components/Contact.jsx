import React from 'react';
// import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Header from './Header';
import ContactForm from './projects/ContactForm';
// import { FormControl } from '@mui/material';
// const styles = {
//   introTextContainer: {
//     margin: 10,
//     fontSize: 24,
//     fontWeight: 500,
//     flexDirection: 'column',
//     whiteSpace: 'pre-wrap',
//     textAlign: 'left',
//   },
//   bodyTextContainer: {
//     margin: 10,
//     flexDirection: 'column',
//     whiteSpace: 'pre-wrap',
//     textAlign: 'left',
//     fontSize: '1.2em',
//     fontWeight: 100,
//   },
//   introImageContainer: {
//     margin: 10,
//     justifyContent: 'right',
//     alignItems: 'center',
//     display: 'flex',
//   },
// };

function ContactMe(props) {
  const { header } = props;
  return (
    <>
      <Header title={header} />
      <ContactForm />
      {/* <FormControl>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
      </FormControl> */}
    </>
  );
}

ContactMe.propTypes = {
  header: PropTypes.string.isRequired,
};

export default ContactMe;
