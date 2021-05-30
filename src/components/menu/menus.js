import { Fragment, useState } from "react";
import MenuItem from "./menuitem";

import { Route, Redirect, withRouter, Switch } from "react-router-dom";

export default function Menus(props) {
  const [id, setId] = useState(0);
  const click = (_id) => {
    setId(_id);
  };
  return (
    <div className="list-group">
      {props.menus.map((menu, index) => (
        <MenuItem
          key={menu._id}
          index={index === id}
          menu={menu}
          click={() => click(index)}
        />
      ))}
    </div>
  );
}
