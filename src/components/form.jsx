import { useState } from "react";

export function FormInput(props) {
  const { label,  onChange, ...inputProps } = props;

  return (
    <div className="flex flex-col w-full">
      <label> {label} </label>
      <input
        {...inputProps}
        onChange={onChange}
      />
    
    </div>
  );
}

// function ContactForm() {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     subject: "",
//     email: "",
//     body: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [validFields, setValidFields] = useState({}); // Tracks valid inputs

//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     if (formData.fullName.length < 3) {
//       newErrors.fullName = "Full name must be at least 3 characters.";
//     }
//     if (formData.subject.length < 3) {
//       newErrors.subject = "Subject must be at least 3 characters.";
//     }
//     if (!validateEmail(formData.email)) {
//       newErrors.email = "Email must be a valid email address.";
//     }
//     if (formData.body.length < 3) {
//       newErrors.body = "Body must be at least 3 characters.";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     // Update form data
//     setFormData({ ...formData, [name]: value });

//     // Clear the error for the specific field and provide success feedback
//     setErrors((prevErrors) => {
//       const newErrors = { ...prevErrors };
//       if (name === "email" && validateEmail(value)) {
//         delete newErrors[name];
//         setValidFields((prevValid) => ({ ...prevValid, [name]: true }));
//       } else if (value.length >= 3) {
//         delete newErrors[name];
//         setValidFields((prevValid) => ({ ...prevValid, [name]: true }));
//       } else {
//         setValidFields((prevValid) => ({ ...prevValid, [name]: false }));
//       }
//       return newErrors;
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (validateForm()) {
//       console.log("Form submitted:", formData);
//       // Process form submission (e.g., send data to an API)
//     } else {
//       console.log("Form has errors:", errors);
//     }
//   };

//   return (
//     <form className="w-full max-w-lg" onSubmit={handleSubmit}>
//       {/* Full Name */}
//       <div className="flex flex-wrap -mx-3 mb-6">
//         <div className="w-full px-3">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="fullName"
//           >
//             Full Name
//           </label>
//           <input
//             className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
//               errors.fullName
//                 ? "border-red-500"
//                 : validFields.fullName
//                 ? "border-green-500"
//                 : "border-gray-200"
//             } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
//             id="fullName"
//             name="fullName"
//             type="text"
//             placeholder="Enter your full name"
//             value={formData.fullName}
//             onChange={handleChange}
//           />
//           {errors.fullName && (
//             <p className="text-red-500 text-xs italic">{errors.fullName}</p>
//           )}
//           {validFields.fullName && (
//             <p className="text-green-500 text-xs italic">Looks good!</p>
//           )}
//         </div>
//       </div>

//       {/* Subject */}
//       <div className="flex flex-wrap -mx-3 mb-6">
//         <div className="w-full px-3">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="subject"
//           >
//             Subject
//           </label>
//           <input
//             className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
//               errors.subject
//                 ? "border-red-500"
//                 : validFields.subject
//                 ? "border-green-500"
//                 : "border-gray-200"
//             } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
//             id="subject"
//             name="subject"
//             type="text"
//             placeholder="Enter the subject"
//             value={formData.subject}
//             onChange={handleChange}
//           />
//           {errors.subject && (
//             <p className="text-red-500 text-xs italic">{errors.subject}</p>
//           )}
//           {validFields.subject && (
//             <p className="text-green-500 text-xs italic">Looks good!</p>
//           )}
//         </div>
//       </div>

//       {/* Email */}
//       <div className="flex flex-wrap -mx-3 mb-6">
//         <div className="w-full px-3">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="email"
//           >
//             Email
//           </label>
//           <input
//             className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
//               errors.email
//                 ? "border-red-500"
//                 : validFields.email
//                 ? "border-green-500"
//                 : "border-gray-200"
//             } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
//             id="email"
//             name="email"
//             type="email"
//             placeholder="Enter your email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//           {errors.email && (
//             <p className="text-red-500 text-xs italic">{errors.email}</p>
//           )}
//           {validFields.email && (
//             <p className="text-green-500 text-xs italic">Looks good!</p>
//           )}
//         </div>
//       </div>

//       {/* Body */}
//       <div className="flex flex-wrap -mx-3 mb-6">
//         <div className="w-full px-3">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="body"
//           >
//             Body
//           </label>
//           <textarea
//             className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
//               errors.body
//                 ? "border-red-500"
//                 : validFields.body
//                 ? "border-green-500"
//                 : "border-gray-200"
//             } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
//             id="body"
//             name="body"
//             placeholder="Enter your message"
//             value={formData.body}
//             onChange={handleChange}
//           />
//           {errors.body && (
//             <p className="text-red-500 text-xs italic">{errors.body}</p>
//           )}
//           {validFields.body && (
//             <p className="text-green-500 text-xs italic">Looks good!</p>
//           )}
//         </div>
//       </div>

//       <button
//         type="submit"
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//       >
//         Submit
//       </button>
//     </form>
//   );
// }

// export default ContactForm;
