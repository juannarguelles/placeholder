import React, { useEffect, useState } from "react";
import User from "./components/User";

const App = () => {
  const [users, setUsers] = useState();

  useEffect(() => {

    async function getUsers() {
      const result = await fetch("https://jsonplaceholder.typicode.com/users");
      const response = await result.json();
      setUsers(response);
    }
    getUsers();
  }, []);

  console.log(users);

  return (
    <div>
      {users && users.length > 0 ? users.map((user) => <User key={user.id} {...user}/> ) : null}
    </div>
  );
};

export default App;