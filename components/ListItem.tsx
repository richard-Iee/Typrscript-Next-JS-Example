import * as React from "react";
import Link from "next/link";
import { User } from "../interfaces";

type Props = {
  data: User;
};

const ListItem: React.FunctionComponent<Props> = React.memo(function ListItem({
  url,
  Model,
  data,
  id,
}) {
  return (
    <Link href="/users/[id]" as={`/users/${id}`}>
      <div className="carBox">
        <style jsx global>
          {`
            .api-text {
              list-style-type: none;
              position: relative;
              top: 22px;
            }
            .car-box {
              height: 350px;
              width: 450px;
              background-color: white;
              border-radius: 15px;
              -webkit-box-shadow: 0px 11px 34px -8px rgba(0, 0, 0, 0.83);
              -moz-box-shadow: 0px 11px 34px -8px rgba(0, 0, 0, 0.83);
              box-shadow: 0px 11px 34px -8px rgba(0, 0, 0, 0.83);
              transition: 0.3s;
            }
            .car-box:hover {
              cursor: pointer;
              -webkit-box-shadow: 0px 11px 42px 9px rgba(0, 0, 0, 0.65);
              -moz-box-shadow: 0px 11px 42px 9px rgba(0, 0, 0, 0.65);
              box-shadow: 0px 11px 42px 9px rgba(0, 0, 0, 0.65);
            }
            .img-box {
              width: 100%;
              height: 80%;
              background-color: #9e9e9e;
              border-top-left-radius: 15px;
              border-top-right-radius: 15px;
              overflow: hidden;
            }
            .image {
              height: 100%;
              width: 100%;
              border-top-left-radius: 15px;
              border-top-right-radius: 15px;
            }
          `}
        </style>
        <div className="img-box">
          <img className="image" src={url} />
        </div>
        <a className="api-text">{Model}</a>
      </div>
    </Link>
  );
});

export default ListItem;
