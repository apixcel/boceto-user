import React, { useState } from "react";
import TextEditor from "../ui/TextEditor";
import { SaveIcon } from "lucide-react";

const RetiarTextEditor = () => {
  // State to manage the text content in the editor
  const [editorText, setEditorText] = useState("<p>Initial content here...</p>");

  // Handle saving the changes (for now, just logging the content)
  const handleSave = () => {
    console.log("Saved Text:", editorText);
    // You can add further logic here, such as sending the text to a server.
  };

  return (
    <>
      <h3 className="text-[24px] text-primatyTxt font-[700] tracking-[-0.114px]">
        Editar Texto
      </h3>
      
      {/* Pass editorText as value and handle change via setEditorText */}
      <TextEditor 
        defaultValue={editorText} 
        onChange={(newText) => setEditorText(newText)} 
      />

      {/* Save button */}
      <button
        className="buttonStyle"
        onClick={handleSave}
      >
        <SaveIcon />  
        Save Changes
      </button>
    </>
  );
};

export default RetiarTextEditor;
