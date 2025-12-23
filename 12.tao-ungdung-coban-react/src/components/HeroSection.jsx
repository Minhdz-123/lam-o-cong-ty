// src/components/HeroSection.jsx
export default function HeroSection() {
  return (
    <section
      className="relative h-[600px] bg-cover bg-center"
      style={{ backgroundImage: "url('/banner.PNG')" }}
    >
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-12">
        <h1 className="text-white text-5xl font-bold max-w-4xl leading-snug">
          Sunny Manor tư vấn - đầu tư - kinh doanh - phát triển hệ sinh thái
          bất động sản chuyên nghiệp
        </h1>
        <a href="#" className="text-white underline mt-4 font-semibold">
          Xem thêm
        </a>
      </div>
    </section>
  );
}
