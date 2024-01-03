function EmailVerification() {
  return (
    <section className="max-w-[1440px] mx-auto w-full h-lvh bg-secondaryColor flex flex-col flex-wrap justify-center items-center text-primaryColor text-center">
      <img
        className="w-[150px] h-[150px] mb-10"
        src="assets/images/email1.png"
        alt="email"
      />
      <p>
        Hi Dray! Use the link below to verify your email and start <br />{" "}
        enjoying Afrikart
      </p>
      <button
        className="sm:w-1/3 w-11/12 my-2 p-3 rounded-lg bg-primaryColor font-bold text-white"
        type="submit"
      >
        Verify email
      </button>
      <p className="mt-5">Question ? Email us at feedback@afrikart.com</p>
    </section>
  );
}

export default EmailVerification;
