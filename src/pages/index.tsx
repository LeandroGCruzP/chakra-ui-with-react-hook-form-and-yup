import type { NextPage } from "next";
import SignIn from "./users/signIn";

const Home: NextPage = () => {
  return (
    <>
      <SignIn />
    </>
  );
};

export default Home;
