"use client";

import { useRouter } from "next/navigation";

const Users = ({ users }) => {
  const router = useRouter();

  const handleRouter = (id) => {
    router.push(`/users/${id}`);
  };
  return (
    <ul className="list-group">
      {users.map((user) => (
        <li
          key={user.id}
          className="list-group-item d-flex justify-content-between align-items-center list-group-item-action"
          style={{ cursor: "pointer" }}
          onClick={() => handleRouter(user.id)}
        >
          <div>
            <h2>{`${user.first_name} ${user.last_name}`}</h2>
            <strong>{user.email}</strong>
          </div>
          <img
            src={user.avatar}
            alt={`photo of ${user.first_name} ${user.last_name}`}
            title={`photo of ${user.first_name} ${user.last_name}`}
            style={{ borderRadius: "50%" }}
          />
        </li>
      ))}
    </ul>
  );
};
export default Users;
