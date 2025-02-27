import { Footer } from "./footer/footer";
import { Header } from "./header/header";
import { Animation } from "../context/animation";
import { useRouter } from "next/router";
import VantaBackground from "../components/bgAnimation/bgAnimation";

const Layout = ({ children }) => {
  const router = useRouter();
  const pages = ['/', '/contacts'];

  return (
    <Animation>
      <Header />
      <VantaBackground />
      <div
        className={pages.includes(router.pathname) ? 'no-p-t' : ''}
        style={{
          position: 'relative'
        }}
      >
        <div className="animation-cover" />
        {children}
      </div>
      <Footer />
    </Animation>
  )
}

export default Layout;
