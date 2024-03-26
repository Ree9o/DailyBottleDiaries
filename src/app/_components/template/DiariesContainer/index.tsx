import getDiaries from "@/src/app/services/getDialies";
import React from "react";
import DiaryGrids from "../../organisms/DiaryGrids/index";

export default async function DiariesContainer() {
  const diaries = await getDiaries();
  return (
    <div className=" justify-center w-full h-screen">
      {diaries.map((diary) => (
        <div key={diary.id}>
          <DiaryGrids diary={diary} />
        </div>
      ))}
    </div>
  );
}
