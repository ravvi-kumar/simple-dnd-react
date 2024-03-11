"use client";
import { PropsWithChildren, useState } from "react";

export const Draggable = ({
  children,
}: PropsWithChildren<{ pos: { x: number; y: number } }>) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  return (
    <div
      style={{ position: "absolute", top: pos.y, left: pos.x }}
      draggable={true}
      onDrag={(e) => {
        console.log("onDrag", e);
      }}
    >
      {children}
    </div>
  );
};
