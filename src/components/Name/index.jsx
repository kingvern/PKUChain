import React from 'react'

import Modal from 'react-modal';
import {simpleStoreContract} from '../../simpleStore'

// import {transaction, simpleStoreContract} from '../../simpleStore'

import nervos from '../../nervos'


import modalStyle  from '../../modalStyle'


require('./name.css')

class Name extends React.Component {
    constructor() {
        super();
        this.state = {
            times: [],
            texts: [],
            modalIsOpen: false,
            newName: ""
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    closeModal() {
        console.log("Newname",this.state.newName)
        let name = this.state.newName
        const from = 'e3fba7efa7e9b68b18c31f42b41c2dff7dc69b0c'
        simpleStoreContract.methods
            .buyMonkey(name)
            .call({
                from,
            })
            .catch(console.error)


        this.setState({modalIsOpen: false});
    }

    setNewName = e => {
        this.setState({newName: e.target.value})
    }

    componentDidMount() {
        this.openModal()
    }

    render() {
        return (
            <div>
                {/*<button onClick={this.openModal}>name</button>*/}
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={modalStyle}
                    contentLabel=""
                >
                    <input value={this.state.newName} onChange={this.setNewName}/>
                    <button onClick={this.closeModal}>就叫这个吧</button>
                </Modal>
            </div>
        )
    }
}

export default Name
