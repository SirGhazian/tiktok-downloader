"use client";
import SectionDownload from "@/components/SectionDownload";
import SectionInput from "@/components/SectionInput";
import { useState } from "react";

export default function Home() {
  const [isDownload, setIsDownload] = useState(false);
  const [URL, setURL] = useState("");

  function downloadContent(inputURL: string) {
    setURL(inputURL);
    console.log("Download");
    setIsDownload(true);
  }

  return (
    <>
      <main className="w-screen">
        <section className="w-full pt-14 bg-secondary">
          {!isDownload && <SectionInput getUrl={(inputURL) => downloadContent(inputURL)} />}
          {isDownload && <SectionDownload downloadClick={isDownload} passUrl={URL} />}
        </section>
      </main>
    </>
  );
}
