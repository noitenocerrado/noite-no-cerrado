import Image from "next/image";

export const Logo = () => (
  <div className="w-full flex justify-center flex-col mt-5 items-center gap-4">
    <Image alt="logo noite no cerrado" src="/logo.png" width={150} height={150} />

    <p className="text-3xl">
      Noite no Cerrado
    </p>
  </div>
)