import React from "react";
import { StoryFn,Meta } from "@storybook/react";
import DiaryGrids from "./DairyContainerItem";

export default {
  title: "Components/DiaryGrids",
  component: DiaryGrids,
  parameters: {
    layout: 'centered',
    nextjs: {
    appDirectory: true,
  },
  },
} as Meta<typeof DiaryGrids>;

const Template: StoryFn<typeof DiaryGrids> = (args) => <DiaryGrids {...args} />;

export const Default = Template.bind({});
Default.args = {
  diary: {
    id: 1,
    userId: "1",
    title: "My Diary",
    content: "This is the content of my diary.",
    isPublic: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
};

export const MultipleGrids = () => (
  <div>
    <DiaryGrids
      diary={{
        id: 1,
        userId: "1",
        title: "Diary 1",
        content: "Content of Diary 1",
        isPublic: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      }}
    />
    <DiaryGrids
      diary={{
        id: 2,
        userId: "2",
        title: "Diary 2",
        content: "Content of Diary 2",
        isPublic: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      }}
    />
    <DiaryGrids
      diary={{
        id: 3,
        userId: "3",
        title: "Diary 3",
        content: "Content of Diary 3",
        isPublic: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      }}
    />
  </div>
);
