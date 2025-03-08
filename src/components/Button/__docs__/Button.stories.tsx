import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "Button",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const PrimarySmall: Story = {
  args: {
    text: "Small Button",
    primary: true,
    size: "small",
  },
};

export const PrimaryMedium: Story = {
  args: {
    text: "Medium Button",
    primary: true,
    size: "medium",
  },
};

export const PrimaryLarge: Story = {
  args: {
    text: "Large Primary Button",
    primary: true,
    size: "large",
  },
};

export const SecondarySmall: Story = {
  args: {
    text: "Small Button",
    primary: false,
    size: "small",
  },
};

export const SecondaryMedium: Story = {
  args: {
    text: "Medium Button",
    primary: false,
    size: "medium",
  },
};

export const SecondaryLarge: Story = {
  args: {
    text: "Large Secondary Button",
    primary: false,
    size: "large",
  },
};

export const DisabledPrimary: Story = {
  args: {
    text: "Disabled Button",
    primary: true,
    size: "medium",
    disabled: true,
  },
};

export const DisabledSecondary: Story = {
  args: {
    text: "Disabled Button",
    primary: false,
    size: "medium",
    disabled: true,
  },
};

export const LargeContactMe: Story = {
  args: {
    text: "Contact me",
    size: "large",
    primary: false,
  },
};
