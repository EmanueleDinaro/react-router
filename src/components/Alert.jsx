import { useAlertContext } from "../context/AlertContext";

export default function Alert() {
  const { alert, setAlert } = useAlertContext();

  const handleAlertClose = () => {
    setAlert({ message: "" });
  };

  if (!alert.message) return null;

  return (
    <div className={`alert ${alert.type || "default"}`}>
      {alert.message}
      <i onClick={handleAlertClose}>X</i>
    </div>
  );
}
