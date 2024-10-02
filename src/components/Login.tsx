import { FormEvent, useState } from "react";
import { Navigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../redux/store.ts";
import { login } from "../redux/slices/userSlice.ts";

export default function Login() {
  const dispatch = useAppDispatch();
  const loginData = useAppSelector((state) => state.user.loginUser);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(login({
      id, password,
      carts: []
    }));
  };

  return (
    <div className={"w-full my-20"}>
      {loginData && <Navigate to="/" replace={true} />}
      <form
        className={"w-full flex flex-col items-center space-y-5"}
        onSubmit={onSubmit}
      >
        <label className={"form-control"}>
          <input
            name={"id"}
            className={"input input-bordered w-80"}
            placeholder={"아이디를 입력해주세요."}
            autoComplete={"username"}
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </label>
        <label className={"form-control"}>
          <input
            type={"password"}
            name={"password"}
            className={"input input-bordered w-80"}
            placeholder={"비밀번호를 입력해주세요."}
            autoComplete={"current-password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type={"submit"} className={"btn w-80"}>
          로그인
        </button>
      </form>
    </div>
  );
}
