import { useEffect } from "react";
import { useAlertContext } from "../context/AlertContext";

export default function Contatti() {
  const { setAlert } = useAlertContext();

  useEffect(() => {
    setAlert({
      message: "Spedizione gratuita per ordini superiori a 50€",
    });
  }, [setAlert]);

  return (
    <div>
      <h1>Contatti</h1>
      <div className="contact-main">
        <p>
          Cerchi un dolce che ti faccia sorridere? Desideri un regalo speciale
          per un'occasione importante? Oppure semplicemente vuoi concederti una
          coccola golosa? La nostra bakery ti offre una vasta selezione di
          dolciumi artigianali, preparati con passione e ingredienti di prima
          scelta. Vieni a scoprire le nostre torte, i nostri biscotti, i nostri
          macarons e tante altre delizie. Contattaci per prenotare la tua torta
          personalizzata, scoprire le nostre offerte speciali o semplicemente
          per chiedere informazioni.
        </p>

        <div>
          <span>
            <i className="fa-solid fa-location-pin"></i> Via Dalcaz 138
          </span>
          <span>
            <i className="fa-solid fa-phone"></i> +39 33484667861
          </span>
        </div>
      </div>
    </div>
  );
}
