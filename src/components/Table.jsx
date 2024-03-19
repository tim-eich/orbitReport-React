const Table = ({ sat }) => {
  return (
    <table>
    <thead>
    <tr>
      <th>Name</th>
      <th>Type of Satellite</th>
      <th>Launch Date</th>
      <th>Status</th>
    </tr>
    </thead>
    <tbody>
      { sat.map(( data, id ) => {
        return(
          <tr key ={ sat.id }>
            <td key ={ sat.id} >{ data.name }</td>
            <td key ={ sat.id} >{ data.type }</td>
            <td key ={ sat.id} >{ data.launchDate }</td>
            { sat.operational ? <td key ={ sat.id} >Active</td> : <td key ={ sat.id} >Inactive</td> }
          </tr>
        )
      })}
    </tbody>
  </table>
  );
};

export default Table;