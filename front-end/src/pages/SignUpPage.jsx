import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import Button from "../components/serviceCard";
import Btn from "../components/btn";
import { text } from "@fortawesome/fontawesome-svg-core";

function SignUpPage() {
  return (
    <>
      <div className="flex justify-between bg-secondaryColor w-full h-lvh">
        <aside className="w-8/12 relative ">
          <img
            className="absolute w-1/2 top-72 left-10"
            src="assets/images/signup-girl.png"
            alt="signup-img"
          />
          <img
            className=" h-lvh"
            src="assets/images/Rectangle.png"
            alt="rectangle"
          />
        </aside>
        <main className="flex flex-col justify-center align-middle w-full mr-14">
          <img
            className="w-[358px] mx-auto "
            src="assets/images/logo.png"
            alt="afrikart-logo"
          />
          <i class="fa-brands fa-google"></i>
          <form
            className="mx-auto w-7/12 h-4/6 border-2 border-gray-950"
            action=""
          >
            <h2 className="m-2 text-primaryColor text-xl font-bold">Sign-Up</h2>

            <button
              className="border-none w-full  p-3 rounded-lg text-white font-bold border bg-primaryColor"
              type="submit"
            >
              <FontAwesomeIcon
                className="font-bold text-xl text-white border-green-700"
                icon={faGoogle}
              />
              <span>&nbsp; &nbsp;</span>
              Sign up with Google
            </button>
            {/* <Btn className=" text-white font-bold" /> */}
            <h5 className="text-center">or</h5>
            <h3>Full Name</h3>
            <Btn
              type={text}
              placeholder={"John Doe"}
              title={"something here"}
            />

            <h3>Email</h3>
            <Btn
              type={"email"}
              placeholder={"example@example.com"}
              title={"something here"}
            />
            <h3>Password</h3>
            <Btn
              type={"password"}
              placeholder={"Password"}
              title={"something here"}
            />
            {/* TODO: CHECKBOX HERE */}
            <Btn
              type={"submit"}
              placeholder={"**********"}
              title={"something here"}
            />
          </form>
        </main>
      </div>
    </>
  );
}
// TODO:
// 1. SEMATICS
// 2. Responsiveness
// 3. Fill up the alt images
// 4. Work on the button component
// 5. Work on the form
// 6. Get icons
export default SignUpPage;
