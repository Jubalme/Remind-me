// Home.js


function Home() {
  return (
    <div className="bg-violet-200  h-screen">
      <div>
       <h1 className="text-center  text-6xl text-fuchsia-950">Welcome to Remind-Me!</h1>
       <h2 className="text-left text-6xl  text-fuchsia-950"></h2>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center  py-12">
      <div className="flex flex-col md:flex-row items-center justify-center py-12">
  <div className="md:w-1/2 flex justify-center">
    <img src="https://via.placeholder.com/400" alt="Website Image" className="rounded-lg shadow-lg"/>
  </div>
  <div className="md:w-1/2 mt-8 md:mt-0 md:ml-12 text-center md:text-left">
    <h1 className="text-3xl font-bold text-gray-800">Join Us Today!</h1>
    <p className="mt-4 text-gray-600">
      Discover a world of opportunities and features tailored just for you. Register now and become part of a thriving community that values growth, innovation, and collaboration. Don’t miss out on the benefits – sign up and start exploring today!
    </p>
    <a href="/register" className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-full shadow-lg hover:bg-blue-700 transition">
      Register Now
    </a>
  </div>
</div>

  <div className="md:w-1/2 mt-8 md:mt-0 md:ml-12 text-center md:text-left">
    <h1 className="text-3xl font-bold text-gray-800">Join Us Today!</h1>
    <p className="mt-4 text-gray-600">
      Discover a world of opportunities and features tailored just for you. Register now and become part of a thriving community that values growth, innovation, and collaboration. Don’t miss out on the benefits – sign up and start exploring today!
    </p>
    <a href="/register" className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-full shadow-lg hover:bg-blue-700 transition">
      Register Now
    </a>
  </div>
</div>

    </div>
  )
}

export default Home;


