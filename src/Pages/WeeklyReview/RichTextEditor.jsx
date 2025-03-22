import { useRef, useEffect } from 'react';
import { FiBold, FiItalic, FiList, FiAlignLeft, FiAlignCenter, FiAlignRight, FiAlignJustify } from 'react-icons/fi';

const RichTextEditor = ({ id, value, onChange }) => {
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current && value !== editorRef.current.innerHTML) {
      editorRef.current.innerHTML = value;
      adjustHeight();
    }
  }, [value]);

  const execCommand = (command, value = null) => {
    const selection = window.getSelection();
    const range = selection.rangeCount > 0 ? selection.getRangeAt(0) : null;

    document.execCommand(command, false, value);

    if (range) {
      selection.removeAllRanges();
      selection.addRange(range);
    }

    onChange(editorRef.current.innerHTML);
    adjustHeight();
  };

  const adjustHeight = () => {
    if (editorRef.current) {
      editorRef.current.style.height = "auto";
      editorRef.current.style.height = editorRef.current.scrollHeight + "px";
    }
  };

  const handleInput = () => {
    onChange(editorRef.current.innerHTML);
    adjustHeight();
  };

  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="bg-gray-50 p-2 border-b flex gap-2">
        <button type="button" onClick={() => execCommand('bold')} className="p-2 hover:bg-gray-200 rounded"><FiBold /></button>
        <button type="button" onClick={() => execCommand('italic')} className="p-2 hover:bg-gray-200 rounded"><FiItalic /></button>
        <button type="button" onClick={() => execCommand('insertUnorderedList')} className="p-2 hover:bg-gray-200 rounded"><FiList /></button>
        <button type="button" onClick={() => execCommand('justifyLeft')} className="p-2 hover:bg-gray-200 rounded"><FiAlignLeft /></button>
        <button type="button" onClick={() => execCommand('justifyCenter')} className="p-2 hover:bg-gray-200 rounded"><FiAlignCenter /></button>
        <button type="button" onClick={() => execCommand('justifyRight')} className="p-2 hover:bg-gray-200 rounded"><FiAlignRight /></button>
        <button type="button" onClick={() => execCommand('justifyFull')} className="p-2 hover:bg-gray-200 rounded"><FiAlignJustify /></button>
      </div>
      <div
        ref={editorRef}
        contentEditable
        className="p-4 min-h-[200px] w-full focus:outline-none"
        onInput={handleInput}
        id={id}
        dir="ltr"
        style={{
          unicodeBidi: 'bidi-override',
          overflow: "hidden",
          resize: "none",
          minHeight: "100px",
          width: "100%",
        }}
      />
    </div>
  );
};

export default RichTextEditor;