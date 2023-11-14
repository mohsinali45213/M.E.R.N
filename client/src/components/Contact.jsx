const Contact = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-zinc-100">
      <div className="flex justify-center gap-5 mt-10 w-10/12 ">
        <div className="flex justify-start gap-5 w-full items-center border py-2 px-10 0 shadow-md rounded-md  ">
          <img src="./images/mobile-notch.png" alt="phone" className="w-6" />
          <p className="font-bold">
            Phone <br />
            <span className="text-xs relative bottom-1.5">+91 9845434567</span>
          </p>
        </div>
        <div className="flex justify-start gap-5 w-full items-center border py-2 px-10 0 shadow-md rounded-md  ">
          <img src="./images/email.png" alt="email" className="w-6" />
          <p className="font-bold">
            Email <br />
            <span className="text-xs relative bottom-1.5">
              support@gmail.com
            </span>
          </p>
        </div>
        <div className="flex justify-start gap-5 w-full items-center border py-2 px-10 0 shadow-md rounded-md  ">
          <img src="./images/map-marker.png" alt="address" className="w-6" />
          <p className="font-bold">
            Address <br />
            <span className="text-xs relative bottom-1.5">Pune,MH,India</span>
          </p>
        </div>
      </div>
      <div className=" y-16 py-8 px-16 rounded-xl shadow-md bg-zinc-50 my-10 ">
        <form className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold">Get in Touch</h2>
          <div className="flex gap-x-5">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your name"
              className="border-gray-400 bg-zinc-50 border py-3 p-5 pe-20 rounded-md focus:outline-none"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email"
              className="border-gray-400 bg-zinc-50 border py-3 p-5 pe-20 rounded-md focus:outline-none "
            />
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Your phone number"
              className="border-gray-400 bg-zinc-50 border py-3 p-5 pe-20 rounded-md focus:outline-none "
            />
          </div>
          <div className="w-full">
            <textarea
              name="massage"
              id="massage"
              placeholder="Massage"
              className="border-gray-400 bg-zinc-50 w-full resize-none hover:resize-y h-52 border py-3 px-5  rounded-md focus:outline-none"
            />
          </div>
          <div>
            <button className="bg-slate-900 text-white px-7 py-4 rounded-md">Send Massage</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
