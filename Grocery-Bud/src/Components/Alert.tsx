import { useEffect } from "react";
import { itemType } from "../App";

export type Props =  {
    show: boolean;
    msg: string;
    type: string;
    removeAlert: any;
    list: itemType[];
}

const Alert : React.FC<Props> = ({msg,type,removeAlert,list}) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            removeAlert();
        },3000)
        return () => clearTimeout(timer);
    },[list])
    return (
        <p className={`alert alert-${type}`}>{msg}</p>
    )
}

export default Alert;