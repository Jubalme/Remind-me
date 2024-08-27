import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TextField, Button, Link } from '@mui/material';



const schema = yup.object().shape({
  firstname: yup.string().required('First Name is required'),
  lastname: yup.string().required('Last Name is required'),
  username: yup.string().required('Username is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

 // eslint-disable-next-line react/prop-types
 function SignUp({onAuth}) {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });



  const onSubmit = (data) => {
    // Simulate successful signup
    console.log(data);
    onAuth(true);
    navigate("/dashboard");  
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white shadow-md rounded-lg">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <TextField
          fullWidth
          label="First Name"
          variant="outlined"
          {...register('firstname')}
          error={!!errors.firstname}
          helperText={errors.firstname?.message}
        />
        <TextField
          fullWidth
          label="Last Name"
          variant="outlined"
          {...register('lastname')}
          error={!!errors.lastname}
          helperText={errors.lastname?.message}
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
    </div>
  );
}
export default SignUp;