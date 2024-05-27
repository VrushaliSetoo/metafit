import Link from "next/link";
import Image from "next/image";

export default function Logo({
  src,
  children,
}: {
  src: string | null;
  children?: React.ReactNode;
}) {
  return (
    <Link
      href="/"
      aria-label="Back to homepage"
      className="flex items-center p-2"
    >
      {src && (
        <Image
          className="w-9/12 sm:w-full"
          src={src}
          alt="logo"
          width={180}
          height={50}
        />
      )}
      <div className="ml-2">{children}</div>
    </Link>
  );
}
