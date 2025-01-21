const words = [
  "Performant",
  "Accessible",
  "Reliable",
  "Secure",
  "Scalable",
  "Responsive",
];
import StarIcon from "@/assets/icons/star.svg";
export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400  -rotate-3 -mx-1">
       <div className="flex [mask-image:liner-gradient(to_right, transparent,black_10%,black_90%,transparent -mx-3)]">
        <div className="flex flex-none gap-4 py-3">
          <div className="flex gap-4 items-center">
            {words.map((word) => (
              <div key={word}>
                <span className="text-gray-900 uppercase font-extrabold text-sm">{word}</span>
                <StarIcon classname="size-6 text-gray-900 -rotate-12" />
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};
