import Layout from "../components/Layout";
//import styled from "styled-components";

const IndexPage = () => (
  <Layout title="Home | Next">
    <style jsx global>
      {`
        #background {
          background-color: #e0e0e0;
          padding-bottom: 20%;
          margin-bottom: 10px;
        }
        #title {
          text-align: center;
          padding-top: 30px;
          font-size: 40px;
        }
        #introText {
          text-align: center;
          margin-top: 10%;
          margin-left: 20%;
          margin-right: 20%;
          font-size: 60px;
          margin-bottom: -2.5%;
        }
      `}
    </style>
    <div id="background">
      <h1 id="title">Yourcar Car List</h1>
      <div>
        <p id="introText">
          this is a example project made my yourcar junior developer Richard
          Lee. Using next.js with typescript and strapi.
        </p>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
