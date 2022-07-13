import ReviewProvider from './ReviewContext';
import './App.css';
import ReviewList from './component/ReviewList';
import ReviewForm from './component/ReviewForm';
import Banner from './component/Banner';

function App() {
  return (
    <ReviewProvider>
      <Banner />
      <ReviewForm />
      <ReviewList />
    </ReviewProvider>
  );
}

export default App;
