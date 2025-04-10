interface StepMessageProps {
  message: string;
}

export default function StepMessage({ message }: StepMessageProps) {
  return (
    <h1 className="flex flex-col text-2xl font-bold">
      {message.split('\n').map((line, idx) => (
        <span key={idx}>{line}</span>
      ))}
    </h1>
  );
}
