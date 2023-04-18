import Users from "./components/Users";

const fetchUsers = async () => {
  const res = await fetch("https://reqres.in/api/users");
  const json = await res.json();
  return json.data;
};

const pageIndex = async () => {
  const users = await fetchUsers();

  return <Users users={users} />;
};
export default pageIndex;
