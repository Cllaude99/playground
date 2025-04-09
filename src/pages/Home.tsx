import { useNavigate } from 'react-router-dom';
import Button from '@/components/foundation/button/Button';
import HomeLayout from '@/components/home/HomeLayout';

export default function Home() {
  const navigate = useNavigate();

  return (
    <HomeLayout>
      <h3>Hello</h3>
      <Button
        buttonType="primary"
        onClick={() => navigate('/sign_up', { state: { from: '/' } })}
      >
        회원가입
      </Button>
    </HomeLayout>
  );
}
