import { createContext, ReactNode, useState } from "react";
import { Toast } from "@components/toast";

type ToatContextProps = {
  showToast: (message: string, type: TypeMessage) => void;
};

type TypeMessage = "DEFAULT" | "SUCESS";

export type MessageProps = {
  message: string;
  type: TypeMessage;
};

export const ToastContext = createContext({} as ToatContextProps);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState<MessageProps[]>([]);

  function showToast(message: string, type: TypeMessage) {
    let toastMessage = {
      message,
      type,
    };

    setMessage((prev) => [...prev, toastMessage]);
    setTimeout(() => {
      hideToast();
    }, 1500);
  }

  function hideToast() {
    setMessage((prev) => prev.slice(1));
  }

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {message.length > 0 && <Toast messages={message} hideToast={hideToast} />}
    </ToastContext.Provider>
  );
}
