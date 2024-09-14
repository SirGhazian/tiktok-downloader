import Image from "next/image";

export default function page() {
  return (
    <>
      <main className="w-full h-full flex sm:mt-48 md:mt-0 md:items-center justify-center">
        <div className="group flex flex-col justify-start items-start gap-2 w-96 h-72 duration-500 relative rounded-xl rounded-br-[5rem] p-4 bg-secondary hover:-translate-y-2 hover:shadow-xl shadow-md">
          <Image
            src="/img/about.png"
            width={200}
            height={200}
            alt=""
            className="absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-8 -right-0 w-32 h-32 rounded-full border-2 border-accent"
          />

          <div className="">
            <h2 className="text-2xl font-bold mb-2">About.</h2>
            <p className="text-md">
              The goal of this project is to provide a convenient way for users to save their
              favorite TikTok content locally to their devices. If you find this tool useful, please
              consider starring this project on GitHub using the button below to show your support!
            </p>
          </div>
          <a href="https://github.com/SirGhazian" target="_blank">
            <button className="bg-[#201E43] hover:bg-gray-700 duration-300 text-gray-100 mt-6 rounded p-2 px-6">
              Visit Github
            </button>
          </a>
        </div>
      </main>
    </>
  );
}
