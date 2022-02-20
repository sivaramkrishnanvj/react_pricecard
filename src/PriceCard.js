import React from "react"
import './App.css';
function PriceCard(props){
    return(
<div class="col-lg-4">
        <div class="card mb-5 mb-lg-0  main">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">{props.pricedata.plan}</h5>
            <h6 class="card-price text-center">${props.pricedata.price}<span class="period">/{props.pricedata.period}</span></h6>
            <hr></hr>
            <ul class="fa-ul">
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.pricedata.users}</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.pricedata.storage}</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.pricedata.publicprojects}</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.pricedata.access}</li>
              {
                props.pricedata.plan==="FREE"?<li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{props.pricedata.privateprojects}</li>:<li><span class="fa-li"><i class="fas fa-check"></i></span>{props.pricedata.privateprojects}</li>
              }
              {
              props.pricedata.plan==="FREE"?<li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{props.pricedata.support}</li>:<li><span class="fa-li"><i class="fas fa-check"></i></span>{props.pricedata.support}</li>
              }
              {
                props.pricedata.plan==="FREE"?<li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{props.pricedata.subdomain}</li>:<li><span class="fa-li"><i class="fas fa-check"></i></span>{props.pricedata.subdomain}</li>

              }
              {
                props.pricedata.plan === "FREE" || props.pricedata.plan === "PLUS"?<li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{props.pricedata.report}</li>:<li><span class="fa-li"><i class="fas fa-check"></i></span>{props.pricedata.report}</li>

              }
    
            </ul>
            <div class="d-grid">
              <a href="#" class="btn btn-primary text-uppercase button">Button</a>
            </div>
          </div>
        </div>
      </div>
    )
}

export default PriceCard;