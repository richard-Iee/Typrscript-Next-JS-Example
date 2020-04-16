import { GetStaticProps } from "next";
//import Link from "next/link";
import fetch from "isomorphic-unfetch";
import { User } from "../../interfaces";
//import { fetchData } from "../api/fetch";
import Layout from "../../components/Layout";
import List from "../../components/List";

type Props = {
  items: User[];
};

const WithStaticProps = ({ items }: Props) => (
  <Layout title="Car List">
    <style jsx global>
      {`
        #background {
          background-color: #e0e0e0;
          padding-bottom: 5%;
          margin-bottom: 10px;
        }

        #carList {
          margin-left: 29.8%;
          padding-top: 30px;
          font-size: 40px;
        }

        #carBrand {
          margin-left: 30%;
          padding-top: 10px;
          font-size: 25px;
        }

        #list {
          padding-top: 5px;
          margin-left: 20.6%;
        }
      `}
    </style>
    <div id="background">
      <h1 id="carList">Car List</h1>
      <p id="carBrand">Lexus</p>
      <div id="list">
        <List items={items} />
      </div>
    </div>
  </Layout>
);

// export const getStaticProps: GetStaticProps = async () => {
//   // Example for including static props in a Next.js function component page.
//   // Don't forget to include the respective types for any props passed into
//   // the component.
//   const items: User[] = fetchData();
//   return { props: { items } };
// };

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("http://localhost:1337/models");
  const items = await res.json();

  return {
    props: {
      items,
    },
  };
};
export default WithStaticProps;
