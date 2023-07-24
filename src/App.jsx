import { useState } from "react";
import data from "./data";
import { List } from "./assets/components/List";

const App = () => {
  const [person, setPerson] = useState(data);
  const handleClearAll = () => {
    setPerson([]);
  }
  return (
    <div>
      <List data={person} />
      <button onClick={handleClearAll} className="btn">Clear All</button>
    </div>
  );
};
export default App;
