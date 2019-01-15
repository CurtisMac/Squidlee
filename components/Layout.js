import { default as Head } from "./Meta";
import Header from "./header";
import Footer from "./footer";

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
