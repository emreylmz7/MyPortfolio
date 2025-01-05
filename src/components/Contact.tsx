import React, { useState, useEffect } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

interface ContactProps {
  mode: string;
}

function Contact({ mode }: ContactProps) {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const textFieldStyles = {
    '& .MuiOutlinedInput-root': {
      '& input, & textarea': {
        color: mode === 'dark' ? '#fff' : '#000',
      },
      '& fieldset': {
        borderColor: mode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
      },
      '&:hover fieldset': {
        borderColor: '#5000ca',
      },
    },
    '& .MuiInputLabel-root': {
      color: mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
    },
  };

  const sendEmail = (e: any) => {
    e.preventDefault();

    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    if (name !== '' && email !== '' && message !== '') {
      const templateParams = {
        name: name,
        email: email,
        message: message
      };

      emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID!,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      ).then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error);
          alert('Failed to send message. Please try again.');
        },
      );
      
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  useEffect(() => {
    emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY!);
  }, []);

  return (
    <div className="contact-container" id="contact">
      <div className="contact-content">
        <h1>Contact Me</h1>
        <p className="contact-description">
          You can fill out the form below to get in touch with me. I will get back to you as soon as possible.
        </p>
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            width: '100%',
            maxWidth: '600px',
            margin: '0 auto',
          }}
          onSubmit={sendEmail}
        >
          <TextField
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={nameError}
            helperText={nameError ? "Name field is required" : ""}
            fullWidth
            sx={textFieldStyles}
          />
          
          <TextField
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={emailError}
            helperText={emailError ? "Email field is required" : ""}
            fullWidth
            sx={textFieldStyles}
          />
          
          <TextField
            label="Message"
            variant="outlined"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            error={messageError}
            helperText={messageError ? "Message field is required" : ""}
            multiline
            rows={4}
            fullWidth
            sx={textFieldStyles}
          />

          <Button 
            variant="contained" 
            type="submit"
            endIcon={<SendIcon />}
            sx={{
              backgroundColor: '#5000ca',
              padding: '12px 24px',
              fontSize: '1rem',
              fontWeight: 'bold',
              borderRadius: '8px',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#3d0099',
                transform: 'translateY(-2px)',
                transition: 'all 0.2s ease-in-out',
              }
            }}
          >
            Send Message
          </Button>
        </Box>
      </div>
    </div>
  );
}

export default Contact;