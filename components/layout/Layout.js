import { default as Head } from "./Meta";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Head />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
