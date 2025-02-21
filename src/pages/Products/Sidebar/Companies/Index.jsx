function Companies(props) {
  const { companies, setFilters, filters } = props;

  return (
    <div className="sidebar__div">
      <h5 className="sidebar__heading">Company</h5>
      <select
        className="sidebar__select"
        value={filters.company}
        onChange={(e) =>
          setFilters((prev) => ({ ...prev, company: e.target.value }))
        }
      >
        {companies.map((company) => {
          return <option value={company}>{company}</option>;
        })}
      </select>
    </div>
  );
}
export default Companies;
