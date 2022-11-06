import Head from "next/head";
import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import NavBar from "../Navbar/NavBar";
import Preloader from "../Preloader/Preloader";
import ToTop from "../ToTop/ToTop";

const Layout = ({children}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      <main id="main" className={`${loading && "overflow-hidden h-screen"}`}>
        <Head>
          <title>Numohive</title>
        </Head>
        {loading && <Preloader />}
        <NavBar />
        <>{children}</>
        <ToTop />
        <Footer />
      </main>
    </>
  );
};

export default Layout;
