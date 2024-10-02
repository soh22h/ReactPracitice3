import { useAppDispatch, useAppSelector } from "../redux/store.ts";
import { useNavigate } from "react-router-dom";
import { FormEvent, useEffect, useState } from "react";
import { signup } from "../redux/slices/userSlice.ts";

export default function Signup() {
  const dispatch = useAppDispatch();
  const { loginUser } = useAppSelector((state) => state.user);

  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(signup({ id, password }));
    navigate("/login");
  };

  useEffect(() => {
    if (loginUser) {
      navigate("/");
    }
  }, [loginUser]);

  return (
    <div className={"w-full my-20"}>
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
            autoComplete={"new-password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type={"submit"} className={"btn w-80"}>
          회원가입
        </button>
      </form>
    </div>
  );
}
