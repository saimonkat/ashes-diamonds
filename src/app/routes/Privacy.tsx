import React, { useEffect, useState } from "react";

//components
import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";
import Content from "@components/pages/privacy/content/Content";

const Privacy: React.FC = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <>
      {domLoaded && (
        <>
          <Header />
          <div className="main">
            <Content />
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default Privacy;
