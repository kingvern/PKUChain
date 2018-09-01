import React from 'react'


import modalStyle  from '../../modalStyle'
import pic from '../../public/images/pic.jpg'
import bag from '../../public/images/bag.png'
import Modal from 'react-modal';
import {simpleStoreContract} from '../../simpleStore'


require('./bag.css')


const Goods = () => {
    return (
        <div className="goods-bg">
            caps
            <img src={pic} />
        </div>
    )
}

class Bag extends React.Component {
    constructor() {
        super();
        this.state = {
            times: [],
            texts: [],
            modalIsOpen: false,
            goods: [1, 2, 3, 4, 5, 6]
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.submitBag = this.submitBag.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    submitBag(){
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
                <img src={bag} className="bag-button" onClick={this.openModal} />
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={modalStyle}
                    contentLabel=""
                >
                    {this.state.goods.map((item, idx) => (
                        <Goods />
                    ))}
                    <button onClick={this.submitBag}>close</button>
                </Modal>
            </div>
        )
    }
}

export default Bag
