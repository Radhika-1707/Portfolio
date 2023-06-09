import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
export default function Contact({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href=`mailto:radh7042@gmail.com?subject=${formData.subject}&body= Hi, my name is
     ${formData.name}.${formData.message} (${formData.email})`
  }

  return (
    <div className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row md:text-left max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute  top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        CONTACT
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="decoration-[#F7AB0A]/50 underline">Lets Talk.</span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center ">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+1234567890</p>
          </div>
          <div className="flex items-center space-x-5 justify-center ">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">12 Developer lane</p>
          </div>
          <div className="flex items-center space-x-5 justify-center ">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">Radh7042@gmail.com</p>
          </div>
        </div>
        <form
          className="flex flex-col space-y-2 w-fit mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              className="contactInput"
              type="text"
              placeholder="Name"
            />
            <input
              {...register("email")}
              className="contactInput"
              type="email"
              placeholder="Email"
            />
          </div>
          <input
            {...register("subject")}
            className="contactInput"
            type="text"
            placeholder="Subject"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-semibold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
