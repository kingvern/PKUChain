import React from 'react'
import logo from '../../public/images/logo.svg'
import bg from '../../public/images/bg.jpg'

import bed from '../../public/images/bed.png'
import bit from '../../public/images/bit.png'
import frontbg from '../../public/images/frontbg.png'
import pc from '../../public/images/pc.png'
import quiet from '../../public/images/quilt.png'
import tree from '../../public/images/tree.png'
import './home.css'

import PicWall from '../../components/PicWall'
import Bed from '../../components/Bed'
import Monkey from '../../components/Monkey'
import Header from '../../components/Header'
import Tree from '../../components/Tree'
import Market from '../../components/Market'
import Bag from '../../components/Bag'
import Wallet from '../../components/Wallet'
import Quilt from "../../components/Quilt"
import PC from "../../components/PC"
import Modal from 'react-modal';

import {transaction, simpleStoreContract} from '../../simpleStore'

import nervos from '../../nervos'


const from = 'e3fba7efa7e9b68b18c31f42b41c2dff7dc69b0c'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasLogin: true
        }
    }

    componentDidMount() {
        // let loginStatus = this.checkLoginStatus()
        // this.setState({hasLogin: loginStatus})
        // console.log(this.state)
        this.checkLoginStatus()
        this.getStoreLength()
    }
    getStoreLength(){
        simpleStoreContract.methods
            .getStoreLength()
            .call({
                from,
            })
            .then(length => {
                console.log('length',length)
                // this.setState({ hasLogin: !status })
                // return Promise.all(times.map(time => simpleStoreContract.methods.get(time).call({ from })))
            })
            // .then(texts => {
            //     this.setState({ texts })
            // })
            .catch(console.error)
    }

    checkLoginStatus() {
        // nervos.appchain
        //     .getBlockNumber()
        //     .then(current => {
        //         const tx = {
        //             ...transaction,
        //             validUntilBlock: +current + 88,
        //         }
        //         return simpleStoreContract.methods.checkFirst().send(tx)
        //     })
        //     .then(status => {
        //         this.setState({
        //             hasLogin: !status
        //         })
        //     })
        // const from = nervos.appchain.accounts.wallet[0] ? nervos.appchain.accounts.wallet[0].address : ''

        simpleStoreContract.methods
            .checkFirst()
            .call({
                from,
            })
            .then(status => {
                this.setState({ hasLogin: !status })
                // return Promise.all(times.map(time => simpleStoreContract.methods.get(time).call({ from })))
            })
            // .then(texts => {
            //     this.setState({ texts })
            // })
            .catch(console.error)
    }




    render() {
        return (
            <React.Fragment>
                <Header hasLogin={this.state.hasLogin}/>
                <div className="bg">
                    <PC />

                    <Monkey/>
                    <Bed />
                    <Quilt/>
                    {/*<img className="bg_bit" src={bit} />*/}
                    {/*<img className="bg_pic" src={bed} />*/}
                    {/*<img className="bg_tree" src={tree} />*/}
                    <Tree/>

                    {/*<Monkey/>*/}
                    <PicWall/>

                    {/*<img className="bg_pic" src={frontbg} />*/}
                    <div className="bg_frontbg" />

                    <Market/>
                    <Bag />
                    <Wallet />

                </div>
            </React.Fragment>)
    }

}


export default Home
