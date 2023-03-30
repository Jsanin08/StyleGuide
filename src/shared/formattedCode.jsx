import React, { useEffect } from "react";
import Prism from "prismjs";

export default function FormattedCode({ code, language }) {
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);
  return (
    <div className="Code">
      <pre>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}