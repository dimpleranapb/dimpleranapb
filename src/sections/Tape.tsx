const words = [
  "Performant",
  "Accessible",
  "Reliable",
  "Secure",
  "Scalable",
  "Responsive",
  "Efficient",
  "Flexible",
  "Robust",
  "Dynamic",
  "Customizable",
  "Optimized",
  "Seamless",
  "User-friendly",
  "Intuitive",
  "Innovative",
  "Elegant",
  "Modular",
  "Extensible",
  "Cross-platform",
  "Versatile",
  "Adaptable",
  "Resilient",
  "Powerful",
  "Lightweight",
];

import StarIcon from "@/assets/icons/star.svg";
import { Fragment } from "react";
export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400  -rotate-3 -mx-1">
       <div className="flex [mask-image:liner-gradient(to_right, transparent,black_10%,black_90%,transparent -mx-3)]">
        <div className="flex flex-none gap-4 py-3 animate-move-left [animation-duration:30s]">
          {[...new Array(2)].fill(0).map((_,idx)=> (
              <Fragment key={idx}>
                 {words.map((word) => (
              <div key={word} className="inline-flex gap-4 items-center">
                <span className="text-gray-900 uppercase font-extrabold text-sm">{word}</span>
                <StarIcon className="size-6 text-gray-900 -rotate-12" />
              </div>
            ))}
              </Fragment>
          ))}
           
          </div>
        </div>
        </div>
      </div>
  );
};
