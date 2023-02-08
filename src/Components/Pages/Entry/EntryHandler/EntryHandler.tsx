import EntryHandlerStyled from "./EntryHandler.styled"

export default (props: any) => {
    return <EntryHandlerStyled>
        {props.children}
    </EntryHandlerStyled>
}