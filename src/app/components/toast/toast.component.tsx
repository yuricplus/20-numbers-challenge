import styles from './toast.component.module.css'

interface IPropsToast {
    type: string;
    text: string;
    show: boolean
}
export default function Toast(props: IPropsToast){
    return (
        <>
            <div className={`${props?.show ? styles.toast_show : styles.toast_hidden } ${ styles.toast}`}>
                <div className={styles[props.type]}>
                    <span>{props.text}</span>
                </div>
            </div>
        </>
    )
}