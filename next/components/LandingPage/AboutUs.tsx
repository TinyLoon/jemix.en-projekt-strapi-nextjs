import Image from "next/image";

interface AboutUsProps {
  title: string;
  text: string;
  image?: {
    url: string;
    alternativeText?: string;
    width?: number;
    height?: number;
  };
}

export function AboutUs({ title, text, image }: AboutUsProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-gray-700 leading-relaxed">{text}</p>
        </div>
        {image?.url && (
          <div className="relative w-full h-80">
            <Image
              src={image.url}
              alt={image.alternativeText || "About Us"}
              fill
              className="object-cover rounded-xl shadow-lg"
            />
          </div>
        )}
      </div>
    </section>
  );
}