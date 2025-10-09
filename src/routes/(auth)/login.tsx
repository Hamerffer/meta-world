import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowBigLeftIcon, EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/(auth)/login")({
  component: RouteComponent,
});

function RouteComponent() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(54,114,196,0.7), rgba(54,114,196,0.7)), url('/bg.jpg')`,
        }}
        className=" min-h-screen bg-center bg-cover bg-no-repeat"
      >
        <header className="flex items-center p-2 space-x-2 text-foreground">
          <button aria-label="Go back" className="focus:outline-none">
            <ArrowBigLeftIcon size={15} onClick={() => window.history.back()} />
          </button>
          <p className="text-sm font-semibold">Login</p>
        </header>

        <div className="flex flex-col justify-center items-center px-6 gap-3 text-foreground text-center min-h-screen">
          <img
            src="/mlogo.png"
            alt="MetatradeLogo"
            className="w-20 h-auto mb-4"
          />
          <h3 className="text-lg font-semibold max-w-xs mx-auto">
            Join trader&apos;s community <br />
            <span className="underline">www.metatrade.com</span>
          </h3>

          <input
            type="text"
            placeholder="Login"
            className="w-full max-w-xs p-3 rounded bg-background placeholder-white placeholder-opacity-80 text-foreground"
          />
          <small className="text-sm text-foreground max-w-xs">
            Latin characters and digits without spaces
          </small>

          <div className="w-full max-w-xs relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full p-3 rounded bg-background placeholder-white placeholder-opacity-80 text-foreground"
            />
            <button
              type="button"
              aria-label="Toggle password visibility"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2  hover:text-foreground"
            >
              {showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
            </button>
          </div>

          <small className="text-foreground max-w-xs">
            Authorize and chat with traders right here and now
          </small>

          <button className="w-full max-w-xs bg-yellow-400 text-background py-3 rounded font-bold hover:bg-yellow-500 transition-colors">
            Sign In
          </button>

          <span className="text-foreground font-light">or</span>

          <button className="w-full max-w-xs border  rounded flex items-center justify-center gap-2 bg-foreground text-background py-3 font-semibold transition-colors">
            <img src="/google.png" className="w-6 h-6" alt="" />
            Sign in with Google
          </button>

          <p className="text-foreground max-w-xs">
            If you don&apos;t have an account, please{" "}
            <Link to="/register" className="yellow underline">
              register
            </Link>
          </p>

          <p className="text-foreground max-w-xs">
            Visit{" "}
            <a
              href="https://www.metatrade.com"
              target="_blank"
              rel="noopener noreferrer"
              className="yellow underline"
            >
              Metatrade.com
            </a>{" "}
            to access all community services.
          </p>
        </div>
      </div>
    </>
  );
}
