import React from "react";

const Profile = ({ data, setdata, error }) => {
  const { name, age, email } = data || {};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setdata((prev) => ({
      ...prev,
      [name]: name === "age" ? Number(value) : value,
    }));
  };

  return (
    <div className="profile-body">
      <div className="name">
        <label>Name : </label>
        <input type="text" name="name" value={name} onChange={handleChange} />
        {error?.name && <span className="error">{error.name}</span>}
      </div>

      <div className="age">
        <label>Age : </label>
        <input type="number" name="age" value={age} onChange={handleChange} />
        {error?.age && <span className="error">{error.age}</span>}
      </div>

      <div className="email">
        <label>Email : </label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        {error?.email && <span className="error">{error.email}</span>}
      </div>
    </div>
  );
};

export default Profile;
