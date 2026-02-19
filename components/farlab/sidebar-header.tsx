import Image from "next/image";

const FAR_LOGO_URL = "https://www.figma.com/api/mcp/asset/475cc4c5-d68c-4a81-8dc3-ed2258d917ca";

export function SidebarHeader() {
  return (
    <div className="flex items-center px-4 py-2.5 rounded-[6px] shrink-0 w-full">
      {/* Logo — 74×32 px, proportional */}
      <div className="relative h-8 w-[74px] shrink-0">
        <Image
          src={FAR_LOGO_URL}
          alt="FAR AI"
          fill
          className="object-contain object-left"
          unoptimized
        />
      </div>
    </div>
  );
}
