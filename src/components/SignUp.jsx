// import React from "react";
// import { useForm } from "react-hook-form";
// import { useDispatch } from "react-redux";
// import { loginSuccess } from "../redux/authSlice";
// import { useNavigate } from "react-router-dom";

// const Signup = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     watch,
//   } = useForm();

//   const onSubmit = (data) => {
//     dispatch(loginSuccess(data));
//     navigate("/login");
//   };

//   const password = watch("password");

//   return (
//     <div className="flex flex-col items-center justify-between min-h-screen bg-gray-100">
//       {/* Top Section */}
//       <div className="flex justify-between w-full px-8 py-4">
//         <img
//           src="https://via.placeholder.com/100x40?text=LOGO"
//           alt="Logo"
//           className="w-20 h-auto"
//         />
//         <a
//           href="/help"
//           className="text-sm text-gray-400 font-medium hover:underline"
//         >
//           Need Help?
//         </a>
//       </div>

//       {/* Login Form Section */}
//       <div className="w-full max-w-sm p-6 space-y-6 bg-white rounded-md shadow-md">
//         <h2 className="text-2xl font-bold text-center text-gray-800">
//           Create Account
//         </h2>
//         <span className="text-center relative left-[20%] sm:left-[18%] mt-2 text-sm">
//           Join us to discover amazing opportunities
//         </span>
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//           <div>
//             <label
//               htmlFor="username"
//               className="block text-sm font-medium text-gray-600"
//             >
//               Full Name
//             </label>
//             <input
//               type="text"
//               id="username"
//               {...register("fullName", { required: "Full name is required" })}
//               className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
//               placeholder="Enter your full name"
//             />
//             {errors.fullName && (
//               <p className="text-red-500 text-sm">{errors.fullName.message}</p>
//             )}
//           </div>

//           {/* Email */}
//           <div>
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-gray-600"
//             >
//               Email address
//             </label>
//             <input
//               type="email"
//               id="email"
//               {...register("email", {
//                 required: "Email is required",
//                 pattern: {
//                   value: /^[^@]+@[^@]+\.[^@]+$/,
//                   message: "Invalid email format",
//                 },
//               })}
//               className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
//               placeholder="Enter your email"
//             />
//             {errors.email && (
//               <p className="text-red-500 text-sm">{errors.email.message}</p>
//             )}
//           </div>

//           {/* Password */}
//           <div>
//             <label
//               htmlFor="password"
//               className="block text-sm font-medium text-gray-600"
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               {...register("password", { required: "Password is required" })}
//               className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
//               placeholder="Create a password"
//             />
//             {errors.password && (
//               <p className="text-red-500 text-sm">{errors.password.message}</p>
//             )}
//           </div>

//           {/* Confirm Password */}
//           <div>
//             <label
//               htmlFor="confirm-password"
//               className="block text-sm font-medium text-gray-600"
//             >
//               Confirm Password
//             </label>
//             <input
//               type="password"
//               id="confirm-password"
//               {...register("confirmPassword", {
//                 required: "Please confirm your password",
//                 validate: (value) =>
//                   value === password || "Passwords do not match",
//               })}
//               className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
//               placeholder="Confirm your password"
//             />
//             {errors.confirmPassword && (
//               <p className="text-red-500 text-sm">
//                 {errors.confirmPassword.message}
//               </p>
//             )}
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full py-2 text-white bg-blue-900 rounded-lg hover:bg-blue-700"
//           >
//             Create Account
//           </button>
//         </form>

//         {/* Divider Section */}
//         <div className="relative flex items-center my-4">
//           <div className="flex-grow border-t border-gray-300"></div>
//           <span className="mx-3 text-sm text-gray-500 font-semibold">
//             Or Continue with
//           </span>
//           <div className="flex-grow border-t border-gray-300"></div>
//         </div>

//         {/* Google and Microsoft Buttons */}
//         <div className="flex items-center justify-between gap-6">
//           <button
//             type="button"
//             className="flex items-center justify-start w-[50%] py-2 text-sm font-semibold text-gray-600 border rounded-lg hover:bg-gray-100"
//           >
//             <img
//               src="https://img.icons8.com/ios-filled/24/808080/google-logo.png"
//               alt="Google Icon"
//               className="w-4 h-4 mr-7 ml-2"
//             />{" "}
//             Google
//           </button>
//           <button
//             type="button"
//             className="flex items-center justify-start w-[50%] py-2 text-sm font-semibold text-gray-600 border rounded-lg hover:bg-gray-100"
//           >
//             <img
//               src="https://img.icons8.com/ios-filled/24/808080/microsoft.png"
//               alt="Microsoft Icon"
//               className="w-4 h-4 mr-7 ml-2"
//             />{" "}
//             Microsoft
//           </button>
//         </div>

//         {/* Sign In Link */}
//         <p className="text-sm text-center text-gray-600">
//           Don’t have an account?{" "}
//           <a
//             href="/signup"
//             className="text-blue-700 font-medium hover:underline"
//             onClick={(e) => {
//               e.preventDefault();
//               navigate("/login");
//             }}
//           >
//             Sign in
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;
