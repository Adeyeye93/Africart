import Btn from "../components/btn";

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
      <Btn title="Verify email" width="35%" />
      <p className="mt-5">Question ? Email us at feedback@afrikart.com</p>
    </section>
  );
}

export default EmailVerification;
