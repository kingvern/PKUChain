import React from 'react'
import pc from '../../public/images/pc.png'
import pc_screen from '../../public/images/pc.png'
import modalStyle  from '../../modalStyle'
import './pc.css'
import Modal from "react-modal";



class PC extends React.Component {
    constructor() {
        super();
        this.state = {
            modalIsOpen: false
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }


    componentDidMount() {
        // this.openModal()
    }

    render() {
        return (
            <div>
                <div className="bg_pc" >
                    <img src={pc} onClick={this.openModal} />
                </div>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={modalStyle}
                    contentLabel=""
                >
                    <img src={pc_screen} onClick={this.closeModal} />
                </Modal>
            </div>
        )
    }
}



export default PC
