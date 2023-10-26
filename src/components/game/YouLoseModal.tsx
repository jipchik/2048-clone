import "../../App.css";
export default function YouLoseModal(props: any) {
    return (
        <div>
            {props.message === ""
                ?
                null
                :
                <div>
                    <div className="modal" id="modal">
                        <h2>Modal Window</h2>
                        <div className="content">{props.message}</div>
                        <div className="actions">
                            <button className="toggle-button" onClick={() => props.reset("")}>OK</button>
                        </div>
                    </div>
                </div>
            }
        </div>

    )
}