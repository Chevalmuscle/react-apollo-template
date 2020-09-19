import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { REGISTER } from "../apollo/mutations";
import { RegisterInput } from "../apollo/inputs";
import { User } from "../interfaces/User";

export function RegisterForm() {
  const [register] = useMutation<{ register: User }, { data: RegisterInput }>(REGISTER);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    register({ variables: { data: { firstName, lastName, email, password } } })
      .then((response) => {
        console.log(response.data?.register);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <form onSubmit={handleRegister}>
        <label htmlFor="firstName">firstName</label>
        <input type="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />

        <label htmlFor="lastName">lastName</label>
        <input type="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />

        <label htmlFor="email">email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label htmlFor="password">password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button type="submit">register</button>
      </form>
    </div>
  );
}
