import React from "react";

const ConnectUs = () => {
  return (
    <div className="w-full h-[30rem] bg-cover bg-landscape">
      <div className="container flex items-center justify-center flex-1 h-full mx-auto ">
        <div className="w-full max-w-lg">
          <div className="leading-loose">
            <form className="max-w-sm p-10 m-auto bg-opacity-25 rounded shadow-xl bg-slate-50/10">
              <p className="py-3 mb-5 text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-br from-bg-left to-bg-right">
                LOGIN
              </p>
              <div className="mb-2">
                <div className="relative ">
                  <input
                    type="text"
                    id="login-with-bg-email"
                    className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none bg-slate-50/10 focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-transparent"
                    placeholder="email"
                  />
                </div>
              </div>
              <div className="mb-2">
                <div className="relative ">
                  <input
                    type="text"
                    id="login-with-bg-password"
                    className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none bg-slate-50/10 focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-transparent"
                    placeholder="password"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-base font-semibold text-center transition duration-200 ease-in rounded-lg shadow-md bg-gradient-to-br from-green-400 to-blue-600 text-slate-50"
                >
                  Validate
                </button>
              </div>
              <div className="text-center">
                <a
                  href="https://www.wildcodeschool.com/fr-FR"
                  className="right-0 inline-block text-sm font-light align-baseline text-slate-50 text-500 hover:text-gray-800"
                >
                  Create an account
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectUs;
