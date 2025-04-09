import Layout from '../layout/Layout';

interface SignUpLayoutProps {
  children: React.ReactNode;
}

export default function SignUpLayout({ children }: SignUpLayoutProps) {
  return (
    <Layout direction="column" className="p-4 gap-3">
      {children}
    </Layout>
  );
}
