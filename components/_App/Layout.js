import Head from "next/head";
import { Container } from "semantic-ui-react";

import Header from "./Header";
import HeadContent from "./HeadContent";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <Head>
        <HeadContent />
        {/* Stylesheets */}
        
        <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous"/>
        <link rel="stylesheet" type="text/css" href="/static/styles.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css"/>
        <title>KMB Property Solutions</title>
      </Head>
      <Header style={{marginTop: '-3px'}}/>
      <Container text style={{ marginTop: "3rem", paddingBottom: "3.5rem"}}>
        {children}
      </Container>
      <Footer></Footer>
    </>
  );
}

export default Layout;
