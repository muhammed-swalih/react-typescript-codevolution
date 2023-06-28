
type PersonProps = {
    name : {
        firstName : string;
        lastName : string;
    }
}

export const Person = (props : PersonProps) => {
    return (
        <div>
            <h1>{`my name is ${props.name.firstName} ${props.name.lastName}`}</h1>
        </div>
    )
}