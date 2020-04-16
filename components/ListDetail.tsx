import * as React from "react";
import Link from "next/link";

import { User } from "../interfaces";

type ListDetailProps = {
  item: User;
};

const ListDetail: React.FunctionComponent<ListDetailProps> = ({
  item: user,
}) => (
  <div>
    <style jsx global>
      {`
        #model {
          margin-left: 29.8%;
          padding-top: 10px;
          font-size: 40px;
        }
        #background {
          background-color: #e0e0e0;
          padding-bottom: 11.5%;
          margin-bottom: 10px;
        }
        #back {
          margin-left: 20px;
          padding-top: 20px;
        }
        #back:hover {
          cursor: pointer;
        }
        #image {
          width: 30%;
          margin-left: 35%;
        }
        #info {
          text-align: center;
        }
        #wikiLink {
          text-decoration: none;
          color: darkred;
        }
      `}
    </style>
    <div id="background">
      <Link href="/users">
        <h2 id="back">← Back</h2>
      </Link>
      <h1 id="model">Lexus {user.Model}</h1>
      <img id="image" src={`${user.url}`} />
      <h3 id="info">
        For more information:{" "}
        <Link href={user.info}>
          <a id="wikiLink">{user.info}</a>
        </Link>
      </h3>
    </div>
  </div>
);

export default ListDetail;
