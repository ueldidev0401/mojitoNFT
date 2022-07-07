import { useEffect, useState } from "react"; // State management
import classNames from "classnames"
import { toast } from "react-toastify"
import {formatNumber} from "utils/formatBalance";

export default function MintNodes() {
  return (
        <div className="page__center">
          <div className="page__content">
            <div className="mint-nodes">
              <div className="mint-nodes__item">
                <div className="mint-nodes__item-nft">
                    <video width="100%" height="100%" autoPlay playsInline muted loop>
                      <source src="nft/spirit_node.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="mint-nodes__item-desc" style={{color:"white"}}>
                  <ul>
                    <li> <span>Reward:</span><b>2.25 / Day </b></li>
                    <li> <span>ROI:</span><b>44 Days</b></li>
                  </ul>
                </div><button className="quality__btn btn btn_purple btn_wide" style={{marginTop : "15px"}}>Mint</button>
              </div>
              <div className="mint-nodes__item">
                <div className="mint-nodes__item-nft">
                <video width="100%" height="100%" autoPlay playsInline muted loop>
                      <source src="nft/fire_node.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="mint-nodes__item-desc" style={{color:"white"}}>
                  <ul>
                    <li> <span>Reward:</span><b>2.25 / Day </b></li>
                    <li> <span>ROI:</span><b>44 Days</b></li>
                  </ul>
                </div><button className="quality__btn btn btn_purple btn_wide" style={{marginTop : "15px"}}>Mint</button>
              </div>
              <div className="mint-nodes__item">
                <div className="mint-nodes__item-nft">
                    <video width="100%" height="100%" autoPlay playsInline muted loop>
                      <source src="nft/water_node.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="mint-nodes__item-desc" style={{color:"white"}}>
                  <ul>
                    <li> <span>Reward:</span><b>2.25 / Day </b></li>
                    <li> <span>ROI:</span><b>44 Days</b></li>
                  </ul>
                </div><button className="quality__btn btn btn_purple btn_wide" style={{marginTop : "15px"}}>Mint</button>
              </div>
              <div className="mint-nodes__item">
                <div className="mint-nodes__item-nft">
                    <video width="100%" height="100%" autoPlay playsInline muted loop>
                      <source src="nft/air_node.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="mint-nodes__item-desc" style={{color:"white"}}>
                  <ul>
                    <li> <span>Reward:</span><b>2.25 / Day </b></li>
                    <li> <span>ROI:</span><b>44 Days</b></li>
                  </ul>
                </div><button className="quality__btn btn btn_purple btn_wide" style={{marginTop : "15px"}}>Mint</button>
              </div>
            </div>
          </div>
        </div>
  )
}
