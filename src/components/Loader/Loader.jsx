import { ColorRing } from "react-loader-spinner";
import { LodeWrapper } from "./Loader.styled";

export const Loader = () => {
  return (
    <LodeWrapper>
      <ColorRing
        height="200"
        width="200"
        color="#27b8ad"
        radius="6"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="rings-loading"
      />
    </LodeWrapper>
  );
};
export default Loader;