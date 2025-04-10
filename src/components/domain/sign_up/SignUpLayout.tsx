import Layout from '@/components/layout/Layout';
import { PropsWithChildren } from 'react';

export default function SignUpLayout({ children }: PropsWithChildren) {
  return (
    <Layout direction="column" className="p-4 gap-3">
      {children}
    </Layout>
  );
}
