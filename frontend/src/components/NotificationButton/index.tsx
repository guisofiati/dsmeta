import NotificationIcon from "../../assets/img/notification-icon.svg";
import axios from "axios";
import { BASE_URL } from "../../utils/request";
import { toast } from "react-toastify";

import "./styles.css";

type Props = {
    saleId: number;
};

function handleNotification(id: number) {
    axios.get(`${BASE_URL}/sales/${id}/notification`).then((response) => {
        toast.info("SMS enviado com sucesso!");
    });
}

function NotificationButton({ saleId }: Props) {
    return (
        <div
            className="dsmeta-red-btn"
            onClick={() => handleNotification(saleId)}
        >
            <img
                src={NotificationIcon}
                alt="Notificar"
                title="Icone de notificação"
            />
        </div>
    );
}

export default NotificationButton;
