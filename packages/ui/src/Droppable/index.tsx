"use client";

import { PropsWithChildren } from "react";

export const Droppable = ({
  children,
  onDrop,
}: PropsWithChildren<{ onDrop: (val: any) => void }>) => {
  return (
    <div
      style={{ position: "relative" }}
      onDragOver={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
      onDrop={(e) => {
        console.log("dropped", e);
        onDrop(e);
      }}
    >
      {children}
    </div>
  );
};
