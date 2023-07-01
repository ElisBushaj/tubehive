import { CircleLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex w-full h-full justify-center items-center">
      <CircleLoader color="#FF0000" />
    </div>
  );
};

export default Loading;
