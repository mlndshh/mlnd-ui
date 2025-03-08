import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "../";
import { Header } from "../../Header";
import Example from "./Example";

const meta: Meta<typeof Link> = {
  title: "Link",
  component: Link,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

// Basic link example
export const Basic: Story = {
  args: {
    href: "https://example.com",
    children: "Click me",
  },
};

// Link with a header component inside
export const WithHeader: Story = {
  args: {
    href: "https://example.com",
    children: <Header level={2}>Heading inside a link</Header>,
  },
};

// Custom styled link
export const CustomStyle: Story = {
  args: {
    href: "https://example.com",
    children: "Custom styled link",
    className: "text-blue-600 font-bold",
  },
};
