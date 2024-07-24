'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Bold from '@tiptap/extension-bold';
import Italic from '@tiptap/extension-italic';
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';

const Tiptap = ({ onContentChange }: any) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Bold,
      Italic,
      Underline,
      Link,
      Image,
    ],
    content: '<p>Lorem Ipsum</p>',
    onUpdate: ({ editor }) => {
      // Notify parent component of content changes
      if (onContentChange) {
        onContentChange(editor.getHTML());
      }
    },
  });

  if (!editor) {
    return null;
  }

  const handleImageUpload = (event: any) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const url = reader.result;
      editor.chain().focus().setImage({ src: url }).run();
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-4 bg-gray-100">
      <div className="menu flex space-x-2 mb-4">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className="btn"
        >
          Bold
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className="btn"
        >
          Italic
        </button>
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          disabled={!editor.can().chain().focus().toggleUnderline().run()}
          className="btn"
        >
          Underline
        </button>
        <button
          onClick={() => {
            const url = prompt('Enter the URL');
            if (url) {
              editor.chain().focus().setLink({ href: url }).run();
            }
          }}
          className="btn"
        >
          Link
        </button>
        <button
          className="btn"
          onClick={() => document.getElementById('fileInput')?.click()}
        >
          Image
        </button>
        <input
          type="file"
          id="fileInput"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
        />
      </div>
      <EditorContent editor={editor} className="prose bg-white p-4 rounded-lg shadow" />
    </div>
  );
};

export default Tiptap;
