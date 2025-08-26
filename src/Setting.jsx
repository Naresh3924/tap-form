import React from "react";
const Setting = ({ data }) => {
  const { theme } = data;
  return (
    <div>
      <div>
        <label>
          <input type="radio" />
          dark
        </label>
      </div>
      <div>
        <label>
          <input type="radio" />
          Light
        </label>
      </div>
    </div>
  );
};

export default Setting;
