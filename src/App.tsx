import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/sonner';
import { AppRouter } from './routes/AppRouter';
import { getAPIErrorInfo } from './utils/getApiErrorInfo';
import { isAxiosError } from 'axios';
import { toast } from 'sonner';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      throwOnError: true,
    },
    mutations: {
      onError: (error: unknown) => {
        if (isAxiosError(error)) {
          const errorInfo = getAPIErrorInfo(error);
          toast.error(errorInfo.message);
        } else {
          toast.error('알 수 없는 오류가 발생했습니다.');
        }
      },
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AppRouter />
      </QueryClientProvider>
      <Toaster />
    </>
  );
}

export default App;
