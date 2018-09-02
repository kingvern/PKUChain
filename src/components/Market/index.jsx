import React from 'react'


import marketModalStyle  from '../../modalStyle'
import pic from '../../public/images/pic.jpg'
import market_bg from '../../public/images/market-bg.png'
import market_pricebar from '../../public/images/market-priceban.png'
import market from '../../public/images/market.png'
import goods0 from '../../public/images/goods0.png'
import goods1 from '../../public/images/goods1.png'
import goods2 from '../../public/images/goods2.png'
import goods3 from '../../public/images/goods3.png'
import goods4 from '../../public/images/goods4.png'
import market_confirm from '../../public/images/market-confirm.png'
import market_pocket from '../../public/images/market-pocket.png'
import Modal from 'react-modal';
import {simpleStoreContract} from '../../simpleStore'


require('./market.css')


// const Goods = ({goodsPic,goodsName}) => {
//     return (
//         <div className="goods-bg">
//             {goodsName}
//             <img src={goodsPic} />
//         </div>
//     )
// }

class Goods extends  React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="goods-bg">
                    <img src={this.props.goodsPic} />
                    <span className="goods-price">{this.props.goodsName}</span>

            </div>
        )
    }
}

class Market extends React.Component {
    constructor() {
        super();
        this.state = {
            times: [],
            texts: [],
            modalIsOpen: false,
            goodsPics:[goods0,goods1,goods2,goods3,goods4],
            goodsNames: ['2','5','1','10','3']
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.submitMarket = this.submitMarket.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    submitMarket(){
        this.closeModal()
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <img className="market-button" src={market} onClick={this.openModal} />
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={marketModalStyle}
                    contentLabel=""
                >
                    <div className="market-bg">
                        <div className="goods-container">
                            {this.state.goodsPics.map((goodsPic, idx) => (
                                <Goods
                                    goodsPic={goodsPic}
                                    goodsName={this.state.goodsNames[idx]}
                                />
                            ))}
                        </div>
                        <div className="market-frontbg" />
                        <button  onClick={this.submitMarket}>关闭</button>
                        <img className="market-confirm" src={market_confirm} onClick={()=>{
                            this.props.onClick(2);
                            this.setState({modalIsOpen: false});

                        }
                        }/>
                        <img className="market-pocket" src={market_pocket} />
                        <span className="market-charge">{this.props.fruits}</span>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default Market
