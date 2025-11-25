import { PersonInfo } from './components/PersonInfo';

function App() {
  const jan = {
    name: 'Jan',
    lastName: 'Kowalski',
    mail: ' j.kowalski@gmail.com',
    tel: '123456789',
  };
  const janina = {
    name: 'Janina',
    lastName: 'Kowalska',
    mail: ' j.kowalska@gmail.com',
    tel: '123456999',
  };
  const karol = {
    name: 'Karol',
    lastName: 'Kowalski',
    mail: ' k.kowalski@gmail.com',
  };

  return (
    <>
      <PersonInfo person={jan} />
      <br />
      <PersonInfo person={janina} />
      <br />
      <PersonInfo person={karol} />
    </>
  );
}

export default App;
