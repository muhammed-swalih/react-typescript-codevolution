
type HeadingPops = {
    children : string;
}

export const Heading = (props : HeadingPops) => {
    return (
        <div>
            <h3>{props.children}</h3>
        </div>
    )
}