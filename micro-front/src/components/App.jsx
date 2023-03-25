import './styles.css';

const App = ({ onChange }) => {
  return (
    <div className='MicroApp'>
      <h1>Micro App</h1>
      <input onChange={onChange} type='text' placeholder='Enter your name' />
    </div>
  );
};
export default App;
