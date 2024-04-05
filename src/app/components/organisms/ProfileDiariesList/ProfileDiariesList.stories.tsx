import type { Meta, StoryObj } from "@storybook/react";
import ProfileDiariesList from "./ProfileDiariesList";

const meta: Meta<typeof ProfileDiariesList> = {
  title: "Organisms/ProfileDiariesList",
  component: ProfileDiariesList,
  parameters: {
    layout: "centered",
    nextjs: {
      appDirectory: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof ProfileDiariesList>;

const sampleDiary = {
  id: 1,
  userId: "user1",
  title: "Sample Diary",
  content: "This is a sample diary content.",
  isPublic: true,
  createdAt: new Date("2023-06-01"),
  updatedAt: new Date("2023-06-01"),
};

export const Default: Story = {
  args: {
    diary: sampleDiary,
  },
};

export const LongTitle: Story = {
  args: {
    diary: {
      ...sampleDiary,
      title: "This is a very long diary title that spans multiple lines.",
    },
  },
};

export const PrivateDiary: Story = {
  args: {
    diary: {
      ...sampleDiary,
      isPublic: false,
    },
  },
};
