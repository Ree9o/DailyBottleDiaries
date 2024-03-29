import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import DiaryCard from "./DairyCard";

export default {
  title: "Components/DiaryCard",
  component: DiaryCard,
} as ComponentMeta<typeof DiaryCard>;

const Template: ComponentStory<typeof DiaryCard> = (args) => <DiaryCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  diaryData: {
    id: 1,
    userId: "1",
    title: "My Diary",
    content: "This is the content of my diary.",
    isPublic: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  name: "John Doe",
};

export const LongContent = Template.bind({});
LongContent.args = {
  diaryData: {
    id: 2,
    userId: "2",
    title: "My Long Diary",
    content: `
      This is a long diary entry.
      It contains multiple paragraphs and a lot of text.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    `,
    isPublic: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  name: "Jane Smith",
};
