import style from './App.module.css';
import ListContainer from './components/ListContainer';

function App(props) {
  return (
    <div className={style.app}>
      <ListContainer store={props.store}/>
    </div>
  );
}

export default App;
