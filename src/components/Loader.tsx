export default function Loader() {
  return (
    <section className="w-full flex flex-col items-center justify-center">
      <div className="dot-spinner mb-8">
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
      </div>

      <h1 className="font-medium text-center">Please Wait, Your Files Are Being Downloaded...</h1>
    </section>
  );
}
