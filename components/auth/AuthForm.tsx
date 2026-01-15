import Link from "next/link";
import { Logo } from "../ui/global/Logo";
import { LoginForm } from "./LoginForm";
import { SignupForm } from "./SignupForm";
import { Card, CardContent } from "../ui/card";

interface Props {
  isLogin?: boolean;
}

export const AuthForm = ({ isLogin }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-4 px-3">
      <Logo size="lg" />
      <h1 className="text-3xl text-center">
        {isLogin ? "Welcome back!" : "Start using Sprinta"}
      </h1>
      <p className="text-muted-foreground text-center md:text-base text-sm">
        {isLogin
          ? "Log in to your account to continue using Sprinta"
          : "Create an account to get started"}
      </p>
      <Card className="w-full max-w-md mt-8">
        <CardContent>{isLogin ? <LoginForm /> : <SignupForm />}</CardContent>
      </Card>
      <p className="text-sm">
        <span>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
        </span>
        <Link
          href={isLogin ? "/signup" : "/login"}
          className="text-sprinta-primary"
        >
          {isLogin ? "Create one" : "Login"}
        </Link>
      </p>
    </div>
  );
};
