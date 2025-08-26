import React, { useState } from "react";
import Profile from "./Profile";
import Intrests from "./Intrests";
import Setting from "./Setting";

const TabForm = () => {
  const [activetab, setactivetab] = useState(0);
  const [error, seterror] = useState({});
  const [data, setdata] = useState({
    name: "Naresh",
    age: 22,
    email: "naresh@gmail.com",
    intrests: ["Music", "JavaScript", "Coding"],
    theme: ["dark", "light"],
  });

  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        const err = {};
        if (!data.name || data.name.length < 2) {
          err.name = "Name is not valid";
        }
        if (!data.age || data.age < 18) {
          err.age = "Age is not valid ";
        }
        if (!data.email || data.email.length < 5) {
          err.email = "Email is not valid";
        }
        seterror(err);
        return err.name || err.age || err.mail ? false : true;
      },
    },
    {
      name: "Intrest",
      component: Intrests,
      validate: () => {
        const err = {};
        if (!data.intrests || data.intrests.length < 1) {
          err.intrests = "Choose at least one interest";
        }
        seterror(err);
        return err.intrests ? false : true;
      },
    },
    {
      name: "Setting",
      component: Setting,
      validate: () => {
        seterror({});
        return true; 
      },
    },
  ];

  const Activetabcomponent = tabs[activetab].component;

  const handlePrev = () => {
    if (tabs[activetab].validate()) {
      setactivetab((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (tabs[activetab].validate()) {
      setactivetab((prev) => prev + 1);
    }
  };

  const handleSubmit = () => {
    if (tabs[activetab].validate()) {
      console.log("Form submitted:", data);
    }
  };

  return (
    <div>
      <div className="tabs">
        {tabs.map((tab, index) => (
          <div
            className={`tab-body ${activetab === index ? "active" : ""}`}
            key={index}
            onClick={() => setactivetab(index)}
          >
            {tab.name}
          </div>
        ))}
      </div>

      <div className="tab-component">
        <Activetabcomponent data={data} setdata={setdata} error={error} />
      </div>

      <div className="page">
        {activetab > 0 && (
          <button className="btn" onClick={handlePrev}>
            Prev
          </button>
        )}
        {activetab < tabs.length - 1 && (
          <button className="btn" onClick={handleNext}>
            Next
          </button>
        )}
        {activetab === tabs.length - 1 && (
          <button className="btn" onClick={handleSubmit}>
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default TabForm;
