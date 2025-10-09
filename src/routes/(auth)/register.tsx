import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowBigLeftIcon } from "lucide-react";

export const Route = createFileRoute("/(auth)/register")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <div
        className="min-h-screen bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(54,114,196,0.7), rgba(54,114,196,0.7)), url('/bg.jpg')`,
        }}
      >
        <header className="flex items-center p-4 space-x-2 text-foreground">
          <button aria-label="Go back" className="focus:outline-none">
            <ArrowBigLeftIcon size={15} onClick={() => window.history.back()} />
          </button>
          <p className="text-sm font-semibold">Account registration</p>
        </header>

        <div className="min-h-screen flex flex-col justify-center items-center px-6 gap-3 text-foreground text-center">
          <img
            src="/mlogo.png"
            alt="Metatrade Logo"
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
          <small className="text-sm text-foreground mb-2">
            Latin characters and digits without spaces
          </small>

          <input
            type="email"
            placeholder="E-Mail"
            className="w-full max-w-xs p-3 rounded bg-background text-foreground"
          />
          <small className="text-left max-w-xs text-foreground">
            The password for your new Metatrade account will be sent to the
            specified email address
          </small>

          <button className="w-full max-w-xs bg-yellow-400 text-black py-3 rounded font-bold transition-colors">
            Get an Account
          </button>

          <span className="text-foreground font-light">or</span>

          <button className="w-full max-w-xs border border-gray-300 rounded flex items-center justify-center gap-2 bg-foreground text-gray-700 py-3 font-semibold transition-colors">
            <img src="/google.png" className="w-6 h-6" alt="" />
            Sign in with Google
          </button>

          <p className="text-foreground max-w-xs">
            If you have an account, please{" "}
            <Link to="/login" className="yellow underline">
              login
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
              metatrade.com
            </a>{" "}
            to access all community services.
          </p>
        </div>
      </div>
    </>
  );
}
