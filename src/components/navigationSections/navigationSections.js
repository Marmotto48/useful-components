import React from "react";
import "./navigationSections.styles.css";

const NavigationSections = () => {
  return (
    <div className="navigation-sections-cntainer">
      {/*apply to html*/}
      <section className="section primary">
        <h1>section 1</h1>
      </section>
      <section className="section secondary">
        <h1>section 2</h1>
      </section>
      <section className="section third">
        <h1>section 3</h1>
      </section>
    </div>
  );
};

export default NavigationSections;
