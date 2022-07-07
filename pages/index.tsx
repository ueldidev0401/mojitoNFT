import { useState } from "react"; // State management
import classNames from "classnames"
import { BigNumber } from "@ethersproject/bignumber"
import {formatNumber} from "utils/formatBalance";
import { toast } from "react-toastify"
import { formatEther, parseEther } from "ethers/lib/utils"
import dynamic from 'next/dynamic'
import ApexCharts from "apexcharts";

// var options = {
//   chart: {
//     type: 'bar'
//   },
//   series: [
//     {
//       name: 'sales',
//       data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
//     }
//   ],
//   xaxis: {
//     categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
//   }
// }

// var chart = new ApexCharts(document.querySelector('#chart-earning'), options)
// chart.render()
export default function Home() {
  return (
    <div className={("flex flex-col mx-[10%] md:mx-[64px] mt-[30px]")}>
      <div className="page__content">
        <div className="details details_statements">
          <div className="details__container" style={{background:"#130E11", color:"white"}}>
            <div className="details__row" style={{display: "block"}}>
              <div className="details__stats">
                <div className="details__stats_col">
                  <div className="details__title caption-sm" style={{marginBottom: "5px"}}>Price</div>
                  <div className="details__top" style={{border: 0, margin: 0, padding: 0}}>
                    <div className="details__number h4" style={{marginBottom: "0"}}>$58.27</div>
                  </div>
                </div>
                <div className="details__stats_col">
                  <div className="details__title caption-sm" style={{marginBottom: "5px"}}>My Nodes</div>
                  <div className="details__top" style={{border: 0, margin: 0, padding: 0}}>
                    <div className="details__number h4" style={{marginBottom: "0"}}>13</div>
                  </div>
                </div>
                <div className="details__stats_col">
                  <div className="details__title caption-sm" style={{marginBottom: "5px"}}>Claimable</div>
                  <div className="details__top" style={{border: 0, margin: 0, padding: 0}}>
                    <div className="details__number h4" style={{marginBottom: "0"}}>382.49</div>
                  </div>
                </div>
                <div className="details__stats_col">
                  <div className="details__title caption-sm" style={{marginBottom: "5px"}}>My Balance</div>
                  <div className="details__top" style={{border: 0, margin: 0, padding: 0}}>
                    <div className="details__number h4" style={{marginBottom: "0"}}>1,016.32</div>
                  </div>
                </div>
              </div>
              <div className="details__col">
                <div className="details__chart details__chart_report">
                  <div id="chart-earning"></div>
                </div>
              </div>
            </div>
            <div className="details__list details__list_two" style={{borderColor:"rgba(228, 228, 228, 0.1)"}}>
              <div className="details__item" style={{borderColor:"rgba(228, 228, 228, 0.1)"}}>
                <div className="details__head">
                  <div className="details__preview bg-purple"></div>
                  <div className="details__text caption-sm">Market Cap</div>
                </div>
                <div className="details__counter h4" style={{marginBottom: "0"}}>$53,924,255.76</div>
              </div>
              <div className="details__item" style={{borderColor:"rgba(228, 228, 228, 0.1)"}}>
                <div className="details__head">
                  <div className="details__preview bg-purple"></div>
                  <div className="details__text caption-sm">Liquidity</div>
                </div>
                <div className="details__counter h4" style={{marginBottom: "0"}}>$5,924,255.94</div>
              </div>
              <div className="details__item" style={{borderColor:"rgba(228, 228, 228, 0.1)"}}>
                <div className="details__head">
                  <div className="details__preview bg-purple"></div>
                  <div className="details__text caption-sm">Total Nodes</div>
                </div>
                <div className="details__counter h4" style={{marginBottom: "0"}}>2857</div>
              </div>
              <div className="details__item" style={{borderColor:"rgba(228, 228, 228, 0.1)"}}>
                <div className="details__head">
                  <div className="details__preview bg-purple"></div>
                  <div className="details__text caption-sm">Tokens In Reward Pool</div>
                </div>
                <div className="details__counter h4" style={{marginBottom: "0"}}>$142,705</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
