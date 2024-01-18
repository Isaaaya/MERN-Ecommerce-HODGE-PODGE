import { useEditor, EditorContent } from "@tiptap/react";
import Placeholder from "@tiptap/extension-placeholder";
import StarterKit from "@tiptap/starter-kit";
import { tiptapButtonsData } from "utils/constants";

export const Tiptap = ({ setValue, placeholder, content }) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: {
          HTMLAttributes: {
            class: "list-disc",
          },
        },
        orderedList: {
          HTMLAttributes: {
            class: "list-decimal",
            itemTypeName: "listItem",
          },
        },
        heading: {
          levels: [1],
          HTMLAttributes: {
            class: "text-2xl text-gray-700",
          },
        },
      }),
      Placeholder.configure({
        placeholder,
        emptyNodeClass:
          "first:before:text-gray-400 first:before:float-left first:before:content-[attr(data-placeholder)] first:before:pointer-events-none",
      }),
    ],
    editorProps: {
      attributes: {
        class:
          "border-2 min-h-[200px] rounded-md mt-5 p-5 overflow-y-auto [&_p]:font-sans",
      },
    },
    content,

    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      setValue(html);
    },
  });

  const TiptapButton = ({ icon, command, args, title, editor }) => {
    const buttonStyling = "p-1 rounded-md hover:bg-gray-50";
    const activeButtonStyling = "bg-sky-100 hover:bg-sky-100";

    const handleClick = () => {
      if (editor) {
        const chain = editor.chain().focus();

        if (args) {
          chain[command](args).run();
        } else {
          chain[command]().run();
        }
      }
    };

    return (
      <button
        type="button"
        onClick={handleClick}
        className={`${buttonStyling} ${
          editor && editor.isActive(title) ? activeButtonStyling : ""
        }`}
      >
        {icon}
      </button>
    );
  };

  const MenuBar = () => (
    <div className="flex items-center justify-between gap-3 px-5 overflow-x-auto border-2 rounded-md h-14">
      {tiptapButtonsData.map(({ icon, command, args, title }, index) => (
        <TiptapButton
          key={index}
          icon={icon}
          command={command}
          args={args}
          title={title}
          editor={editor}
        />
      ))}
    </div>
  );

  return (
    <div>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};
