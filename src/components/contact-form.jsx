import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export function ContactPageForm() {
  const navigate = useNavigate();
  const [showMessage, setShowMessage] = useState(false);

  const [values, setValues] = useState({
    name: "",
    lastName: "",
    email: "",
    title: "",
    body: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    lastName: "",
    email: "",
    title: "",
    body: "",
  });

  const [validFields, setValidFields] = useState({
    name: false,
    lastName: false,
    email: false,
    title: false,
    body: false,
  });

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Name",
      label: "Name",
      errorMessage: "Name must be more than 3 characters",
      required: true,
      pattern: /^.{3,}$/, // Minimum 3 characters
    },
    {
      id: 2,
      name: "lastName",
      type: "text",
      placeholder: "Last name",
      label: "Last name",
      errorMessage: "Last name must be more than 3 characters",
      required: true,
      pattern: /^.{3,}$/, // Minimum 3 characters
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
      errorMessage: "Please enter a valid email",
      required: true,
      pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/, // Basic email validation
    },
    {
      id: 4,
      name: "title",
      type: "text",
      placeholder: "Title",
      label: "Title",
      errorMessage: "Title must be more than 3 characters",
      required: true,
      pattern: /^.{3,}$/, // Minimum 3 characters
    },
    {
      id: 5,
      name: "body",
      type: "textarea",
      placeholder: "Start writing...",
      label: "Body",
      errorMessage: "Body must be more than 3 characters",
      required: true,
      pattern: /^.{3,}$/, // Minimum 3 characters
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });

    // Set validFields based on real-time value change (for visual feedback)
    const field = inputs.find((input) => input.name === name);
    if (field) {
      const isValid = field.pattern.test(value);
      setValidFields({ ...validFields, [name]: isValid });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const field = inputs.find((input) => input.name === name);
    if (field) {
      const isValid = field.pattern.test(value);
      setValidFields({ ...validFields, [name]: isValid });

      // Only show the error if the input is invalid and it has lost focus
      setErrors({
        ...errors,
        [name]: isValid || !value ? "" : field.errorMessage,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const allValid = Object.values(validFields).every((isValid) => isValid);
    if (allValid) {
      setShowMessage(true); // Show success message
      setTimeout(() => {
        navigate("/contact/success/");
      }, 2000);
    } else {
      console.log("Something went wrong");
    }
  };

  return (
    <form className="p-6 text-black" onSubmit={handleSubmit}>
      <h2 className="text-3xl text-black my-3 text-center"> Write to us </h2>
      {inputs.map((input) => (
        <div key={input.id} className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block text-sm font-bold mb-2"
              htmlFor={input.name}
            >
              {input.label} <span className="text-red-500">*</span>
            </label>
            {input.type === "textarea" ? (
              <textarea
                id={input.name}
                name={input.name}
                placeholder={input.placeholder}
                value={values[input.name]}
                required={input.required}
                onChange={handleChange}
                onBlur={handleBlur} // Trigger validation when user leaves the field
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
                  errors[input.name]
                    ? "border-red-500"
                    : validFields[input.name]
                    ? "border-green-500"
                    : "border-gray-200"
                } rounded py-3 px-4 mb-3 leading-tight focus:outline-blue-500 focus:bg-white`}
              />
            ) : (
              <input
                id={input.name}
                name={input.name}
                type={input.type}
                placeholder={input.placeholder}
                value={values[input.name]}
                required={input.required}
                onChange={handleChange}
                onBlur={handleBlur} // Trigger validation when user leaves the field
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
                  errors[input.name]
                    ? "border-red-500"
                    : validFields[input.name]
                    ? "border-green-500"
                    : "border-gray-200"
                } rounded py-3 px-4 mb-3 leading-tight focus:outline-blue-500 focus:bg-white`}
              />
            )}
            {errors[input.name] && (
              <p className="text-red-500 text-xs italic">
                {errors[input.name]}
              </p>
            )}
          </div>
        </div>
      ))}
      {showMessage && (
        <div className="p-4 mb-4 text-sm text-green-800 rounded bg-green-50">
          Form submitted. Please wait...
        </div>
      )}
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  );
}
