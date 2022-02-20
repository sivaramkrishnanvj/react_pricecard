import logo from './logo.svg';
import './App.css';
import PriceCard from './PriceCard';


function App(){
    let data =[{
        plan: "FREE",
        price: 0,
        period: "month",
        users: "Single User",
        storage: "5GB Storage",
        publicprojects: "Unlimited Public Projects",
        access: "Community Access",
        privateprojects: "Unlimited Private Projects",
        support: "Dedicated Phone Support",
        subdomain: "Free Subdomain",
        report: "Monthly Status Reports",
      },
      {
        plan: "PLUS",
        price: 9,
        users: "5 User",
        storage: "50GB Storage",
        publicprojects: "Unlimited Public Projects",
        access: "Community Access",
        privateprojects: "Unlimited Private Projects",
        support: "Dedicated Phone Support",
        subdomain: "Free Subdomain",
        report: "Monthly Status Reports",
      },
      {
        plan: "PRO",
        price: 49,
        users: "Unlimited User",
        storage: "150GB Storage",
        publicprojects: "Unlimited Public Projects",
        access: "Community Access",
        privateprojects: "Unlimited Private Projects",
        support: "Dedicated Phone Support",
        subdomain: "Unlimited Free Subdomain",
        report: "Monthly Status Reports",
      }]
  return (
    <section class="pricing py-5">
      <div class="container">
        <div class="row">
          {
            data.map((price) => {
              return <PriceCard pricedata ={price}></PriceCard>
            })
          }
        </div>
      </div>
    </section>
  );
}

export default App;
