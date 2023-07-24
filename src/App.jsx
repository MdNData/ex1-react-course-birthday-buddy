import { useState } from "react";
import data from "./data";
import { List } from "./assets/components/List";

const App = () => {
  const [person, setPerson] = useState(data);
  const handleClearAll = () => {
    setPerson([]);
  }
  return (
    <main>
      <List data={person} handle={setPerson} />
    </main>
  );
};
export default App;
