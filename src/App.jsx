import TestWithMockData from "./components/TestWithMockData";
import FirstTest from './components/FirstTest';
import TestingAPICalls from './components/TestingAPICalls'
import TestWithMockDataWithBranching from './components/TestWithMockDataWithBranching'
import LoginForm from "./components/loginForm";
import TestingStateChange from './components/TestingStateChange'
import './style.css'
export const mockData = [
  {
      "id": 1,
      "first_name": "Abel",
      "last_name": "Getahun",
      "email": "abel@gmail.com",
      "age": 30
    }, {
      "id": 2,
      "first_name": "Abdi",
      "last_name": "muhaba",
      "email": "abdi@mail.com",
      "age": 35
    },
    {
      "id": 3,
      "first_name": "Abenezer",
      "last_name": "Tewodros",
      "email": "ab@mail.com",
      "age": 67
  }
  
]

function App() {
  return <div className="body">
    <h1 className="title">Writing unit test cases with React using Jest and React Testing Library</h1>
    <FirstTest />
    <TestingAPICalls />
    <TestingStateChange />
    <TestWithMockData data={mockData} />
    <LoginForm />
  </div>;
}

export default App;
