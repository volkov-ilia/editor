import TextType from "../../../../types/Slate/Utils/fields/map/TextType"

const rule: React.FC<TextType> = ({ placeholder = "Type value", onChange }) => {
  return (
    <input
      type="text"
      className={
        "area w-full p-2 border rounded border-gray outline-none focus:border-primary transition-border resize-x-none"
      }
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}

export default rule
