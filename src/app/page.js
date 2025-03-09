import Home_V6 from "./(home)/home-v6/page";
import Wrapper from "./layout-wrapper/wrapper";

export const metadata = {
  title: "Six Sigma Experts - Eric Maass",
};

export default function MainRoot() {
  return (
    <Wrapper>
      <Home_V6 />
    </Wrapper>
  );
}
