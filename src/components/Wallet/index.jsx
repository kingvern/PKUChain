import React from 'react'

import Modal from 'react-modal';
import {simpleStoreContract} from '../../simpleStore'

// import {transaction, simpleStoreContract} from '../../simpleStore'

import nervos from '../../nervos'

import wallet from '../../public/images/wallet.png'
import modalStyle  from '../../modalStyle'


require('./wallet.css')

class Wallet extends React.Component {
    constructor() {
        super();
        this.state = {
            times: [],
            texts: [],
            modalIsOpen: false,
            newWallet: ""
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    closeModal() {
        console.log("Newname",this.state.newWallet)
        let name = this.state.newWallet
        const from = 'e3fba7efa7e9b68b18c31f42b41c2dff7dc69b0c'
        simpleStoreContract.methods
            .buyMonkey(name)
            .call({
                from,
            })
            .catch(console.error)


        this.setState({modalIsOpen: false});
    }

    setNewWallet = e => {
        this.setState({newWallet: e.target.value})
    }

    componentDidMount() {
        // this.openModal()
    }

    render() {
        return (
            <div>
                <img src={wallet} className="wallet-button" onClick={this.openModal} />
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={modalStyle}
                    contentLabel=""
                >
                    <input value={this.state.newWallet} onChange={this.setNewWallet}/>
                    <button onClick={this.closeModal}>点击充香蕉</button>
                </Modal>
            </div>
        )
    }
}

export default Wallet
