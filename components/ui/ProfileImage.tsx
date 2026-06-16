import Image from "next/image";

export function ProfileImage() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[360px] overflow-hidden rounded-[2.5rem] border border-[var(--border)] p-4">
      <div className="h-full w-full overflow-hidden rounded-[1.75rem]">
        <Image
          src="/shivam.jpg"
          alt="Shivam"
          width={500}
          height={500}
          className="h-full w-full object-cover"
          priority
        />
      </div>
    </div>
  );
}