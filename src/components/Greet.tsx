
type greetProps = {
    names : string;
    age : number;
    isLoggeed : boolean;
}
export const Greet = (props : greetProps) => {
  return (
    <div>  
      <h1>
        {props.isLoggeed ? `hello goodmorning ${props.names} ! you have ${props.age} unread messages` : 'welcome guest'}
      </h1>
    </div>
  )
}


