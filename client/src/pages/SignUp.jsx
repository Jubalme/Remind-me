import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TextField, Button, Link, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import axios from 'axios';

const schema = yup.object().shape({
  first_name: yup.string().required('First Name is required'),
  last_name: yup.string().required('Last Name is required'),
  username: yup.string().required('Username is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

// eslint-disable-next-line react/prop-types
function SignUp({ onAuth }) {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const [otpDialogOpen, setOtpDialogOpen] = useState(false);
  const [otp, setOtp] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const onSubmit = async (data) => {
    try {
      console.log('Submitted data:', data);

      // Send POST request to the server to register the user
      const response = await axios.post('http://localhost:4545/api/user/signup', data);

      console.log('Server response:', response.data);

      // If registration is successful, save the email and open the OTP dialog
      if (response.status === 200) {
        setUserEmail(data.email);
        setOtpDialogOpen(true);
      }
    } catch (error) {
      console.error('Registration error:', error.response?.data || error.message);
      // Handle registration error (e.g., display error message to the user)
    }
  };

  const handleOtpChange = async (e) => {
    const enteredOtp = e.target.value;
    setOtp(enteredOtp);

    // If OTP is 6 digits long, send it to the server
    if (enteredOtp.length === 6) {
      try {
        const otpResponse = await axios.post('http://localhost:4545/api/user/verify', {
          email: userEmail,
          otp: enteredOtp,
        });

        console.log('OTP verification response:', otpResponse.data);

        if (otpResponse.status === 200) {
          setOtpDialogOpen(false);
          onAuth(true);
          navigate('/dashboard');
        }
      } catch (error) {
        console.error('OTP verification error:', error.response?.data || error.message);
        // Handle OTP verification error (e.g., display error message to the user)
      }
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white shadow-md rounded-lg">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <TextField
          fullWidth
          label="First Name"
          variant="outlined"
          {...register('first_name')}
          error={!!errors.first_name}
          helperText={errors.first_name?.message}
        />
        <TextField
          fullWidth
          label="Last Name"
          variant="outlined"
          {...register('last_name')}
          error={!!errors.last_name}
          helperText={errors.last_name?.message}
        />
        <TextField
          fullWidth
          label="Username"
          variant="outlined"
          {...register('username')}
          error={!!errors.username}
          helperText={errors.username?.message}
        />
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          {...register('email')}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          fullWidth
          label="Password"
          variant="outlined"
          type="password"
          {...register('password')}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className="mt-4"
        >
          Submit
        </Button>
      </form>
      <div className="mt-4 text-center">
        <Link href="/login" color="primary">
          Already have an account? Sign in here
        </Link>
      </div>

      {/* OTP Dialog */}
      <Dialog open={otpDialogOpen} onClose={() => setOtpDialogOpen(false)}>
        <DialogTitle>Enter OTP</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="OTP"
            variant="outlined"
            value={otp}
            onChange={handleOtpChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOtpDialogOpen(false)} color="secondary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default SignUp;
