import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../apollo/mutations";
import { LoginInput } from "../apollo/inputs";
import { AuthResponse } from "../apollo/responses";

export function LoginForm() {
  const [login] = useMutation<{ login: AuthResponse }, { data: LoginInput }>(LOGIN);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login({ variables: { data: { email, password } } })
      .then((response) => {
        console.log(response.data?.login);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="password">password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">login</button>
      </form>
    </div>
  );
}
