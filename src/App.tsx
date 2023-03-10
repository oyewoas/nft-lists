
import './App.css';
import BaseTemplate from './templates/base-template';
import AppHeader from './components/common/header';
import AppFooter from './components/common/footer';

function App() {
  return (
   <BaseTemplate header={<AppHeader />} footer={<AppFooter />}>
      <p>App</p>
   </BaseTemplate>
  );
}

export default App;
