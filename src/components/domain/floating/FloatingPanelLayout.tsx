import { PropsWithChildren } from 'react';

export default function FloatingPanelLayout({ children }: PropsWithChildren) {
  return (
    <div className="absolute bottom-24 right-0">
      <div className="w-[390px] h-[calc(100dvh-450px)] bg-white p-4 rounded-xl shadow-lg border-1 border-gray-200">
        {children}
        <div
          className="absolute size-4 bg-white right-8 -bottom-2 rotate-45 shadow-b-lg"
          style={{
            borderBottomRightRadius: '4px',
          }}
        ></div>
      </div>
    </div>
  );
}
