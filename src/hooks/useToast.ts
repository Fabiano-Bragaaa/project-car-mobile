import { useContext } from "react";

import { ToastContext } from "@contexts/toastContext";

export function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("Use mus be use within a ToastProvider");
  }

  return context;
}
