import React from "react";

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div className="flex flex-col min-h-screen">
    <main className="grow pb-10">{children}</main>
  </div>
);
