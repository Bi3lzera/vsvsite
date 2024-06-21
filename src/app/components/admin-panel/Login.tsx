import { signIn } from "next-auth/react";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="bg-black min-h-screen grid place-items-center">
      <button
        className="bg-white px-8 py-4 flex gap-2 place-items-center text-black"
        onClick={() => signIn("google")}
      >
        <FcGoogle size={30} />
        Entrar com o Google
      </button>
    </div>
  );
};

export default Login;
