import { useState } from "react"; // State management
import { toast } from "react-toastify"
import classNames from "classnames"
import {formatNumber} from "utils/formatBalance";

export default function MyNodes() {
  return(
    <div className={("flex flex-col mx-[10%] md:mx-[64px] mt-[30px]")}>
    <div className="page__content">
      <div className="details details_statements details_my-nodes">
        <div className="details__container" style={{background:"#130E11", color:"white"}}>
          <div className="details__row">
            <div className="details__col">
              <div className="details__title h6" style={{marginBottom: "10px"}}>Pending Reward</div>
              <div className="details__top">
                <div className="details__number h3" style={{marginBottom: "0px"}}>382.49</div>
                <h3 style={{marginBottom: "15px", marginTop: "-5px"}}>$MJT</h3><button className="quality__btn btn btn_purple btn_wide" style={{marginTop: "0px"}}>Claim</button>
              </div>
              <div className="details__bottom">
                <div className="details__info caption-sm">Last claimed:</div>
                <div className="details__info caption-sm" style={{marginTop: "5px"}}>06.03.2022 09:24</div>
              </div>
            </div>
            <div className="details__col">
              <div className="details__chart details__chart_report">
                <div id="chart-report"></div>
              </div>
            </div>
          </div>
          <div className="details__list details__list_three"  style={{borderColor:"rgba(228, 228, 228, 0.1)"}}>
            <div className="details__item" style={{borderColor:"rgba(228, 228, 228, 0.1)"}}>
              <div className="details__head">
                <div className="details__preview bg-purple"></div>
                <div className="details__text caption-sm">Total Nodes</div>
              </div>
              <div className="details__counter h4" style={{marginBottom: "0"}}>13</div>
            </div>
            <div className="details__item" style={{borderColor:"rgba(228, 228, 228, 0.1)"}}>
              <div className="details__head">
                <div className="details__preview bg-purple"></div>
                <div className="details__text caption-sm">Total Claimed</div>
              </div>
              <div className="details__counter h4" style={{marginBottom: "0"}}>688.12<small style={{fontSize: "16px", marginLeft: "10px"}}> $MJT</small></div>
            </div>
            <div className="details__item" style={{borderColor:"rgba(228, 228, 228, 0.1)"}}>
              <div className="details__head">
                <div className="details__preview bg-purple"></div>
                <div className="details__text caption-sm">Total Claimed (USD)</div>
              </div>
              <div className="details__counter h4" style={{marginBottom: "0"}}>$40,096.75</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}