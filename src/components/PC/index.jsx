import React from 'react'
import pc from '../../public/images/pc.png'
import pc_screen from '../../public/images/pc.png'
import modalStyle  from '../../modalStyle'
import './pc.css'
import Modal from "react-modal";
import axios from "axios";



class PC extends React.Component {
    constructor() {
        super();
        this.state = {
            modalIsOpen: false,
            pic:''
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
            axios.get('http://123.207.75.151:9996/bitrun/api/v1/get_image/1')
                .then( (res)=>{
                    console.log(res);
                    this.setState({pic: res.data})
                })
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
                    <img src={this.state.pic} onClick={this.closeModal} />
                </Modal>
            </div>
        )
    }
}



export default PC
