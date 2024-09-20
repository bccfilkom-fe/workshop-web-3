import { Spin } from "antd";

const LoadingSpinners = () => {
  return (
    <div className="relative flex items-center justify-center w-full h-[80vh]">
      <Spin size="large" tip="Loading..." />
    </div>
  );
};

export default LoadingSpinners;
