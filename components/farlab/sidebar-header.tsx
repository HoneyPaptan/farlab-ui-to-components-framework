import Image from "next/image";

export function SidebarHeader() {
  return (
    <div className="flex items-center px-4 py-2.5 rounded-[6px] shrink-0 w-full">
      {/* Logo — 74×32 px, proportional. Light mode uses lightmode-logo, dark uses darkmode-logo */}
      <div className="relative h-8 w-[74px] shrink-0">
        {/* Light mode logo */}
        <Image
          src="/lightmode-logo.png"
          alt="FAR AI"
          fill
          className="object-contain object-left dark:hidden"
          unoptimized
        />
        {/* Dark mode logo */}
        <Image
          src="/darkmode-logo.png"
          alt="FAR AI"
          fill
          className="object-contain object-left hidden dark:block"
          unoptimized
        />
      </div>
    </div>
  );
}

