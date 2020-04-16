import * as React from "react";
import ListItem from "./ListItem";
import { User } from "../interfaces";

type Props = {
  items: User[];
};

const List: React.FunctionComponent<Props> = ({ items }) => (
  <ul>
    <style jsx global>{`
      #list {
        list-style-type: none;
        padding-bottom: 50px;
        text-align: center;
      }
    `}</style>
    {items.map((item) => (
      <li id="list" key={item.id}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
);

export default List;
