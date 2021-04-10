import { useEffect } from "react";

export default functionuseDocumentTitle(count) {
   useEffect(() => {
    document.title = `count - ${count}`;
  }, [count]);
}