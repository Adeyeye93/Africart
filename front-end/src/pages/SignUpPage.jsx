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
          <form className="mx-auto w-7/12 h-4/6 border-2 border-gray-950">
            <h2 className="text-primaryColor text-xl font-bold">Sign-Up</h2>
            <button type="submit">Sign up with Google</button>
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
