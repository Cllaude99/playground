import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    buttonType: {
      control: { type: 'select' },
      options: ['primary'],
    },
    size: {
      control: { type: 'select' },
      options: ['default'],
    },
    isLoading: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: '버튼',
    buttonType: 'primary',
    size: 'default',
  },
};

export const Loading: Story = {
  args: {
    children: '로딩 버튼',
    isLoading: true,
  },
};

export const Disabled: Story = {
  args: {
    children: '비활성화 버튼',
    disabled: true,
    buttonType: 'primary',
  },
};
