import "../../App.css";


interface YouLoseModalProps {
    message: string
    closeModal: any
}
export default function YouLoseModal(props: YouLoseModalProps) {
    return (
        <div>
            <div id="openModal" className="modalDialog">
                <div>
                    <button className="close" onClick={props.closeModal}>Close & Reset Game</button>
                    {props.message}
                </div>
            </div>
        </div>
    )
}