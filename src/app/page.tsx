"use client"
import SendToBlogWidget from "@/components/SendToBlogWidget";
import Tiptap from "@/components/TipTap";
import { Flex, Text, Button } from "@radix-ui/themes";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [content, setContent] = useState('');
  return (
    <main className="flex relative min-h-screen min-w-screen flex-col items-center justify-between p-24">
      <Flex direction="column" gap="2" className="w-full h-full">
        <SendToBlogWidget content={content}/>
        <Tiptap onContentChange={setContent} />
      </Flex>
      <div className="absolute top-0 right-0 p-10">
        <Text>
          T to open the theme panel
        </Text>
      </div>
    </main>
  );
}
