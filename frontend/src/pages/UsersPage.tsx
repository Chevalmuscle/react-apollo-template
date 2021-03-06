import React from "react";
import { useQuery } from "@apollo/client";
import { LoginForm } from "../components/LoginForm";
import { RegisterForm } from "../components/RegisterForm";
import { User } from "../interfaces/User";
import { GET_USERS } from "../apollo/queries";
import { UsersResponse } from "../apollo/responses";

export function UsersPage() {
  const { loading, error, data } = useQuery<UsersResponse>(GET_USERS);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{`Error! ${error.message}`}</div>;

  return (
    <div>
      <h2>Users</h2>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.users.map((user: User) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <h2>Login</h2>
      <LoginForm />
      <h2>Register</h2>
      <RegisterForm />
    </div>
  );
}
