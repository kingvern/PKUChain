import React from 'react'


import modalStyle  from '../../modalStyle'
import pic from '../../public/images/pic.jpg'
import market from '../../public/images/market.png'
import goods0 from '../../public/images/goods0.png'
import goods1 from '../../public/images/goods1.png'
import goods2 from '../../public/images/goods2.png'
import goods3 from '../../public/images/goods3.png'
import goods4 from '../../public/images/goods4.png'
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
                {this.props.goodsName}
                <img src={this.props.goodsPic} />
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
            goodsPics: [goods0,goods1, goods2, goods3, goods4],
            goodsNames: ['0','1','2','3','4']
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
        // const from = 'e3fba7efa7e9b68b18c31f42b41c2dff7dc69b0c'
        //
        // var times=[]
        // for(let i = 0;i < 10; i++){
        //     times.push(new Date())
        // }
        // console.log(times)
        // Promise.all(times.map(time => simpleStoreContract.methods.get(time).call({ from })))
        //     .then(texts => {
        //         this.setState({ texts })
        //         console.log(texts)
        //     })
        //     .catch(console.error)
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
                    style={modalStyle}
                    contentLabel=""
                >
                    {this.state.goodsPics.map((goodsPic, idx) => (
                        <Goods
                            goodsPic={goodsPic}
                            goodsName={this.state.goodsNames[idx]}
                        />
                    ))}
                    <button onClick={this.submitMarket}>close</button>
                </Modal>
            </div>
        )
    }
}

export default Market
