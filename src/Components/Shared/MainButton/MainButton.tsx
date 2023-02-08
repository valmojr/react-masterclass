import MainButtonStyled from "./MainButton.styled"

export default (props:any) => {
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
            >
        {props.children}
    </MainButtonStyled>
}