import { useContext } from "react"
import { GlobalContext } from "../App";
import SuperChildComp from "./superChildComp";
const WrapperA = () => {
    const info = useContext(GlobalContext);
    console.log(info)
    return(
        
        <SuperChildComp/>
    )
}

export default WrapperA