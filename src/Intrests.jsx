import React from "react";

const Intrests = ({ data, setdata, error }) => {
  const { intrests } = data;

  const handleChange = (e, name) => {
    setdata((prevstate) => ({
      ...prevstate,
      intrests: e.target.checked
        ? [...prevstate.intrests, e.target.name]
        : prevstate.intrests.filter((i) => i !== e.target.name),
    }));
  };
  console.log(intrests);

  return (
    <div className="instrest-body">
      <div>
        <label>
          <input
            type="checkbox"
            name="Music"
            checked={intrests.includes("Music")}
            onChange={handleChange}
          />
          Music
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="JavaScript"
            checked={intrests.includes("JavaScript")}
            onChange={handleChange}
          />
          JavaScript
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="Coding"
            checked={intrests.includes("Coding")}
            onChange={handleChange}
          />
          Coding
        </label>
      </div>
      {error?.intrests && <span className="error">{error.intrests}</span>}
    </div>
  );
};

export default Intrests;
