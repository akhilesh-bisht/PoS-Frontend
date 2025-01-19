// import React from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";

// const Login = () => {
//   const navigate = useNavigate();
//   const { user } = useSelector((state) => state.auth);
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     if (user?.email === data.email && user?.password === data.password) {
//       alert("Login successful!");
//       navigate("/");
//     } else {
//       alert("Invalid credentials!");
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-between min-h-screen bg-gray-100">
//       {/* Top Section */}
//       <div className="flex justify-between w-full px-8 py-4">
//         {/* Logo */}
//         <img
//           src="https://via.placeholder.com/100x40?text=LOGO"
//           alt="Logo"
//           className="w-20 h-auto"
//         />

//         <a
//           href="/help"
//           className="text-sm text-gray-500 font-medium hover:underline"
//         >
//           Need Help?
//         </a>
//       </div>
//       {/* Login Form Section */}
//       <div className="w-full max-w-sm p-8 space-y-6 bg-white rounded-md shadow-md">
//         <h2 className="text-2xl font-bold text-center text-gray-800">
//           Welcome back
//         </h2>
//         <span className="text-center relative left-[20%] sm:left-[18%] mt-2 text-sm">
//           Please enter your details to sign in
//         </span>
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//           <div>
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-gray-600"
//             >
//               Email address
//             </label>
//             <input
//               {...register("email", { required: "Email is required" })}
//               type="email"
//               id="email"
//               value={user.email}
//               className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
//               placeholder="Enter your email"
//             />
//             {errors.email && (
//               <p className="text-red-600 text-sm">{errors.email.message}</p>
//             )}
//           </div>
//           <div>
//             <label
//               htmlFor="password"
//               className="block text-sm font-medium text-gray-600"
//             >
//               Password
//             </label>
//             <input
//               {...register("password", { required: "Password is required" })}
//               type="password"
//               value={user.password}
//               id="password"
//               className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
//               placeholder="Enter your password"
//             />
//             {errors.password && (
//               <p className="text-red-600 text-sm">{errors.password.message}</p>
//             )}
//             <div className="flex items-center justify-between mt-4">
//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   id="rememberMe"
//                   className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring focus:ring-blue-200"
//                 />
//                 <label
//                   htmlFor="rememberMe"
//                   className="ml-2 text-sm text-gray-600 font-semibold"
//                 >
//                   Remember me
//                 </label>
//               </div>
//               <a
//                 href="/forgot-password"
//                 className="text-sm text-blue-900 font-semibold hover:underline"
//               >
//                 Forgot your Password?
//               </a>
//             </div>
//           </div>
//           <button
//             type="submit"
//             className="w-full py-2 text-white bg-blue-900 rounded-lg hover:bg-blue-700"
//           >
//             Sign in
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

//         {/* Social Login Buttons */}
//         <div className="flex items-center justify-between gap-6">
//           <button
//             type="button"
//             className="flex items-center justify-start w-[50%] py-2 text-sm font-semibold text-gray-600 border rounded-lg hover:bg-gray-100"
//           >
//             <img
//               src="https://img.icons8.com/ios-filled/24/808080/google-logo.png"
//               alt="Google Icon"
//               className="w-4 h-4 mr-7 ml-2"
//             />
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
//             />
//             Microsoft
//           </button>
//         </div>

//         <p className="text-sm text-center text-gray-600">
//           Don’t have an account?{" "}
//           <a
//             href="/signup"
//             className="text-blue-700 font-medium hover:underline"
//           >
//             Sign up
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;
