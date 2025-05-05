import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../src/components/ui/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    // stories 폴더는 제외하고 UI 컴포넌트만 로드
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  staticDirs: ['../public'],
  viteFinal: async (config) => {
    // 설정 확장 가능
    return config;
  },
};

export default config;
