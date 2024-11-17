import { MarvelIcon } from "@/components/icons/marvel";
import { LoginForm } from "./components/login-form";

export default function Home() {
  return (
    <div className="container relative  h-screen flex-col items-center justify-center flex md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <MarvelIcon />
        </div>
      </div>
      <div className="lg:p-8 my-auto">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Entre para continuar
            </h1>
            <p className="text-sm text-muted-foreground">
              Informe um email e uma senha aleatória
            </p>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}
