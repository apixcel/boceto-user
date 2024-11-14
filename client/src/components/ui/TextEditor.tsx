import { PrimeReactProvider } from "primereact/api";
import { Editor } from "primereact/editor";
import { CSSProperties, useState } from "react";

interface IProps {
  defaultValue?: string;
  onChange?: (value: string) => void;
  className?: string;
  style?: CSSProperties;
  height?: number;
}

const TextEditor: React.FC<IProps> = ({
  className,
  defaultValue,
  onChange,
  style,
  height,
}) => {
  const [editorValue, setEditorValue] = useState(defaultValue || "");
  const editorHeight = height || 200;

  return (
    <PrimeReactProvider>
      <Editor
        className={className || ""}
        style={{
          height: editorHeight + "px",
          background: "white",
          color: "black",
          ...style,
        }}
        value={editorValue}
        onTextChange={(e) => {
          const newValue = e.htmlValue || "";
          setEditorValue(newValue);
          onChange && onChange(newValue);
        }}
      />
    </PrimeReactProvider>
  );
};

export default TextEditor;
