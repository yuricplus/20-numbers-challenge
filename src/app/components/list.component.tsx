import {INumberList } from "@/app/shared/models/numbers-list.model";
import style from './list.component.module.css';

interface IProps {
    items: Array<INumberList>,
    verifyNumber: Function
}
export default function List(props: IProps){
    return (
        <ul className={style.ul}>
            {props.items.map((item) => (<li className={style.li} key={item.number}>
                <label className={style.label}>{item.number}</label>
                <input className={style.input} value={item.value} disabled></input>
                {item.value === '' ? (
                    <button className={style.button} onClick={() => {
                        props.verifyNumber(item.number, item.value)
                    }}>add</button>) : ''}
            </li>))}
        </ul>
        )
}