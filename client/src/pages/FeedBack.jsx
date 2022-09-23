import React, { useRef } from "react";
import Loader from "react-spinners/ClipLoader";

function FeedBack() {
  const [submiting, setSubmiting] = React.useState(false);
  const [succesfully, setSuccesfully] = React.useState(null);
  const email = useRef();
  const message = useRef();
  const subject = useRef();
  const handleSubmit = () => {
    setSubmiting(true);
    const emailData = email.current.value;
    const messageData = message.current.value;
    const subjectData = subject.current.value;
    fetch("http://localhost:5050/api/v1/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        subject: subjectData,
        email: emailData,
        message: messageData,
      }),
    }).then((res) => {
      setSubmiting(false);
      if (res.status === 200) {
        setSuccesfully(true);
      } else {
        setSuccesfully(false);
      }
    });
  };
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        {succesfully && (
          <h1 className="text-white text-center mb-4 bg-green-800 rounded shadow-lg p-2">
            Your feedback was submited succesfully, Thank you for contacting us
            :)
          </h1>
        )}
        {succesfully === false && (
          <h1 className="text-white text-center mb-4 bg-red-800 rounded shadow-lg p-2">
            Something went wrong, please try again later :(
          </h1>
        )}
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>
        <form action="#" className="space-y-8" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-300">
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm border  text-sm rounded-lg focus:ring-primary-500  block w-full p-2.5 bg-gray-700  text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
              placeholder="name@flowbite.com"
              required
              ref={email}
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-300">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm  rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500  bg-gray-700 dark:border-gray-600  text-white focus:ring-primary-500 focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Let us know how we can help you"
              required
              ref={subject}
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-400">
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              ref={message}
              className="block p-2.5 w-full text-sm rounded-lg shadow-sm border focus:ring-primary-500  bg-gray-700 border-gray-600  text-white focus:ring-primary-500 focus:border-primary-500"
              placeholder="Leave a comment..."></textarea>
          </div>
          <button
            type="submit"
            disabled={submiting}
            className="py-3 px-5 text-sm font-medium text-center  text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary">
            {submiting ? <Loader size={20} /> : "Send message"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default FeedBack;
