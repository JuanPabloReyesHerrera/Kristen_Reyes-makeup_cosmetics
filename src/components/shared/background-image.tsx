import Image from "next/image";

type BackGroundImageProps = {
  imageSrc: string;
  alt: string;
  className?: string;
};

export function BackGroundImage({
  imageSrc,
  alt,
  className,
}: BackGroundImageProps) {
  return (
    <div className={`fixed left-0 top-0 h-dvh w-full ${className} `}>
      <div className={`relative inset-0 w-full h-full `}>
        <Image
          className={`object-cover md:object-[center_5%]`}
          src={imageSrc}
          alt={alt}
          sizes="(max-width: 768px) 100dvw, (max-width: 1200px) 80vw, 50dvw"
          fill
          priority
        />
      </div>
    </div>
  );
}
