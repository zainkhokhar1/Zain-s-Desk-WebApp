import { useState } from "react";
import ChapterCreateContext from "./CreateChapterContext";

const ChapterCreateProvider = ({ children }) => {
  const [createChapter, setCreateChapter] = useState(false);

  return (
    <ChapterCreateContext.Provider value={[createChapter, setCreateChapter]}>
      {children}
    </ChapterCreateContext.Provider>
  );
};

export default ChapterCreateProvider;
