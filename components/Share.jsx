import { FacebookIcon, FacebookShareButton, TelegramIcon, TelegramShareButton, WhatsappShareButton, WhatsappIcon } from "react-share";

export function ShareFace() {
    const URL= 'www.facebook.com'
    return (
        <div>
        <FacebookShareButton url={URL}>
            <FacebookIcon/>
        </FacebookShareButton>
        </div>
       
    )
}
export function ShareTelegram() {
    const URL= 'www.telegram.com'
    return (
        <div>
        <TelegramShareButton url={URL}>
            <TelegramIcon/>
        </TelegramShareButton>
        </div>
       
    )
}

