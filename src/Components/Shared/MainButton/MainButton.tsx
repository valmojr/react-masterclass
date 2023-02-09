import { MotionValue } from "framer-motion"
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react"
import MainButtonStyled from "./MainButton.styled"

export default (props: any) => {
    return <MainButtonStyled type={props.type}
                initial = {{
                    scale: 1
                }}
                whileHover = {{
                    scale: 1.03
                }}
                whileTap ={{
                    scale: 1.01
                }}
                onClick={props.onClick}
            >
        {props.children}
    </MainButtonStyled>
}