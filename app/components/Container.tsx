import { ReactNode } from "react";

interface ContainerProps {
  className?: string;
  children: ReactNode;
}

export default function Container({ className, children }: ContainerProps) {
  return <div className={`max-w-[1420px] mx-auto ${className}`}>{children}</div>;
}
