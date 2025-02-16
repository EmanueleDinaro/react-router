import Alert from "../components/Alert";
import { createContext, useContext, useState } from "react";

// Creo un nuovo context chiamato AlertContext.
// Il context è un meccanismo che permette di condividere dati e funzioni tra componenti senza doverli passare manualmente come props ad ogni livello.
const AlertContext = createContext();

// Definisco una funzione chiamata AlertProvider
// AlertProvider accetta un singolo parametro children.
// children rappresenta i componenti React.
function AlertProvider({ children }) {
  // Definisco lo stato per l'elenco dei film.
  const [alert, setAlert] = useState({ message: "" });

  return (
    // Creo un componente Provider per il context AlertContext
    // Fornisco i valori films e setFilms a AlertContext.
    // Questo significa che tutti i componenti React all'interno del Provider avranno accesso a questi dati
    <AlertContext.Provider value={{ alert, setAlert }}>
      <Alert></Alert>
      {children}
    </AlertContext.Provider>
  );
}

// Definisco una funzione custom hook che mi permette di accedere ai dati del context AlertContext in modo più pulito e riutilizzabile.
function useAlertContext() {
  // useContext è un hook di React che permette di accedere al valore corrente di un context.
  return useContext(AlertContext);
}

// Esporto i componenti e l'hook per utilizzarli in altri componenti
export { AlertProvider, useAlertContext };
