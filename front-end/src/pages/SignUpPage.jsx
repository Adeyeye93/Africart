import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { text } from "@fortawesome/fontawesome-svg-core";
import InputField from "../components/inputField";
import Btn from "../components/btn";

function SignUpPage() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="max-[380px]:h-full min-[1023px]:h-screen flex justify-center bg-secondaryColor w-full h-lvh">
        <aside className=" w-9/12 hidden lg:block relative ">
          <img
            className="absolute w-1/2 top-0 bottom-0 m-auto"
            src="assets/images/signup-girl.png"
            alt="signup-img"
          />
          <img
            className="min-[1023px]:h-full h-lvh"
            src="assets/images/Rectangle.png"
            alt="rectangle"
          />
        </aside>
        <main className="max-[1025px]:h-fit flex flex-col justify-center align-middle w-full lg:mr-12 m-auto">
          <img
            className="mt-6 lg:mt-0 w-[358px] mx-auto"
            src="assets/images/logo.png"
            alt="afrikart-logo"
          />

          <form className="sign-up-form mx-auto w-11/12 sm:w-7/12" action="">
            <h2 className="m-2 text-primaryColor text-xl font-bold">Sign-Up</h2>
            <button
              className="border-none w-full p-3 rounded-lg text-white font-bold border bg-primaryColor"
              type="submit"
            >
              <FontAwesomeIcon
                className="font-bold text-xl text-white border-green-700"
                icon={faGoogle}
              />
              <span>&nbsp; &nbsp;</span>
              Sign up with Google
            </button>

            <div className="mt-5 flex items-center justify-center">
              <div className=" w-[240px] h-px mx-4 bg-primaryColor"></div>
              <span className="text-primaryColor or-text">or</span>
              <div className=" w-[240px] h-px mx-4 bg-primaryColor"></div>
            </div>

            <h2 className="text-lg">Full Name</h2>
            <InputField type={text} placeholder={"John Doe"} />

            <h2 className="text-lg">Email</h2>
            <InputField type={"email"} placeholder={"example@example.com"} />

            <h2 className="text-lg">Password</h2>
            <InputField type={"password"} placeholder={"Password"} />

            <div className="mt-4 text-primaryColor">
              <input className="cursor-pointer" type="checkbox" name="" id="" />
              <p className="mx-1 inline text-sm">
                Creating an account means you’re okay with our{" "}
                <span>Terms of Service</span>, <span>Privacy Policy</span>, and
                our default <span>Notification Settings</span>.
              </p>
            </div>
            <Btn title="Create Account" />
          </form>
        </main>
      </div>
    </div>
  );
}
// TODO:
// 1. SEMATICS
// 2. Responsiveness -done
// 3. Fill up the alt images
// 4. Work on the button component - done
// 5. Work on the form -done
// 6. Get icons - done
// 7. Links
export default SignUpPage;
