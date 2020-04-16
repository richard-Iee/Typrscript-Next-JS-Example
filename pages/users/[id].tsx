import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import fetch from "isomorphic-unfetch";

import { User } from "../../interfaces";
//import { sampleUserData } from "../../utils/sample-data";
import Layout from "../../components/Layout";
import ListDetail from "../../components/ListDetail";

type Props = {
  item?: User;
  errors?: string;
};

export default class StaticPropsDetail extends React.Component<Props> {
  render() {
    const { item, errors } = this.props;

    if (errors) {
      return (
        <Layout title={`Error`}>
          <p>
            <span style={{ color: "red" }}>Error:</span> {errors}
          </p>
        </Layout>
      );
    }

    return (
      <Layout title={`${item ? item.Model : "Model Detail"}`}>
        {item && <ListDetail item={item} />}
      </Layout>
    );
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("http://localhost:1337/models");
  const items = await res.json();
  const paths = items.map((item: any) => ({
    params: { id: item.id.toString() },
  }));
  return { paths, fallback: false };
};

// export const getStaticProps: GetStaticProps = async () => {
//   const res = await fetch("http://localhost:1337/models");
//   const items = await res.json();

//   return {
//     props: {
//       items,
//     },
//   };
// };

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id;
    const res = await fetch("http://localhost:1337/models");
    const items = await res.json();

    const item = items.find((data: any) => data.id === Number(id));
    // By returning { props: item }, the StaticPropsDetail component
    // will receive `item` as a prop at build time
    return { props: { item } };
  } catch (err) {
    return { props: { errors: err.message } };
  }
};
