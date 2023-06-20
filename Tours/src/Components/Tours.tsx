import { toursType } from "../App";
import Tour from "./Tour";

export type Props = {
    tours: toursType[]
}

const Tours : React.FC<Props> = ({tours, removeTour}) => {
    return (
        <section>
            <div className="title">
                <h2>Our Tours</h2>
                <div className="underline"></div>
            </div>
            <div>
                {
                    tours.map((tour) => {
                        return (
                            <Tour key={tour.id} {...tour} removeTour={removeTour}/>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Tours;