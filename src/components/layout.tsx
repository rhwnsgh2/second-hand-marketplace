import { useState } from "react";
import SignUpForm from "./SignupForm";

export const Layout = () => {
  const [count, setCount] = useState(100);
  return (
    <div>
      <SignUpForm />
    </div>
  );
};
