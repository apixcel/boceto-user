import TextEditor from "../ui/TextEditor";
interface IProps {
  onChange: (item: string) => void;
  defaultValue?: string;
}
const RetiarTextEditor: React.FC<IProps> = ({ onChange, defaultValue }) => {
  return (
    <>
      <h3 className="text-[24px] text-primatyTxt font-[700] tracking-[-0.114px]">
        Editar Texto
      </h3>

      <TextEditor
        defaultValue={defaultValue || ""}
        onChange={(newText) => onChange(newText)}
      />
    </>
  );
};

export default RetiarTextEditor;
