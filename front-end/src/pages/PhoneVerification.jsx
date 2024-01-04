function PhoneVerification() {
  return (
    <section className="max-w-[1440px] mx-auto bg-secondaryColor w-full h-lvh flex flex-col flex-wrap justify-center items-center text-center text-primaryColor">
      <img
        src="assets/images/phone-verification.png"
        alt="phone"
        className="w-[150px] h-[150px] mb-10"
      />
      <h1 className="font-bold text-2xl mb-2">Enter your Phone Number</h1>
      <h2 className="font-bold mb-3">
        We will send you the 4 digit verification code
      </h2>
      <input
        className="sm:w-1/3 w-11/12  my-2 p-3 rounded-lg "
        type="tel"
        placeholder="+234 000 000 000"
        required
      />
      <button
        className="sm:w-1/3 w-11/12 my-2 p-3 rounded-lg bg-primaryColor font-bold text-white"
        type="submit"
      >
        Generate OTP
      </button>
    </section>
  );
}

export default PhoneVerification;
