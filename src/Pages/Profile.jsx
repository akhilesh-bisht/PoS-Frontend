import React from "react";

const ProfileSettings = () => {
  return (
    <section className="min-h-screen flex  justify-center bg-gray-900 py-10 px-4">
      <div className=" w-full p-6 rounded-lg border border-neutral-700/30">
        <h3 className="text-xl font-semibold text-white mb-6">
          Profile Settings
        </h3>

        <div className="space-y-6">
          {/* Profile Picture */}
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="w-20 h-20 rounded-full bg-neutral-700 flex items-center justify-center text-neutral-400">
              <svg
                className=" w-6 h-6 sm:w-12 sm:h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                ></path>
              </svg>
            </div>
            <div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200">
                Change Photo
              </button>
            </div>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-2">
                First Name
              </label>
              <input
                type="text"
                className="w-full bg-neutral-700 border border-neutral-600 rounded-md px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-2">
                Last Name
              </label>
              <input
                type="text"
                className="w-full bg-neutral-700 border border-neutral-600 rounded-md px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full bg-neutral-700 border border-neutral-600 rounded-md px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-2">
                Phone
              </label>
              <input
                type="tel"
                className="w-full bg-neutral-700 border border-neutral-600 rounded-md px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-300 mb-2">
              Business Name
            </label>
            <input
              type="text"
              className="w-full bg-neutral-700 border border-neutral-600 rounded-md px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-300 mb-2">
              Address
            </label>
            <textarea
              rows="3"
              className="w-full bg-neutral-700 border border-neutral-600 rounded-md px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            ></textarea>
          </div>

          <div className="flex flex-col sm:flex-row justify-end space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="px-6 py-2 border border-neutral-600 text-neutral-300 rounded-md hover:bg-neutral-700 transition-colors duration-200">
              Cancel
            </button>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSettings;
