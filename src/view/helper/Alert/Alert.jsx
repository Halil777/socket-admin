import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function showError(message) {
  toast.error(message, {
    position: "bottom-left",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  });
}

export function showWarning(message) {
  toast.warn(message, {
    position: "bottom-left",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  });
}

export function showSuccess(message) {
  toast.success(message, {
    position: "bottom-left",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  });
}
