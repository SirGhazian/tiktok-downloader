"use client";
import { cache, useEffect, useState } from "react";
import Loader from "./Loader";
import Carousel from "./Carousel";

export default function SectionDownload({
  passUrl,
  downloadClick,
}: {
  passUrl: string;
  downloadClick: boolean;
}) {
  const [data, setData] = useState(null);
  const baseApiUrl = "https://api.tiklydown.eu.org";
  const [videoSrc, setVideoSrc] = useState("");
  const [musicSrc, setMusicSrc] = useState("");
  const [imgSrc, setImgSrc] = useState([]);
  const [imgSrcSlide, setImgSrcSlide] = useState(0);
  const [postType, setPostType] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchUrl() {
      try {
        let res = await fetch(`${baseApiUrl}/api/download/v3?url=${passUrl}`, {
          cache: "no-store",
        });
        let data = await res.json();

        if (data.result.status === "error") {
          setError(true);
        } else {
          setData(data);
          setMusicSrc(data.result.music);

          if (data.result.type === "video") {
            setPostType("video");
            setVideoSrc(data.result.video);
          } else {
            setPostType("image");
            setImgSrc(data.result.images);
          }
        }
        console.log(data);
      } catch (err) {
        console.error("Fetch error: ", err);
        setError(true);
      }
    }

    if (downloadClick) {
      fetchUrl();
    }
  }, [downloadClick]);

  return (
    <div className="w-full flex justify-center sm:px-4 sm:py-12">
      {!data && !error && <Loader />}

      {data && !error && (
        <div className="sm:w-full md:w-[60%] xl:w-[40%] flex flex-col items-center">
          <h1 className="text-2xl font-bold">{postType === "video" ? "Video" : "Images"} Result</h1>

          <div className="my-8 w-full h-full">
            {postType === "video" && videoSrc && (
              <video
                width="320"
                height="320"
                controls
                autoPlay
                muted
                className="w-full h-[25rem] rounded-lg mb-4 object-cover"
              >
                <source src={videoSrc} type="video/mp4" />
              </video>
            )}

            {postType === "image" && imgSrc && (
              <Carousel
                slide={imgSrcSlide}
                images={imgSrc}
                onSlideChange={(index) => setImgSrcSlide(index)}
              />
            )}
          </div>

          <div className="w-full grid  grid-cols-2 gap-2">
            <button onClick={() => (window.location.href = musicSrc)} className="btn btn-primary">
              Download Music
            </button>
            {postType === "video" && videoSrc && (
              <button onClick={() => (window.location.href = videoSrc)} className="btn btn-primary">
                Download Video
              </button>
            )}

            {postType === "image" && imgSrc && (
              <button
                onClick={() => (window.location.href = imgSrc[imgSrcSlide])}
                className="btn w-full btn-primary"
              >
                Download Image {imgSrcSlide + 1}
              </button>
            )}
          </div>
        </div>
      )}

      {error && !data && (
        <div className="flex flex-col items-center">
          <p className="font-bold text-xl p-4 bg-primary/20 rounded-xl mb-4">An Error Occurred!</p>
          <div>
            <li>The API server might be down.</li>
            <li>The link might be incorrect.</li>
            <li>Please try again.</li>
          </div>
        </div>
      )}
    </div>
  );
}
