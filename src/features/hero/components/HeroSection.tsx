import HeroImage from "@/assets/hero-image.png";

type HeroSectionProps = {
  name: string;
  skills: string;
  about: string;
  availability?: string;
  badge?: string;
};

export function HeroSection({
  name,
  skills,
  about,
  availability = "Available for new opportunities",
}: HeroSectionProps) {
  const firstName = name.split(" ")[0];

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden text-black bg-[linear-gradient(to_bottom,#f4ffd9_0%,#c8f56a_30%,#9bee2f_60%,#ffffff_100%)]"
    >
      {/* Portrait (behind text) */}
      <img
        src={HeroImage}
        alt={name}
        className="pointer-events-none absolute bottom-0 left-1/2 z-10 h-[90vh] w-auto max-w-none -translate-x-1/2 object-contain object-bottom grayscale"
      />

      {/* Headline (in front of portrait) */}
      <div className="absolute inset-x-0 top-[18%] z-20 text-center px-6">
        <h1 className="text-6xl font-light leading-none tracking-tight md:text-8xl">
          Hi I'm {firstName}
        </h1>
        <p className="-mt-1 font-serif italic text-7xl font-light leading-none tracking-tight md:text-[8rem]">
          {skills}
        </p>
      </div>

      {/* Availability pill */}
      <div className="absolute bottom-10 left-6 z-30 flex items-center gap-3 rounded-full bg-white px-4 py-3 text-sm shadow-sm md:left-10">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-lime-300/60">
          <span className="h-2.5 w-2.5 rounded-full bg-lime-500" />
        </span>
        {availability}
      </div>

      {/* Fade putih di bawah foto */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-40 bg-linear-to-t from-white to-transparent" />

      {/* About */}
      <p className="absolute bottom-10 right-6 z-30 max-w-[16rem] text-left text-base leading-snug md:right-10 md:max-w-xs">
        {about}
      </p>
    </section>
  );
}
