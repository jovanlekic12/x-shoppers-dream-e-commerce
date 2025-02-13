function Companies(props) {
  const { companies } = props;

  return (
    <div className="sidebar__div">
      <h5 className="sidebar__heading">Company</h5>
      <select className="sidebar__select">
        {companies.map((company) => {
          return <option value={company}>{company}</option>;
        })}
      </select>
    </div>
  );
}
export default Companies;
