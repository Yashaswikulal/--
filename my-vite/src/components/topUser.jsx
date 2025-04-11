import { useEffect, useState } from "react";
import { fetchTopUsers } from "../services/api";

const topUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchtopUser().then(data => setUsers(data));
  }, []);

  return (
    <div>
      <h2>Top Users</h2>
      <ul>
        {users.map((user, idx) => (
          <li key={idx}>{user.name} - {user.commentCount} comments</li>
        ))}
      </ul>
    </div>
  );
};

export default TopUsers;
