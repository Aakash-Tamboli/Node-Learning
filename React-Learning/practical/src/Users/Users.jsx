import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);

  async function fetchUser() {
    try {
      const response = await fetch("https://dummyjson.com/users");
      const responseAsJSON = await response.json();
      if (responseAsJSON.users) setUsers(responseAsJSON.users);
      else setUsers([]);
    } catch (error) {
      // not yet decided
    }
  }

  return (
    <div>
        {
            users.length > 0 ? users.map((user,index)=> <li>{user.name}</li>): null
        }
    </div>
  );
}
