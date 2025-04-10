import Layout from '@/components/layout/Layout';
import { PropsWithChildren } from 'react';

export default function HomePageLayout({ children }: PropsWithChildren) {
  return (
    <Layout direction="column" fullScreen={true}>
      {children}
    </Layout>
  );
}
