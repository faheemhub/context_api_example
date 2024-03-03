import { useContext } from "react"
import { GlobalContext } from "../App"
const SuperChildComp = () => {
    const outCont = useContext(GlobalContext);
    console.log(outCont)
    return(
        <></>
    )
}
export default SuperChildComp