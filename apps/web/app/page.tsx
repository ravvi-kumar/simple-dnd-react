"use client";

import { Draggable } from "@repo/ui/Draggable";
import { Droppable } from "@repo/ui/Droppable";

export default function Page(): JSX.Element {
  return (
    <main>
      <Draggable pos={{ x: 0, y: 0 }}>
        <p>abc</p>
      </Draggable>
      <div style={{ margin: "200px" }}>
        <Droppable
          onDrop={(e) => {
            console.log("dropped in web", e);
          }}
        >
          <div
            style={{
              border: "2px dashed white",
              height: "300px",
              width: "300px",
            }}
          ></div>
        </Droppable>
      </div>
    </main>
  );
}
