import { Footer } from "./footer/footer";
import { Header } from "./header/header";
import { Animation } from "../context/animation";

const Layout = ({ children }) => {
  return (
    <Animation>
      <Header />
      {children}
      <Footer />
    </Animation>
  )
}

export default Layout;
