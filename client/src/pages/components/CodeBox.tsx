import React, { useState } from "react";
import Editor from "@monaco-editor/react";

const CodeBox = () => {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("");
  // "vs-dark"
  const [theme, setTheme] = useState("vs-dark");
  const languages = ["Python", "Java", "CPP"];
  return (
    <div className="codebox">
      <div className="codebox-header">
        <select name="language" className="codebox-lang-select">
          {languages.map((lang) => (
            <option style={{}} value={lang} className="codebox-lang-option">
              {lang}
            </option>
          ))}
        </select>
      </div>

      <Editor
        // height="90vh"
        defaultLanguage="javascript"
        defaultValue="// some comment"
        theme={theme}
      />

      <div className="codebox-footer">
        <button>Submit</button>
        <button>Run</button>
      </div>
    </div>
  );
};

export default CodeBox;
