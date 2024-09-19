import { Footer } from "antd/es/layout/layout";

const FooterLayouts = () => {
  return (
    <Footer className="text-center min-h-[10vh] border-t shadow-md bg-white">
      <p>
        Mixue Bang Fathan ©{new Date().getFullYear()} Created with 🤍 by Rija
      </p>
      <span>Emejing Banget Sich</span>
    </Footer>
  );
};

export default FooterLayouts;
