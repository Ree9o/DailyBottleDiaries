// Menu.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import Menu from "./Menu";
import { Session } from "next-auth";

const meta: Meta<typeof Menu> = {
  title: "Organisms/Menu",
  component: Menu,
  parameters: {
    layout: "centered",
    nextjs: {
      appDirectory: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Menu>;

const mockSession: Session = {
  user: {
    name: "John Doe",
    email: "john@example.com",
    image: "https://example.com/avatar.jpg",
  },
  expires: "2023-12-31T23:59:59.999Z",
};

export const LoggedIn: Story = {
  args: {
    session: mockSession,
  },
};

export const LoggedOut: Story = {
  args: {
    session: null,
  },
};

export const MobileLoggedIn: Story = {
  args: {
    session: mockSession,
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

export const MobileLoggedOut: Story = {
  args: {
    session: null,
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};
