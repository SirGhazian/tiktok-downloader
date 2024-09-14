import { useState } from "react";

export default function Carousel({
  slide,
  images,
  onSlideChange,
}: {
  slide: number;
  images: string[];
  onSlideChange: (index: number) => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(slide);

  function prevSlide() {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    onSlideChange(newIndex);
  }
  function nextSlide() {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    onSlideChange(newIndex);
  }

  return (
    <div className="relative w-full h-[25rem] mx-auto">
      <div className="overflow-hidden relative h-full rounded-lg">
        <div
          className="flex transition-transform duration-500 h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className="min-w-full h-full object-cover"
            />
          ))}
        </div>
      </div>

      <div
        onClick={prevSlide}
        className="absolute top-1/2 left-0 px-2 flex items-center justify-center transform -translate-y-1/2 h-full"
      >
        <button className="bg-primary px-4 py-2 rounded-xl font-bold text-2xl text-white">
          {`<`}
        </button>
      </div>

      <div
        onClick={nextSlide}
        className="absolute top-1/2 right-0 px-2 flex items-center justify-center transform -translate-y-1/2 h-full"
      >
        <button className="bg-primary px-4 py-2 rounded-xl font-bold text-2xl text-white">
          {`>`}
        </button>
      </div>
    </div>
  );
}
