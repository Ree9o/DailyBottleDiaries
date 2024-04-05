// DiaryCard.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import DiaryCard from './DairyCard';

const meta: Meta<typeof DiaryCard> = {
  title: 'Components/Molecules/DiaryCard',
  component: DiaryCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof DiaryCard>;

export const Default: Story = {
  args: {
    diaryData: {
      id: 1,
      userId: '1',
      title: 'サンプルタイトル',
      content: 'これはサンプルの日記の内容です。長い文章を入力してみましょう。overflow-y-autoクラスによってスクロール可能になっているはずです。',
      isPublic: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    name: 'ユーザー名',
    isCreateUser: true,
  },
};

export const LongTitle: Story = {
  args: {
    ...Default.args,
    diaryData: {
      ...Default.args?.diaryData!,
      title: 'これは非常に長いタイトルです。break-wordsクラスによって折り返されるはずです。'.repeat(3),
    },
  },
};

export const LongContent: Story = {
  args: {
    ...Default.args,
    diaryData: {
      ...Default.args?.diaryData!,
      content: 'これは非常に長いコンテンツです。'.repeat(50),
    },
  },
};

export const NotCreatedByUser: Story = {
  args: {
    ...Default.args,
    isCreateUser: false,
  },
};
