import React from "react";
import { useQuery } from "@apollo/client";
import { LoginForm } from "../components/LoginForm";
import { User } from "../interfaces/User";
import { GET_USERS } from "../apollo/queries";

export function UsersPage() {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{`Error! ${error.message}`}</div>;

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {data.users.map((user: User) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <LoginForm />
    </div>
  );
}
