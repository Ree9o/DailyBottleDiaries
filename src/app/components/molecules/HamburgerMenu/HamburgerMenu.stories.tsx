// HamburgerMenu.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import HamburgerMenu from "./HamburgerMenu";
import { Session } from "next-auth";

const meta: Meta<typeof HamburgerMenu> = {
 title: "Molecules/HamburgerMenu",
  component: HamburgerMenu,
  parameters: {
      layout: 'centered',
      nextjs: {
      appDirectory: true,
    },
    },
 }


export default meta;

type Story = StoryObj<typeof HamburgerMenu>;

const mockSession: Session = {
 user: {
   id: "user-id",
   name: "John Doe",
   email: "john@example.com",
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

export const OpenMenu: Story = {
 args: {
   session: mockSession,
 },
 decorators: [
   (Story) => (
     <>
       <div style={{ position: "relative", width: "100%", height: "100vh" }}>
         <Story />
         <div style={{ marginLeft: "64px", padding: "20px" }}>
           <h1>Content Area</h1>
           <p>This is the main content area of the page.</p>
         </div>
       </div>
     </>
   ),
 ],
 parameters: {
   viewport: {
     defaultViewport: "mobile1",
   },
 },
};

export const CloseMenu: Story = {
 args: {
   session: mockSession,
 },
 parameters: {
   viewport: {
     defaultViewport: "mobile1",
   },
 },
};
