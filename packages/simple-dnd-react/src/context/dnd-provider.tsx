// import { PropsWithChildren, createContext, useContext } from "react";

// const DndContext = createContext(null);

// export const DndProvider = ({ children }: PropsWithChildren<{}>) => {
//   return <DndContext.Provider value={null}>{children}</DndContext.Provider>;
// };

// export const useDndContext = () => {
//   const dndContext = useContext(DndContext);
//   if (dndContext === null) {
//     throw new Error(
//       "you must wrap your app in a DndProvider inorder to use 'useDndContext'"
//     );
//   }
//   return dndContext;
// };
