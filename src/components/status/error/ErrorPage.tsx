import ErrorPageLayout from './ErrorPageLayout';

interface IErrorPageProps {
  status: string;
  message: string;
  isUnknownError: boolean;
  onRetry: () => void;
}

const ErrorPage = ({
  status = 'ERROR',
  message = '알 수 없는 오류가 발생했습니다.',
  isUnknownError = true,
  onRetry,
}: IErrorPageProps) => {
  const handleHomeClick = () => {
    onRetry();
    if (isUnknownError) {
      // 관련 정보 삭제
    }
    window.location.href = '/';
  };

  return (
    <ErrorPageLayout>
      <div
        className={`flex flex-col gap-2 items-center justify-center h-[calc(100dvh-20rem)] ${
          !isUnknownError ? 'mt-16' : 'mt-14'
        }`}
      >
        <span className="text-title text-white-default">{status}</span>
        <span className="text-description text-white-default">{message}</span>
        <button
          className="text-description text-white-default"
          onClick={handleHomeClick}
        >
          홈으로 돌아가기
        </button>
      </div>
    </ErrorPageLayout>
  );
};

export default ErrorPage;
