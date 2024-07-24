'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Bold from '@tiptap/extension-bold';
import Italic from '@tiptap/extension-italic';
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import { Box, Button, Flex, TextField } from '@radix-ui/themes';
import axios from 'axios';
import { useState } from 'react';

const SendToBlogWidget = ({ content }: { content: string }) => {
  const [id, setId] = useState(''); // State for the first text field
  const [code, setCode] = useState(''); // State for the second text field

  const postArticle = async () => {
    const answer = await axios.post('https://mp.anfa.cloud/directPost', {
      id: id,
      code: code,
      content: content
    }).catch((err) => {
      console.error(err)
    });
    console.log(answer);
  }
  return (
    <Flex align="center" gapX="2" justify="center" className="p-4 bg-gray-100">
      <Flex direction="column" align="center" gapX="2" justify="center" className="p-4 w-full bg-gray-100">
        <Box width="100%">
          <TextField.Root
            value={id}
            onChange={(e) => setId(e.target.value)} className="" size="1" placeholder="id" />
        </Box>
        <Box width="100%">
          <TextField.Root
            value={code}
            onChange={(e) => setCode(e.target.value)}
            content='test' size="1" placeholder="code" />
        </Box>
      </Flex>
      <Button onClick={postArticle} size="1" variant="soft">
        Send
      </Button>
    </Flex>
  );
};

export default SendToBlogWidget;