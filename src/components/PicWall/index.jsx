import React from 'react'
import pic from '../../public/images/pic.jpg'
import pic_wall from '../../public/images/pic_wall.png'
import {Link} from 'react-router-dom'
import {simpleStoreContract} from '../../simpleStore'

import modalStyle  from '../../modalStyle'

import nervos from '../../nervos'

import Modal from 'react-modal';

require('./pic_wall.css')

const Pic = ({time, text, pic, hasYearLabel}) => {
    const _time = new Date(+time)
    return (
        <div className="pic_item">
            {/*{hasYearLabel ? <div className="list_record_year">{_time.getFullYear()}</div> : null}*/}
            <span>{`${_time.getMonth() + 1}-${_time.getDate()} ${_time.getHours()}:${_time.getMinutes()}`}</span>

            <Link to={`/show/${time}`}>
                <img src={pic}/>
            </Link>
        </div>
    )
}

class PicWall extends React.Component {
    constructor() {
        super();
        this.state = {
            times: [],
            texts: [],
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
        // const from = nervos.appchain.accounts.wallet[0] ? nervos.appchain.accounts.wallet[0].address : ''
        // const from = 'e3fba7efa7e9b68b18c31f42b41c2dff7dc69b0c'
        // simpleStoreContract.methods
        //     .getList()
        //     .call({
        //         from,
        //     })
        //     .then(times => {
        //         times.reverse()
        //         this.setState({times})
        //         return Promise.all(times.map(time => simpleStoreContract.methods.get(time).call({from})))
        //     })
        //     .then(texts => {
        //         this.setState({texts})
        //     })
        //     .then(() => {
        //             console.log(this.state)
        //         }
        //     )
        //     .catch(console.error)
        var times = []
        var texts = []
        for(let i = 0;i < 10; i++){
            times.push(new Date())
            texts.push("hello world")
        }
        this.setState({
            times:times,
            texts:texts
        })
    }

    render() {
        const {times, texts} = this.state

        return (
            <div>
                <div className="pic_wall_button" onClick={this.openModal}><img src={pic_wall} /></div>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={modalStyle}

                    contentLabel="照片墙"
                >
                    <div className="pic_wall">
                        {times.map((time, idx) => (
                            <Pic
                                time={time}
                                text={texts[idx]}
                                pic={pic}
                                key={time}
                                hasYearLabel={idx === 0 || new Date(+time).getFullYear() !== new Date(+times[idx - 1]).getFullYear()}
                            />
                        ))}
                    </div>
                    <button onClick={this.closeModal}>close</button>
                </Modal>
            </div>

        )


    }
}

export default PicWall
