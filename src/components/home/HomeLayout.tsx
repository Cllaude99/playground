import Layout from '../layout/Layout';

interface HomePageLayoutProps {
  children: React.ReactNode;
}

export default function HomePageLayout({ children }: HomePageLayoutProps) {
  return <Layout direction="column">{children}</Layout>;
}
