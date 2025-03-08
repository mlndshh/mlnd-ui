import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "Header",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Heading1: Story = {
  args: {
    level: 1,
    children: "This is a Heading Level 1",
  },
};

export const Heading2: Story = {
  args: {
    level: 2,
    children: "This is a Heading Level 2",
  },
};

export const Heading3: Story = {
  args: {
    level: 3,
    children: "This is a Heading Level 3",
  },
};

export const Heading4: Story = {
  args: {
    level: 4,
    children: "This is a Heading Level 4",
  },
};

export const Heading5: Story = {
  args: {
    level: 5,
    children: "This is a Heading Level 5",
  },
};

export const Heading6: Story = {
  args: {
    level: 6,
    children: "This is a Heading Level 6",
  },
};

export const CustomStyled: Story = {
  args: {
    level: 1,
    children: "Custom Styled Heading",
    className: "text-blue-600 italic underline",
  },
};
