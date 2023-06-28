
import './App.css';
import { Heading } from './Heading';
import { Oscar } from './Oscar';
import { Status } from './Status';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';

function App() {
  const personName = {
    firstName : 'muhammed',
    lastName : 'swalih'
  }

  const newNameArray = [
    {
      first : 'john',
      last : 'doe'
    },
    {
      first : 'muhammed',
      last : 'swalih'
    },
    {
      first : 'fathimath',
      last : 'sharin'
    },
  ]
   
  const nameArray =  ['john' , 'alex' , 'arthur']
  return (
    <div className="App">
     {/* <Greet names  = 'muhammed swalih' age={20} isLoggeed = {false}/>
     <Person name={personName}/>
     <PersonList nameee={newNameArray }/> */}
     {/* <Status status='loading'/> */}
     <Heading>hey muhammed swalih you are beautifull</Heading>
     <Oscar>
        <Heading>oscar goes to muhammed swalih</Heading>
     </Oscar>
    </div>
  );
}

export default App;
