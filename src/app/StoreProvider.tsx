"use client"
import { useRef } from 'react';
import { Provider } from 'react-redux';
import store from "@/store/store";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
//   const storeRef:any = useRef<AppStore | undefined>(store);

  return <Provider store={store}>{children}</Provider>;
}