import getDiaries from "@/src/app/services/getDialies";
import React from "react";
import DiaryGrids from "../../organisms/DiaryContainerItem/DairyContainerItem";
import DiaryContaienerItem from "../../organisms/DiaryContainerItem/DairyContainerItem";

export default async function DiariesContainer() {
  const diaries = await getDiaries();

  return (
    <>
      <div className="overflow-auto h-screen w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  items-center justify-items-center px-4 py-8 bg-white  shadow-md p-6 ">
        {diaries.map((diary) => (
          <div key={diary.id} className="border border-black rounded-lg size-60">
            <DiaryContaienerItem diary={diary} />
          </div>
        ))}
      </div>
    </>
  );
}
