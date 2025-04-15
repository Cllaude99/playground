import IconAIChartAnalyzeInactive from '@/assets/icons/IconAIChartAnalyzeInactive.svg?react';
import IconAIChartAnalyzeActive from '@/assets/icons/IconAIChartAnalyzeActive.svg?react';
import IconAIChartRecommendInactive from '@/assets/icons/IconAIChartRecommendInactive.svg?react';
import IconAIChartRecommendActive from '@/assets/icons/IconAIChartRecommendActive.svg?react';
import IconFunctionHelpInactive from '@/assets/icons/IconFunctionHelpInactive.svg?react';
import IconFunctionHelpActive from '@/assets/icons/IconFunctionHelpActive.svg?react';
import FloatingPanelLayout from './FloatingPanelLayout';
import { useTab } from '@/hooks/useTab';

export default function FloatingPanel() {
  const TabKey = {
    CHART_ANALYZE: 'CHART_ANALYZE',
    CHART_RECOMMENDATION: 'CHART_RECOMMENDATION',
    FUNCTION_HELP: 'FUNCTION_HELP',
  } as const;

  const { Tabs } = useTab<keyof typeof TabKey>(TabKey.CHART_ANALYZE);

  return (
    <FloatingPanelLayout>
      <Tabs direction="column">
        <Tabs.List direction="row">
          <Tabs.Trigger
            value={TabKey.CHART_ANALYZE}
            activeIcon={<IconAIChartAnalyzeActive />}
            inactiveIcon={<IconAIChartAnalyzeInactive />}
          >
            AI 차트해석
          </Tabs.Trigger>
          <Tabs.Trigger
            value={TabKey.CHART_RECOMMENDATION}
            activeIcon={<IconAIChartRecommendActive />}
            inactiveIcon={<IconAIChartRecommendInactive />}
          >
            AI 추천판단
          </Tabs.Trigger>
          <Tabs.Trigger
            value={TabKey.FUNCTION_HELP}
            activeIcon={<IconFunctionHelpActive />}
            inactiveIcon={<IconFunctionHelpInactive />}
          >
            기능 도움말
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value={TabKey.CHART_ANALYZE}>
          AI 차트해석 내용
        </Tabs.Content>
        <Tabs.Content value={TabKey.CHART_RECOMMENDATION}>
          AI 추천판단 내용
        </Tabs.Content>
        <Tabs.Content value={TabKey.FUNCTION_HELP}>
          기능 도움말 내용
        </Tabs.Content>
      </Tabs>
    </FloatingPanelLayout>
  );
}
