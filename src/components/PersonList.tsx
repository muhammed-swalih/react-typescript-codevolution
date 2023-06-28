
type PersonListProps = {
    nameee : {
        first :string;
        last : string;
    }[]
}

export const PersonList  = (props : PersonListProps)=> {


    return (
        <div>
            {
                props.nameee.map((names)=>{
                    return (
                        <div>
                            <h1>{names.first} {names.last}</h1>
                        </div>
                    )
                })
            }
        </div>
    )
}