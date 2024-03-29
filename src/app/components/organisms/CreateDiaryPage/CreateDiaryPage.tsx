"use client";
import React, { useState } from "react";
import LabeledInput from "../../molecules/LabeledInput/LabeledInput";
import Button from "../../atoms/Button/Button";
import createDiary from "@/src/app/services/createDiary";
import LabeledCheckbox from "../../molecules/LabeledCheckbox/LabeledCheckbox";
import { useRouter } from "next/navigation";

export default function CreateDiaryPage({ userid }: { userid: string }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isCheck, setIsCheck] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log(userid);
      await createDiary({ userId: userid, title, content, isPublic: isCheck });
      router.push("/");
    } catch (error) {
      window.alert("投稿できませんでした");
      console.error(error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="letter size-9/12 ">
        <LabeledInput
          id="title"
          label="タイトル"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />{" "}
        <LabeledInput
          id="content"
          label="コンテンツ"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <LabeledCheckbox
          id="isPublic"
          label="公開する"
          checked={isCheck}
          onChange={(e) => setIsCheck(e.target.checked)}
        />
        <Button type="submit">作成</Button>
      </form>
    </>
  );
}
