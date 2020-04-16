import * as React from "react";
import Link from "next/link";
import Head from "next/head";

type Props = {
  title?: string;
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "This is the default title",
}) => (
  <div id="total">
    <style jsx global>
      {`
        #total {
          font-family: "Lato", sans-serif;
        }

        #navBar {
          font-size: 20px;
          text-align: center;
          color: white;
        }
        #navText {
          padding-left: 20px;
          padding-right: 20px;
          text-decoration: none;
          color: white;
        }
        #header {
          background-color: #5a6ba3;
          padding-top: 20px;
          padding-bottom: 20px;
        }
        #footer {
          background-color: #5a6ba3;
          text-align: center;
          padding-top: 8px;
          padding-bottom: 8px;
        }
        #footerText {
          color: white;
        }
      `}
    </style>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header id="header">
      <nav id="navBar">
        <Link href="/">
          <a id="navText">Home</a>
        </Link>{" "}
        |{" "}
        <Link href="/users">
          <a id="navText">Car List</a>
        </Link>{" "}
        |{" "}
        <Link href="http://localhost:1337/models">
          <a id="navText">API</a>
        </Link>
      </nav>
    </header>
    {children}
    <footer id="footer">
      {/* <hr /> */}
      <span id="footerText">
        © Copyright 2020 yourcar ltd., all rights reserved
      </span>
    </footer>
  </div>
);

export default Layout;
