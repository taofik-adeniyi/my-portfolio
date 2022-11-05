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
const ContactMe = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    window.location.href = `mailto:taofik.dev@gmail.com?subject=${data.subject}&body=Hi my name is ${data.name}. ${data.message} respond back to: ${data.email}`;
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center">
      <h3 className="title">Contact</h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-2xl px-4 md:px-0 md:text-4xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="underline decoration-[#F7AB0A]/50">Lets Talk</span>
        </h4>

        <div className="space-y-8">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="animate-pulse h-7 w-7 text-[#F7AB0A]" />
            <p className="text-2xl">
              <a href="tel:+2348171633912">+234 817 163 3912</a>
            </p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="animate-pulse h-7 w-7 text-[#F7AB0A]" />
            <p className="text-2xl">taofik.dev@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="animate-pulse h-7 w-7 text-[#F7AB0A]" />
            <p className="text-2xl">Lagos, Nigeria</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name", { required: true })}
              className="contactInput"
              type="text"
              placeholder="Name"
            />
            <input
              {...register("email", { required: true })}
              className="contactInput"
              type="email"
              placeholder="Email"
            />
          </div>
          <input
            {...register("subject", { required: true })}
            className="contactInput"
            type="text"
            placeholder="Subject"
          />
          <textarea
            {...register("message", { required: true })}
            className="contactInput"
            placeholder="Message"
          />
          <button
            type="submit"
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
