import React, { PropsWithChildren } from "react";
import { Transform } from "stream";

export default function HeroOrbit({
  children,
  size,
  rotation,
}: PropsWithChildren<{ size: number; rotation: number }>) {
  return (
    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div
        className="flex items-start justify-start "
        style={{
            transform:`rotate(${rotation}deg)`,
          width: `${size}px`,
          height: `${size}px`,
        }}
      >
        <div className="inline-flex " style={{
            transform: `rotate(-${rotation * -1}deg)`,
        }}>{children} </div>
      </div>
    </div>
  );
}
