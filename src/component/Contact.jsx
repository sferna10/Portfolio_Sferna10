// Import necessary libraries
import React from "react";
import { BiSend } from "react-icons/bi";
import { useForm } from "react-hook-form";

const fields = [
  { name: "fullName", label: "Full Name", type: "text", required: true },
  {
    name: "email",
    label: "Email",
    type: "email",
    required: true,
    pattern: /^\S+@\S+$/i,
  },
  { name: "message", label: "Message", type: "textarea", required: true },
];

export default function ContactUs() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    // Handle form submission logic here
    console.log(data);
  };

  return (
    <div>
      <div className="p-3 max-w-7xl m-auto">
        <div>
        <div>
        <div className="bg-indigo-800 m-20 max-w-full">
          <div className="grid justify-items-center m-10">
            <h1 className="text-3xl text-white mt-10" id="Contact">Contact me</h1>
          </div>
        </div>
        </div>
          <form
            className="my-10 flex flex-col justify-start items-center max-w-xl m-auto"
            onSubmit={handleSubmit(onSubmit)}
          >
            {fields.map((field) => (
              <div
                key={field.name}
                className={`${
                  field.type === "textarea"
                    ? "mb-6"
                    : "grid grid-cols-1 mb-6 gap-3"
                } w-full`}
              >
                <div className="text-left flex flex-col  gap-2 w-full">
                  <label className="font-semibold">{field.label}</label>
                  {field.type === "textarea" ? (
                    <textarea
                      {...register(field.name, { required: field.required })}
                      className="border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 pb-16 px-4 md:py-3 md:pb-16 md:px-4 md:mb-0 focus:border-red-500"
                      placeholder={`Type ${field.label.toLowerCase()}...`}
                    ></textarea>
                  ) : (
                    <input
                      {...register(field.name, {
                        required: field.required,
                        pattern: field.pattern,
                      })}
                      className="border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 focus:border-red-500"
                      type={field.type}
                      placeholder={`Enter ${field.label.toLowerCase()}`}
                    />
                  )}
                </div>
              </div>
            ))}
            <div className="w-full text-left">
              <button
                className="flex justify-center items-center gap-2 w-full py-3 px-4 bg-red-500 text-white text-sm font-bold border border-red-500 rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-white hover:text-red-500 lg:m-0 md:w-max md:px-6"
                title="Send"
                type="submit"
              >
                <span>Send</span>
                <BiSend />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}