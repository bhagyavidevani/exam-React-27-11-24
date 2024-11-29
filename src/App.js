import logo from './logo.svg';
import './App.css';
import UserProfileCard from './UserProfileCard';

function App() {
  return (
    <div style={{backgroundColor:"lightblue" ,display:'grid', gap:40 ,gridTemplateColumns:"repeat(4 ,1fr)", padding:'60px'}}>
      <UserProfileCard title='UserProflie' name='Bhagyavi' email='bhagyavidevani79@gmail.com' imgurl='https://img.freepik.com/premium-photo/office-professional-young-beautiful-girl-with-laptop-indian-news-reporter-business-girl_924463-189.jpg?w=740' number='63544 31683' course='Front End Developer'/>


      <UserProfileCard title='UserProflie' name='soniya' email='soniya69@gmail.com' imgurl='https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA4L3Jhd3BpeGVsX29mZmljZV8zNV9iZWF1dGlmdWxfc21pbGluZ195b3VuZ19pbmRpYW5fYnVzaW5lc3Nfd29tYV8yYWM3MjMyNS1jZmU3LTQ5ODgtODBkNi03YjViZTg3ODYzNjNfMS5qcGc.jpg' number='68038 46896' course='Back End Developer'/>


      <UserProfileCard title='UserProflie' name='Denisha' email='denisha39@gmail.com' imgurl='https://i.pinimg.com/736x/c3/e9/7a/c3e97aa255c604a1123e554cc12eefdc.jpg' number='68045 67932' course='Full Developer'/>


      <UserProfileCard title='UserProflie' name='shrushti' email='shrushti77@gmail.com' imgurl='https://img.freepik.com/premium-photo/office-professional-young-beautiful-girl-with-laptop-indian-news-reporter-business-girl_924463-189.jpg?w=740' number='63544 31683' course='Front End Developer'/>
    </div>
  );
}

export default App;
