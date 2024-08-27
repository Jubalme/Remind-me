
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function Login({ onAuth }) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Here you would send the data to the backend for login
    console.log(data);
    // Simulating successful login
    onAuth(true);
    Navigate("/dashboard");  

  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-xl font-semibold mb-4">Login</h2>

        <div className="mb-4">
          <label htmlFor="username" className="block mb-1">Username</label>
          <input
            id="username"
            {...register('username', { required: true })}
            className="border border-gray-300 rounded w-full p-2"
          />
          {errors.username && <span className="text-red-500 text-sm">This field is required</span>}
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block mb-1">Password</label>
          <input
            id="password"
            type="password"
            {...register('password', { required: true })}
            className="border border-gray-300 rounded w-full p-2"
          />
          {errors.password && <span className="text-red-500 text-sm">This field is required</span>}
        </div>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
