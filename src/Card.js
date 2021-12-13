
import "./card.css";


export default function Card(props){
    return <div class="col-lg-3 mt-3 mb-3 pb-5 pt-5 ml-5">
    <div class="card mb-6 mb-lg-5 pb-5 pt-5 ">
      <div class="card-body">
        <h5 class="card-title text-muted text-uppercase text-center">{props.title}</h5>
        <h6 class="card-price text-center"><b>{props.price}</b><span class="period">{props.period}</span></h6>
        <hr/>
        <ul class="fa-ul">
          <li><span class="fa-li"><i class="fas fa-check"></i></span><b>{props.single}</b></li>
          <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.two}</li>
          <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.public}</li>
          <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.accsse}</li>
          <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Unlimited
            Private Projects</li>
          <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Dedicated
            Phone Support</li>
          <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Free Subdomain
          </li>
          <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Monthly Status
            Reports</li>
        </ul>
        <div class="d-grid">
          <a href="#" class="btn btn-primary text-uppercase">Button</a>
        </div>
      </div>
    </div>
  </div>
}