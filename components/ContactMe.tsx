import { FaPhoneAlt, FaMapMarkedAlt, FaEnvelopeOpenText } from "react-icons/fa";
import { useForm, SubmitHandler } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactMe() {
  const { register, handleSubmit } = useForm<FormData>();

  const email = "salman.a.mec@gmail.com";

  const onSubmit: SubmitHandler<FormData> = (formData) => {
    const { name, email, subject, message } = formData;

    const body = `Hey, I'm ${name}. ${message}. You can reach me at ${email}.`;

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[1rem] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          Seems interesting?&nbsp;
          <span className="decoration-cyan-400/50 underline">
            Let&apos;s connect
          </span>
        </h4>

        <div className="space-y-4">
          <div className="flex items-center space-x-5 justify-center">
            <FaPhoneAlt className="text-cyan-800 h-7 w-7 animate-pulse" />
            <p className="text-2xl">+91 8848411093</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <FaEnvelopeOpenText className="text-cyan-800 h-7 w-7 animate-pulse" />
            <p className="text-2xl">{email}</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <FaMapMarkedAlt className="text-cyan-800 h-7 w-7 animate-pulse" />
            <p className="text-2xl">Kochi, Kerala</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contact-input"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contact-input"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            className="contact-input"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contact-input"
          />

          <button
            type="submit"
            className="bg-cyan-400 py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
