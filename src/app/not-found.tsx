export default function notfound() {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col">
      <h1 className="text-5xl font-bold mb-2">404</h1>
      <h1 className="text-md font-medium">Oops! You're Lost.</h1>

      <a href="/">
        <button className="btn btn-primary mt-8">Back To Homepage</button>
      </a>
    </div>
  );
}
