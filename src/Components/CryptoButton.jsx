import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCryptoButton } from "../redux/currency";

import DropdownButton from "./DropdownButton";

const CryptoButton = () => {
  const dispatch = useDispatch();
  const { coinlist, cryptobutton } = useSelector((state) => state.curr);
  const crpto = coinlist.map((item) => item.name);
  const handleChange = (e) => {
    dispatch(updateCryptoButton(e));
  };
  return (
    <div>
      <DropdownButton
        name={cryptobutton}
        list={crpto}
        handleChange={handleChange}
      />
    </div>
  );
};

export default CryptoButton;
