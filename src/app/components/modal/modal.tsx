import styles from './modal.component.module.css'

interface IPropsModal {
    type: string;
    text: string;
    show: boolean;
}

export default function Modal(props: IPropsModal) {
    return (
    <>
     {props.show ? <div className={styles.modal_container}>
            <div className={styles.modal_content}>
                <div className="moda-top">
                    <button className={styles.modal_button_close} aria-label="close modal">&#10005;</button>
                </div>
                <div className={styles.modal_content_body}>
                    <h3>Você ganhou</h3>
                    {props.type === 'error' ? <div className={styles.modal_icon_error}>&#10005;</div> : <div className={styles.modal_icon_success}>&#10003;</div>}
                </div>
            </div>
        </div> : ''}
    </>

    )
}