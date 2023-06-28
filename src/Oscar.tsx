
type oscarProps = {
    children : React.ReactNode;
}

export const Oscar = (props : oscarProps) => {
    return (
        <div>
            <h2>{props.children}</h2>
        </div>
    )
}