import { useState } from "react";
import comment from "./Component/comment"; 
import useNode from "./hooks/useNode";
const comments = {
   id: 1,
  items: [], 
};
function App() {
  const [commentsData, setCommentsData] = useState(comments);
  const [insertNode, editNode, deleteNode] = useNode();

  const handleInsertNode = (folderId, item) => {
    const finalStructure = insertNode(commentsData, folderId, item);
    setCommentsData(finalStructure);
  };

  const handleDeleteNode = (folderId) => {
    const finalStructure = deleteNode(commentsData, folderId);
    setCommentsData(finalStructure);
  };

  return (
    <div className="App">
      <comment
        handleInsertNode={handleInsertNode}
        handleDeleteNode={handleDeleteNode}
        comment={commentsData}
      />
    </div>
  );
}

export default App;
