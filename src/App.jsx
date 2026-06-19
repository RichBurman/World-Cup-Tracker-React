import GroupTable from "./components/GroupTable";
import { groups } from "./data/groups";

function App() {
  return (
    <>
      <h1>World Cup Tracker</h1>

      {groups.map((group) => (
        <GroupTable key={group.id} group={group} />
      ))}
    </>
  );
}

export default App;
