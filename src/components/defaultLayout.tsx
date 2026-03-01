import { ReactNode } from "react";

export default function DefaultLayout({ children }: { children: ReactNode }) {
  return <div className="h-screen flex flex-1">{children}</div>;
}
