import React from 'react'

import Modal from 'react-modal';
import {simpleStoreContract} from '../../simpleStore'

// import {transaction, simpleStoreContract} from '../../simpleStore'

import nervos from '../../nervos'


import nameModalStyle  from '../../modalStyle'
const from = '9b408a683b284fd3dae967bfe50528b0983c4865'

require('./name.css')

class Name extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            times: [],
            texts: [],
            modalIsOpen: !this.props.hasLogin,
            newName: ""
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    closeModal() {
        this.setState({modalIsOpen: false})
    }

    setNewName = e => {
        this.setState({newName: e.target.value})
    }

    componentDidMount() {
        console.log("hasLogin:",this.props.hasLogin)
        if(!this.props.hasLogin) {
            this.openModal()
            // this.freeMonkey()
        }

    }


    render() {
        if(this.props.hasLogin){
            return (
                <div>
                </div>
            )
        }
        else {
            return (
                <div>
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        onRequestClose={this.closeModal}
                        style={nameModalStyle}
                        contentLabel=""
                    >

                        <div className="name-bg" >
                           看你还没来过，送你个猴吧
                            <button onClick={this.props.onClick}>点击</button>
                        </div>
                    </Modal>
                </div>
            )
        }

    }
}

export default Name
