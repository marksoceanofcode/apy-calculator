import { ReactNode } from "react";

interface PageContainerProps {
  children: React.ReactNode;
}

export const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <main className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <div className="flex flex-1 w-full max-w-200 flex-col items-center justify-between py-32 px-4 sm:items-start lg:px-0">
        {children}
      </div>
    </main>
  );
};
