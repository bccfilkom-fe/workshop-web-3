import { Spin } from "antd";

const LoadingSpinners = () => {
  return (
    <div className="relative flex items-center justify-center w-screen h-screen">
      <Spin size="large" tip="Loading..." />
    </div>
  );
};

export default LoadingSpinners;
