import Layout from '../layout/Layout';

interface ErrorPageLayoutProps {
  children: React.ReactNode;
}

export default function ErrorPageLayout({ children }: ErrorPageLayoutProps) {
  return <Layout direction="column">{children}</Layout>;
}
