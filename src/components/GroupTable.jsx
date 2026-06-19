function GroupTable({ group }) {
    return (
        <div>
            <h2>Group {group.id}</h2>
              <table>
        <thead>
          <tr>
            <th>Team</th>
          </tr>
        </thead>

        <tbody>
          {group.teams.map(team => (
            <tr key={team.id}>
              <td>{team.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    )
}

export default GroupTable;