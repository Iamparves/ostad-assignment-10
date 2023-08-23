import { BsTelephoneFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { TbMailFilled } from "react-icons/tb";

const Page = () => {
  return (
    <section>
      <div className="bg-[url('/contact-top.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="bg-black/70 pb-32 pt-20 sm:pb-40 sm:pt-24 md:pb-48 md:pt-32">
          <div className="mx-auto max-w-3xl px-4 text-center font-source_serif text-white">
            <h2 className="mb-3 text-3xl font-bold sm:text-4xl">
              Get in <span className="text-primary">Touch</span>
            </h2>
            <p className="text-base font-medium text-white/80 sm:text-lg">
              Reach out to us with your inquiries, thoughts, and ideas. We're
              here to listen and respond, fostering meaningful connections and
              conversations.
            </p>
          </div>
        </div>
      </div>
      <div className="container -translate-y-16 sm:-translate-y-20">
        <div className="mx-auto grid max-w-5xl md:grid-cols-[1fr_320px] lg:grid-cols-[1fr_380px]">
          <form className="bg-white px-5 py-7 font-source_serif shadow-sm lg:px-7">
            <h3 className="mb-5 font-josefin text-xl font-bold text-secondary">
              Send a Message
            </h3>
            <div className="mb-5 flex flex-col">
              <label
                htmlFor="name"
                className="mb-1 text-sm font-semibold text-secondary/80"
              >
                Full name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="rounded-md border p-3 text-secondary outline-0"
                id="name"
              />
            </div>
            <div className="mb-5 flex flex-col">
              <label
                htmlFor="name"
                className="mb-1 text-sm font-semibold text-secondary/80"
              >
                Email Address
              </label>
              <input
                type="email"
                placeholder="Email Address"
                className="rounded-md border p-3 text-secondary outline-0"
              />
            </div>
            <div className="mb-5 flex flex-col">
              <label
                htmlFor="name"
                className="mb-1 text-sm font-semibold text-secondary/80"
              >
                Website
              </label>
              <input
                type="text"
                placeholder="Website"
                className="rounded-md border p-3 text-secondary outline-0"
              />
            </div>
            <div className="mb-5 flex flex-col">
              <label
                htmlFor="name"
                className="mb-1 text-sm font-semibold text-secondary/80"
              >
                Message
              </label>
              <textarea
                placeholder="Message"
                className="h-24 resize-none rounded-md border p-3 text-secondary outline-0"
              ></textarea>
            </div>
            <button
              type="submit"
              className="mx-auto block w-40 rounded-full bg-secondary py-3 font-semibold text-white transition-all duration-300 hover:bg-primary"
            >
              Send Message
            </button>
          </form>
          <div className="contactInfo hidden px-5 py-7 text-white/90 md:block lg:px-7">
            <h3 className="mb-10 text-xl font-bold">Contact Info</h3>
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-lg backdrop-blur-sm">
                <BsTelephoneFill />
              </span>
              <span>+8191-039-6559</span>
            </div>
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-xl backdrop-blur-sm">
                <TbMailFilled />
              </span>
              <span>info@luminalore.com</span>
            </div>
            <div className="mb-8 flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5 text-xl backdrop-blur-sm">
                <MdLocationOn />
              </span>
              <span>179-1004, Motoyoyogicho, Shibuya-ku, Tokyo</span>
            </div>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6482.409515246619!2d139.6802842944576!3d35.671959940360644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f33602a149c3%3A0x1e1617b75f864e86!2sMotoyoyogicho%2C%20Shibuya%20City%2C%20Tokyo%20151-0062%2C%20Japan!5e0!3m2!1sen!2sbd!4v1692797546437!5m2!1sen!2sbd"
                className="h-60 w-full"
                allowfullscreen="false"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
