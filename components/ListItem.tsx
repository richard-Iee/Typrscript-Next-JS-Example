import * as React from "react";
import Link from "next/link";
import { User } from "../interfaces";

type Props = {
  data: User;
};

const ListItem: React.FunctionComponent<Props> = ({ data }) => (
  <Link href="/users/[id]" as={`/users/${data.id}`}>
    <div id="carBox">
      <style jsx global>
        {`
          #apiText {
            list-style-type: none;
            position: relative;
            top: 22px;
          }
          #carBox {
            height: 350px;
            width: 450px;
            background-color: white;
            border-radius: 15px;
            -webkit-box-shadow: 0px 11px 34px -8px rgba(0, 0, 0, 0.83);
            -moz-box-shadow: 0px 11px 34px -8px rgba(0, 0, 0, 0.83);
            box-shadow: 0px 11px 34px -8px rgba(0, 0, 0, 0.83);
            transition: 0.3s;
          }
          #carBox:hover {
            cursor: pointer;
            -webkit-box-shadow: 0px 11px 42px 9px rgba(0, 0, 0, 0.65);
            -moz-box-shadow: 0px 11px 42px 9px rgba(0, 0, 0, 0.65);
            box-shadow: 0px 11px 42px 9px rgba(0, 0, 0, 0.65);
          }
          #imgBox {
            width: 100%;
            height: 80%;
            background-color: #9e9e9e;
            border-top-left-radius: 15px;
            border-top-right-radius: 15px;
            overflow: hidden;
          }
          #image {
            height: 100%;
            width: 100%;
            border-top-left-radius: 15px;
            border-top-right-radius: 15px;
          }
        `}
      </style>
      <div id="imgBox">
        <img id="image" src={`${data.url}`} />
      </div>
      <a id="apiText">{data.Model}</a>
    </div>
  </Link>
);

export default ListItem;
