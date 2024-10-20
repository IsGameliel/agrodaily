
const SignUp = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
        {/* Left Column: Text */}
        <div className="flex flex-col justify-center items-start">
          <h1 className="text-4xl font-bold mb-4 auth_head">Create an Account!</h1>
          <p className="text-lg text-white auth_desc">
            Join us today and start enjoying the benefits of our services.
          </p>
        </div>

        {/* Right Column: Form */}
        <div className="flex flex-col justify-center p-8 mt-16 bg-white rounded shadow-md auth_formc">

          <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>
          <form>
            <input
              type="text"
              placeholder="Full Name"
              required
              className="border border-gray-300 rounded p-3 mb-4 w-full"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="border border-gray-300 rounded p-3 mb-4 w-full"
            />
            <input
              type="password"
              placeholder="Password"
              required
              className="border border-gray-300 rounded p-3 mb-4 w-full"
            />
            <button
              type="submit"
              className="auth_btn text-white font-semibold py-3 mb-4 rounded w-full hover:bg-blue-700 transition"
            >
              Sign Up
            </button>
          </form>

          {/* Alternative Registration Options */}
          <div className="flex justify-between items-center my-4">
            <span className="h-px flex-grow bg-gray-300" />
            <span className="mx-4 text-gray-600">or</span>
            <span className="h-px flex-grow bg-gray-300" />
          </div>

          {/* Alternative Registration Buttons in a Row */}
          <div className="flex justify-center space-x-4">
            <button className="flex items-center justify-center rounded py-2 px-4">
              <img
                src="./assets/icons/facebook.png" // Path to Facebook icon
                alt="Facebook"
                className="h-10 w-10 mr-2"
              />
            </button>

            <button className="flex items-center justify-center rounded py-2 px-4">
              <img
                src="./assets/icons/github.png" // Path to GitHub icon
                alt="GitHub"
                className="h-10 w-10 mr-2"
              />
            </button>

            <button className="flex items-center justify-center rounded py-2 px-4">
              <img
                src="./assets/icons/twitter.png" // Path to X (Twitter) icon
                alt="X"
                className="h-10 w-10 mr-2"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
