import { useEffect, useState } from "react";

export default function SectionInput({ getUrl }: { getUrl: (text: string) => void }) {
  const [inputValue, setInputValue] = useState("");

  return (
    <section className="w-full flex flex-col items-center sm:px-4 sm:py-12 md:px-0 md:py-24">
      <div className="flex flex-col sm:items-start md:items-center">
        <h1 className="font-bold sm:text-[2.2rem] md:text-[3rem] leading-10 mb-2">
          TikTok Post Downloader
        </h1>
        <h1 className="sm:text-[1rem] md:text-xl sm:mb-8 md:mb-12">
          A Solution For All in One TikTok Downloader.
        </h1>
      </div>

      <div className="sm:w-full md:w-[80%] xl:w-[55%] flex sm:flex-col md:flex-row md:mb-0 sm:mb-12">
        <div className="sm:mr-0 md:mr-2 sm:my-2 md:my-0 relative w-full">
          {/* <div className="absolute aspect-square h-full right-0 flex items-center justify-center">
            <i className="fa-regular fa-paste text-xl p-2 rounded-lg hover:text-gray-500" />
          </div> */}
          <input
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter Link Here"
            className="input input-bordered input-primary w-full duration-100 transition-all"
          />
        </div>

        <button onClick={() => getUrl(inputValue)} className="btn btn-primary">
          Download
        </button>
      </div>
    </section>
  );
}
