import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    inputType: {
      control: { type: 'select' },
      options: ['default', 'error', 'readOnly'],
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'password', 'email', 'number', 'search', 'tel', 'url'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    label: {
      control: { type: 'text' },
    },
    description: {
      control: { type: 'text' },
    },
    errorMessage: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: '여기에 입력하세요',
    label: '기본 입력창',
    description: '설명 텍스트가 여기 표시됩니다',
  },
};

export const WithError: Story = {
  args: {
    placeholder: '입력 오류',
    label: '오류 있는 입력창',
    errorMessage: '유효한 값을 입력해주세요',
  },
};

export const ReadOnly: Story = {
  args: {
    value: '읽기 전용 값',
    label: '읽기 전용',
    inputType: 'readOnly',
    readOnly: true,
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: '비밀번호 입력',
    label: '비밀번호',
  },
};

export const Email: Story = {
  args: {
    type: 'email',
    placeholder: '이메일 입력',
  },
};

export const Number: Story = {
  args: {
    type: 'number',
    placeholder: '숫자 입력',
  },
};

export const Search: Story = {
  args: {
    type: 'search',
    placeholder: '검색어 입력',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: '비활성화된 입력창',
    label: '비활성화',
  },
};

export const WithValue: Story = {
  args: {
    value: '이미 입력된 값',
  },
};

export const Required: Story = {
  args: {
    required: true,
    placeholder: '필수 입력 항목',
  },
};
