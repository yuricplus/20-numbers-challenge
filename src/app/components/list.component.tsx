import { INumberList } from "@/app/shared/models/numbers-list.model";
import style from './list.component.module.css';

interface IProps {
    items: Array<INumberList>,
    verifyNumber: Function
}
export default function List(props: IProps) {
    return (
        <ul className={style.ul}>
            {props.items.map((item) => (<li className={style.li} key={item.number} aria-label="add number" title="add number" role="button"
                onClick={() => {
                    props.verifyNumber(item.number, item.value)
                }}>
                <label className={style.label}>{item.number}</label>
                <span className={style.span}> {item.value} </span>
                <span></span>
            </li>))}
        </ul>
    )
}