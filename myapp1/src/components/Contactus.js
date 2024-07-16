import React, { useEffect, useState } from 'react';
import { ThemeContext } from '../Theme';
import { useContext } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ApartmentIcon from '@mui/icons-material/Apartment';
import MailIcon from '@mui/icons-material/Mail';
import { Route,Routes,NavLink } from 'react-router-dom';
import Info from './Info.js';
import { useNavigate } from 'react-router-dom';


const Container = styled.div`
  margin:25px;
  display: flex;
  flex-direction: column;
  gap:20px;
  flex-wrap:wrap;
  padding: 25px;
  background-color: ${props => props.theme.secondary};
  border-radius:10px;
  width:calc(100vw-50px);
  min-height:80vh;
  font-size:20px;
  text-align:center;
`;

const Form = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [errors, setErrors] = useState({ name: '', email: '', phone: '' });
  const [valid,setvalid] =useState("");
  const navigate =useNavigate();
  const [animate,setanimate]=useState(false)
  
  useEffect(() => {
    setanimate(true);
    console.log("hello");
  });


  const validate = (name, value) => {
    
    const newError = {}; 
    if (name === 'name') {
      const regex = /^[a-zA-Z\s]*$/;
      if (!value) {
        newError.name = 'Name required';
      } else if (!regex.test(value)) {
        newError.name = 'Enter the correct name';
      } else if (value.length > 20) {
        newError.name = 'Length must be less than 20';
      } else {
        newError.name = '';
      }
    }

    if (name === 'email') {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value) {
        newError.email = 'Email required';
      } else if (!regex.test(value)) {
        newError.email = 'Enter the correct email';
      } else {
        newError.email = '';
      }
    }

    if (name === 'phone') {
      const regex = /^[0-9]+$/;
      if (!value) {
        newError.phone = 'Phone number required';
      } else if (!regex.test(value)) {
        newError.phone = 'Phone number must contain only digits';
      } else if (value.length !== 10) {
        newError.phone = 'Phone number must be exactly 10 digits';
      } else {
        newError.phone = '';
      }
    }
    

    setErrors({ ...errors, [name]: newError[name] });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    validate(name, value);
    setValues({ ...values, [name]: value }); 
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const allValuesProvided = Object.values(values).every(value => value.trim() !== '');
    const noErrors = Object.values(errors).every(error => !error);
  
    if (allValuesProvided && noErrors) {
      setvalid("Thanks for contacting us !!");
      const data=JSON.stringify(values);
      localStorage.setItem('user',data);
      setTimeout(()=>{navigate('/')},4000);
      }
      
     else {
      setvalid("Please enter correct details before submit");
    }}
    
  
  return (
    
      <form onSubmit={handleSubmit}>
        <div className='form-container1'>
        <h2 className='formhead'>Enter your details </h2>
        <div className='form-i'>
          <input type='text' name='name' required value={values.name} onChange={handleChange} placeholder='Enter you name'/>
          {errors.name && <div className={`error ${animate ? 'fade-in' : ''}`}>{errors.name}</div>
        }
        </div>
        <div className='form-i'>
          <input type='email' name='email' required value={values.email} onChange={handleChange} placeholder='Enter you email'/>
          {errors.email && <div className={`error ${animate ? 'fade-in' : ''}`}>{errors.email}</div>}
        </div>
        <div className='form-i'>
          <input type='tel' name='phone' required value={values.phone} onChange={handleChange}placeholder='Enter you phone number' />
          {errors.phone && <div className={`error ${animate ? 'fade-in' : ''}`}>{errors.phone}</div>}
        </div>
          <button className='submit-btn'type='submit' onClick={handleSubmit}>Submit</button>
          <div className='valid'>{valid}</div>
        </div>
      </form>
    
  )
};

const Contact = () => {
  const { currentTheme } = useContext(ThemeContext);
  return (
    <ThemeProvider theme={currentTheme}>
      <Container>
      <h1>Contact us</h1>
      <div className='subcontainer1'>
        <div className='contact'>
          <span className='contact-i'><h4><MailIcon/></h4><h4>Email address : agromart2001@gmail.Com</h4></span>
          <span className='contact-i'><h4><LocalPhoneIcon/></h4><h4>Hotline : agromart2001@gmail.Com</h4></span>
          <span className='contact-i'><h4><ApartmentIcon/></h4><h4>Company address : agromart2001@gmail.Com</h4></span>
          <span style={{marginLeft:"25px"}}>For customer support you can contact</span>
          <div className='person'>
          <NavLink to="john" className="link">John</NavLink>
          <NavLink to="robert"className="link">Robert</NavLink>
          <NavLink to="jenny"className="link">Jenny</NavLink>
          </div>
          <Routes>
            <Route path=":id" element={<Info />}/>
          </Routes>
        </div>
        <Form />
      </div>
    </Container>
    </ThemeProvider>
  );
};

export default Contact;
