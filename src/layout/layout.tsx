import { Footer } from "./footer/footer";
import { Header } from "./header/header";
import { Animation } from "../context/animation";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  const pages = ['/', '/contacts'];

  return (
    <Animation>
      <Header />
      <div className={pages.includes(router.pathname) ? 'no-p-t' : ''}>
        {children}
      </div>
      <Footer />
    </Animation>
  )
}

export default Layout;
