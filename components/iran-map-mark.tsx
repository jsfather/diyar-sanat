import Image from "next/image";

export function IranMapMark({ className = "" }: { className?: string }) {
  return (
    <Image
      className={`iran-map-svg ${className}`}
      src="/images/iran-map.svg"
      alt=""
      width={512}
      height={507}
      aria-hidden="true"
    />
  );
}
