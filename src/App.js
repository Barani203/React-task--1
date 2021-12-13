import logo from './logo.svg';
import './App.css';
import Card from './Card';
import "./card.css"

function App() {
  return (<section class="pricing py-5">
    <div className="container-fluid">
      <div className="row">
        
        <Card title = "FREE"

        price ="$0"
        period ="/month"
        single ="Single User"
        two ="5GB Storage"
        public ="Unlimited Public Projects"
        accsse ="Community Access"
        ></Card>
         <Card title = "PLUS"
        price ="$9"
        period ="/month"
        single ="5 Users"
        two ="50GB Storage"
        public ="Unlimited Public Projects"
        accsse ="Community Access"
        ></Card>
           <Card title = "PRO"
        price ="$49"
        period ="/month"
        single ="Unlimited Users"
        two ="150GB Storage"
        public ="Unlimited Public Projects"
        accsse ="Community Access"
        ></Card>


      </div>
    </div>
    </section>
  );
}

export default App;
