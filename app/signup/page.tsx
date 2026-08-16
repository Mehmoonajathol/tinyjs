export default function Signup() {
  return (
    <div className="bg-[#081c36] text-white min-h-screen">

      <section className="flex justify-center items-center min-h-[85vh] px-5 py-12">

        <div className="w-full max-w-md bg-white text-black p-10 rounded-2xl shadow-2xl">

          <h1 className="text-center text-3xl font-bold text-[#0056b3] mb-3">
            Create Your Account
          </h1>

          <p className="text-center text-gray-600 mb-8">
            Start shortening links in just a few seconds.
          </p>

          <form>

            {/* Full Name */}

            <label className="block font-semibold mb-2">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full p-4 mb-5 border border-gray-300 rounded-lg outline-none focus:border-[#19b6ff]"
              required
            />

            {/* Email */}

            <label className="block font-semibold mb-2">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-4 mb-5 border border-gray-300 rounded-lg outline-none focus:border-[#19b6ff]"
              required
            />

            {/* Password */}

            <label className="block font-semibold mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Create a password"
              className="w-full p-4 mb-5 border border-gray-300 rounded-lg outline-none focus:border-[#19b6ff]"
              required
            />

            {/* Confirm Password */}

            <label className="block font-semibold mb-2">
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full p-4 mb-6 border border-gray-300 rounded-lg outline-none focus:border-[#19b6ff]"
              required
            />

            {/* Create Account */}

            <button
              type="submit"
              className="w-full py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg text-lg transition"
            >
              Create Account
            </button>

          </form>

          {/* Divider */}

          <div className="text-center my-6 text-gray-500">
            <span>OR</span>
          </div>

          {/* Google Signup */}

          <button
            type="button"
            className="w-full py-4 border border-gray-300 rounded-lg text-base hover:bg-gray-100 transition text-black"
          >
            <span className="text-red-500 mr-3">G</span>
            Continue with Google
          </button>

          {/* Login Link */}

          <div className="text-center mt-6">

            <p className="text-gray-600">
              Already have an account?{" "}

              <a
                href="/login"
                className="text-[#0056b3] font-semibold hover:text-[#19b6ff]"
              >
                Log In
              </a>
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}