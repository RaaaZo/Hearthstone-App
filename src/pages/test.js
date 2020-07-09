import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "ducks/actions/actions";

const Test = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  console.log(data);

  return (
    <div>
      <p>dziala</p>
    </div>
  );
};

export default Test;
