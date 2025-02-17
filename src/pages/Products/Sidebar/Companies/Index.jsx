import { useState } from "react";

function Companies(props) {
  const { companies, setActiveFilters } = props;
  const [selectedValue, setSelectedValue] = useState("all");

  function handleChange(value) {
    setSelectedValue(value);
    setActiveFilters((prev) => {
      if (selectedValue === "all") {
        return { ...prev, company: null };
      }
      return { ...prev, company: selectedValue };
    });
  }

  return (
    <div className="sidebar__div">
      <h5 className="sidebar__heading">Company</h5>
      <select
        className="sidebar__select"
        value={selectedValue}
        onChange={(event) => handleChange(event.target.value)}
      >
        {companies.map((company) => {
          return <option value={company}>{company}</option>;
        })}
      </select>
    </div>
  );
}
export default Companies;
