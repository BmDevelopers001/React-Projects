import { useEffect, useState } from "react";

export type Props = {
    rgb: number[];
    weight: number;
    index: number;
    hexColor: string;
}

const SingleColor : React.FC<Props> = ({rgb,index,weight,hexColor}) => {
    const [alert,setAlert] = useState<boolean>(false);
    const bcg : string = rgb.join(',');
    const hexValue: string = `#${hexColor}`;

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAlert(false)
        },3000)

        return () => clearTimeout(timeout)
    },[alert])

    return (
        <article className={`color ${index > 10 && 'color-light'}`} style={{backgroundColor:`rgb(${bcg})`}}
            onClick={(() => {
                setAlert(true);
                navigator.clipboard.writeText(hexValue)                
            })}
        >
            <p className="percent-value">{weight}%</p>
            <p className="color-value">{hexValue}</p>
            {
                alert && <p className="alert">Copied to clipboard</p>
            }
        </article>
    )
}

export default SingleColor;