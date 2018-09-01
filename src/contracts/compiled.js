const bytecode = "60806040526002600055600260015534801561001a57600080fd5b5033600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506137b68061006b6000396000f30060806040526004361061011c576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168062b41c3214610121578063010eefdf1461016257806301a9f5171461018f57806305c8489c146102715780631203402f146102c057806316cba53d146102d75780631d9510441461030657806348b340491461033157806349806d7a1461035c5780635740dc8e146103875780638642269e146103b4578063895310e6146103e1578063a2410cf21461041a578063aa18387714610510578063aaa484251461064c578063add82871146106a3578063b1ecec0d1461076a578063b9db15b414610788578063d09b383d1461083c578063d7427d9214610867578063e92b19d6146108a7575b600080fd5b34801561012d57600080fd5b5061014c600480360381019080803590602001909291905050506108d2565b6040518082815260200191505060405180910390f35b34801561016e57600080fd5b5061018d60048036038101908080359060200190929190505050610905565b005b34801561019b57600080fd5b506101f6600480360381019080803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919291929050505061097b565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561023657808201518184015260208101905061021b565b50505050905090810190601f1680156102635780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561027d57600080fd5b5061029c60048036038101908080359060200190929190505050610b39565b60405180848152602001838152602001828152602001935050505060405180910390f35b3480156102cc57600080fd5b506102d5610bac565b005b3480156102e357600080fd5b506102ec610f12565b604051808215151515815260200191505060405180910390f35b34801561031257600080fd5b5061031b61101e565b6040518082815260200191505060405180910390f35b34801561033d57600080fd5b506103466110d1565b6040518082815260200191505060405180910390f35b34801561036857600080fd5b50610371611174565b6040518082815260200191505060405180910390f35b34801561039357600080fd5b506103b260048036038101908080359060200190929190505050611181565b005b3480156103c057600080fd5b506103df600480360381019080803590602001909291905050506111f7565b005b3480156103ed57600080fd5b506103f661157e565b60405180848152602001838152602001828152602001935050505060405180910390f35b34801561042657600080fd5b50610495600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001909291908035906020019092919050505061186d565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156104d55780820151818401526020810190506104ba565b50505050905090810190601f1680156105025780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561051c57600080fd5b5061052561198a565b6040518088815260200180602001878152602001868152602001806020018060200185815260200184810384528a818151815260200191508051906020019080838360005b8381101561058557808201518184015260208101905061056a565b50505050905090810190601f1680156105b25780820380516001836020036101000a031916815260200191505b50848103835287818151815260200191508051906020019060200280838360005b838110156105ee5780820151818401526020810190506105d3565b50505050905001848103825286818151815260200191508051906020019060200280838360005b83811015610630578082015181840152602081019050610615565b505050509050019a505050505050505050505060405180910390f35b34801561065857600080fd5b50610661611ca9565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156106af57600080fd5b50610750600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050611ccf565b604051808215151515815260200191505060405180910390f35b610772611e1f565b6040518082815260200191505060405180910390f35b34801561079457600080fd5b506107b36004803603810190808035906020019092919050505061204c565b6040518084815260200180602001838152602001828103825284818151815260200191508051906020019080838360005b838110156107ff5780820151818401526020810190506107e4565b50505050905090810190601f16801561082c5780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b34801561084857600080fd5b50610851612165565b6040518082815260200191505060405180910390f35b34801561087357600080fd5b5061087c612172565b6040518085815260200184815260200183815260200182815260200194505050505060405180910390f35b3480156108b357600080fd5b506108bc6126e1565b6040518082815260200191505060405180910390f35b600080600060019150600090505b838110156108fb5760028202915080806001019150506108e0565b8192505050919050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561096157600080fd5b6000548111151561097157600080fd5b8060008190555050565b6060600080600061098a613536565b6109926110d1565b935060e060405190810160405280858152602001878152602001603c8152602001600a815260200184805480602002602001604051908101604052809291908181526020018280548015610a0557602002820191906000526020600020905b8154815260200190600101908083116109f1575b5050505050815260200183805480602002602001604051908101604052809291908181526020018280548015610a5a57602002820191906000526020600020905b815481526020019060010190808311610a46575b505050505081526020016001815250905080600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082015181600001556020820151816001019080519060200190610ad1929190613574565b5060408201518160020155606082015181600301556080820151816004019080519060200190610b029291906135f4565b5060a0820151816005019080519060200190610b1f9291906135f4565b5060c0820151816006015590505085945050505050919050565b6000806000610b46613641565b600585815481101515610b5557fe5b90600052602060002090600302016060604051908101604052908160008201548152602001600182015481526020016002820154815250509050806000015181602001518260400151935093509350509193909250565b6000806000806000610ca8600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610c8d5780601f10610c6257610100808354040283529160200191610c8d565b820191906000526020600020905b815481529060010190602001808311610c7057829003601f168201915b50505050506020604051908101604052806000815250611ccf565b151515610cb457600080fd5b600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020945084600401935060009250600092505b600480549050831015610d6557816000908060018154018082558091505090600182039060005260206000209060209182820401919006909192909190916101000a81548160ff021916908315150217905550508280600101935050610d04565b600092505b8380549050831015610dd4576001828585815481101515610d8757fe5b9060005260206000200154815481101515610d9e57fe5b90600052602060002090602091828204019190066101000a81548160ff0219169083151502179055508280600101935050610d6a565b60009050600092505b8180549050831015610e3e57600115158284815481101515610dfb57fe5b90600052602060002090602091828204019190069054906101000a900460ff1615151415610e3157610e2c836108d2565b810190505b8280600101935050610ddd565b60018101856006018190555084600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000820154816000015560018201816001019080546001816001161561010002031660029004610ebb929190613663565b5060028201548160020155600382015481600301556004820181600401908054610ee69291906136ea565b506005820181600501908054610efd9291906136ea565b50600682015481600601559050505050505050565b6000611008600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610fed5780601f10610fc257610100808354040283529160200191610fed565b820191906000526020600020905b815481529060010190602001808311610fd057829003601f168201915b50505050506020604051908101604052806000815250611ccf565b15611016576000905061101b565b600190505b90565b6000600160005460024233604051808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c01000000000000000000000000028152601401925050506020604051808303816000865af1158015611097573d6000803e3d6000fd5b5050506040513d60208110156110ac57600080fd5b8101908080519060200190929190505050600190048115156110ca57fe5b0601905090565b600060024233604051808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c01000000000000000000000000028152601401925050506020604051808303816000865af1158015611145573d6000803e3d6000fd5b5050506040513d602081101561115a57600080fd5b810190808051906020019092919050505060019004905090565b6000600580549050905090565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156111dd57600080fd5b600154811115156111ed57600080fd5b8060018190555050565b600061120161373c565b6112f5600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156112da5780601f106112af576101008083540402835291602001916112da565b820191906000526020600020905b8154815290600101906020018083116112bd57829003601f168201915b50505050506020604051908101604052806000815250611ccf565b15151561130157600080fd5b600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020915060048381548110151561135157fe5b90600052602060002090600402016080604051908101604052908160008201548152602001600182018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561140e5780601f106113e35761010080835404028352916020019161140e565b820191906000526020600020905b8154815290600101906020018083116113f157829003601f168201915b50505050508152602001600282015481526020016003820154815250509050806040015182600301541015151561144457600080fd5b806040015182600301540382600301819055508060600151826002015401826002018190555060648260020154131561148257606482600201819055505b8160040183908060018154018082558091505090600182039060005260206000200160009091929091909150555081600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000820154816000015560018201816001019080546001816001161561010002031660029004611521929190613663565b506002820154816002015560038201548160030155600482018160040190805461154c9291906136ea565b5060058201816005019080546115639291906136ea565b5060068201548160060155905050611579610bac565b505050565b600080600061158b613536565b61167f600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156116645780601f1061163957610100808354040283529160200191611664565b820191906000526020600020905b81548152906001019060200180831161164757829003601f168201915b50505050506020604051908101604052806000815250611ccf565b15151561168b57600080fd5b600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060e0604051908101604052908160008201548152602001600182018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156117795780601f1061174e57610100808354040283529160200191611779565b820191906000526020600020905b81548152906001019060200180831161175c57829003601f168201915b505050505081526020016002820154815260200160038201548152602001600482018054806020026020016040519081016040528092919081815260200182805480156117e557602002820191906000526020600020905b8154815260200190600101908083116117d1575b505050505081526020016005820180548060200260200160405190810160405280929190818152602001828054801561183d57602002820191906000526020600020905b815481526020019060010190808311611829575b505050505081526020016006820154815250509050600160008260c0015182925081915093509350935050909192565b6060600061187961373c565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156118d557600080fd5b6000851115156118e457600080fd5b6118ec612165565b915060806040519081016040528083815260200187815260200186815260200185815250905060048190806001815401808255809150509060018203906000526020600020906004020160009091929091909150600082015181600001556020820151816001019080519060200190611966929190613574565b50604082015181600201556060820151816003015550505085925050509392505050565b60006060600080606080600061199e613536565b611a92600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611a775780601f10611a4c57610100808354040283529160200191611a77565b820191906000526020600020905b815481529060010190602001808311611a5a57829003601f168201915b50505050506020604051908101604052806000815250611ccf565b151515611a9e57600080fd5b600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060e0604051908101604052908160008201548152602001600182018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611b8c5780601f10611b6157610100808354040283529160200191611b8c565b820191906000526020600020905b815481529060010190602001808311611b6f57829003601f168201915b50505050508152602001600282015481526020016003820154815260200160048201805480602002602001604051908101604052809291908181526020018280548015611bf857602002820191906000526020600020905b815481526020019060010190808311611be4575b5050505050815260200160058201805480602002602001604051908101604052809291908181526020018280548015611c5057602002820191906000526020600020905b815481526020019060010190808311611c3c575b505050505081526020016006820154815250509050806000015181602001518260400151836060015184608001518560a001518660c0015185955082925081915097509750975097509750975097505090919293949596565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000606080600085925084915081518351141515611cf05760009350611e16565b600090505b8251811015611e11578181815181101515611d0c57fe5b9060200101517f010000000000000000000000000000000000000000000000000000000000000090047f0100000000000000000000000000000000000000000000000000000000000000027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168382815181101515611d8757fe5b9060200101517f010000000000000000000000000000000000000000000000000000000000000090047f0100000000000000000000000000000000000000000000000000000000000000027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916141515611e045760009350611e16565b8080600101915050611cf5565b600193505b50505092915050565b6000806000611f18600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611efd5780601f10611ed257610100808354040283529160200191611efd565b820191906000526020600020905b815481529060010190602001808311611ee057829003601f168201915b50505050506020604051908101604052806000815250611ccf565b151515611f2457600080fd5b600134111515611f3357600080fd5b349150600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905081816003015401816003018190555080600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000820154816000015560018201816001019080546001816001161561010002031660029004611ff7929190613663565b50600282015481600201556003820154816003015560048201816004019080546120229291906136ea565b5060058201816005019080546120399291906136ea565b5060068201548160060155905050505090565b60006060600061205a61373c565b60048581548110151561206957fe5b90600052602060002090600402016080604051908101604052908160008201548152602001600182018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156121265780601f106120fb57610100808354040283529160200191612126565b820191906000526020600020905b81548152906001019060200180831161210957829003601f168201915b50505050508152602001600282015481526020016003820154815250509050806000015181602001518260400151819150935093509350509193909250565b6000600480549050905090565b600080600080612180613536565b60008060008060008061227d600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156122625780601f1061223757610100808354040283529160200191612262565b820191906000526020600020905b81548152906001019060200180831161224557829003601f168201915b50505050506020604051908101604052806000815250611ccf565b15151561228957600080fd5b600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060e0604051908101604052908160008201548152602001600182018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156123775780601f1061234c57610100808354040283529160200191612377565b820191906000526020600020905b81548152906001019060200180831161235a57829003601f168201915b505050505081526020016002820154815260200160038201548152602001600482018054806020026020016040519081016040528092919081815260200182805480156123e357602002820191906000526020600020905b8154815260200190600101908083116123cf575b505050505081526020016005820180548060200260200160405190810160405280929190818152602001828054801561243b57602002820191906000526020600020905b815481526020019060010190808311612427575b505050505081526020016006820154815250509650606460024233604051808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c01000000000000000000000000028152601401925050506020604051808303816000865af11580156124c4573d6000803e3d6000fd5b5050506040513d60208110156124d957600080fd5b8101908080519060200190929190505050600190048115156124f757fe5b0695506000945060009350600092506000915085876040015113156125e05761251e61101e565b94506125286126e1565b935061253985858960c00151612791565b858760400151606403131561258557858760400151039250600a83131561255f57600a92505b827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0292505b858760400151039250600a83131561259c57600a92505b6125a583612a45565b6014868115156125b157fe5b0691506004805490508210156125cb576125ca82612e03565b5b84848860c00151849a509a509a509a506126d4565b601e87604001511280156125fa5750858760400151606403135b156126725761260761101e565b94506126116126e1565b935061262285858960c00151612791565b858760400151606403039250600f83131561263c57600f92505b61264583612a45565b60028381151561265157fe5b05915061265d82613191565b84848860c00151849a509a509a509a506126d4565b600a8681151561267e57fe5b06905060058113156126b357600581037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0290505b6126bc81612a45565b6000806000838393508292508191509a509a509a509a505b5050505050505090919293565b600060015460024233604051808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c01000000000000000000000000028152601401925050506020604051808303816000865af1158015612758573d6000803e3d6000fd5b5050506040513d602081101561276d57600080fd5b81019080805190602001909291905050506001900481151561278b57fe5b06905090565b612799613641565b600080612890600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156128755780601f1061284a57610100808354040283529160200191612875565b820191906000526020600020905b81548152906001019060200180831161285857829003601f168201915b50505050506020604051908101604052806000815250611ccf565b15151561289c57600080fd5b6060604051908101604052808781526020018681526020018581525092506005839080600181540180825580915050906001820390600052602060002090600302016000909192909190915060008201518160000155602082015181600101556040820151816002015550509150600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090508060050160018303908060018154018082558091505090600182039060005260206000200160009091929091909150555080600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201548160000155600182018160010190805460018160011615610100020316600290046129ed929190613663565b5060028201548160020155600382015481600301556004820181600401908054612a189291906136ea565b506005820181600501908054612a2f9291906136ea565b5060068201548160060155905050505050505050565b612a4d613536565b612b41600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015612b265780601f10612afb57610100808354040283529160200191612b26565b820191906000526020600020905b815481529060010190602001808311612b0957829003601f168201915b50505050506020604051908101604052806000815250611ccf565b151515612b4d57600080fd5b600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060e0604051908101604052908160008201548152602001600182018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015612c3b5780601f10612c1057610100808354040283529160200191612c3b565b820191906000526020600020905b815481529060010190602001808311612c1e57829003601f168201915b50505050508152602001600282015481526020016003820154815260200160048201805480602002602001604051908101604052809291908181526020018280548015612ca757602002820191906000526020600020905b815481526020019060010190808311612c93575b5050505050815260200160058201805480602002602001604051908101604052809291908181526020018280548015612cff57602002820191906000526020600020905b815481526020019060010190808311612ceb575b50505050508152602001600682015481525050905081816040015101816040018181525050606481604001511315612d3d5760648160400181815250505b80600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082015181600001556020820151816001019080519060200190612da3929190613574565b5060408201518160020155606082015181600301556080820151816004019080519060200190612dd49291906135f4565b5060a0820151816005019080519060200190612df19291906135f4565b5060c082015181600601559050505050565b6000612e0d61373c565b6000612f03600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015612ee85780601f10612ebd57610100808354040283529160200191612ee8565b820191906000526020600020905b815481529060010190602001808311612ecb57829003601f168201915b50505050506020604051908101604052806000815250611ccf565b151515612f0f57600080fd5b600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020925082600401849080600181540180825580915050906001820390600052602060002001600090919290919091505550600484815481101515612f8d57fe5b90600052602060002090600402016080604051908101604052908160008201548152602001600182018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561304a5780601f1061301f5761010080835404028352916020019161304a565b820191906000526020600020905b81548152906001019060200180831161302d57829003601f168201915b50505050508152602001600282015481526020016003820154815250509150816060015190506000826060015112156130a357807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0290505b600a6130ad6126e1565b8115156130b657fe5b068101905080836002015401836002018190555082600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082015481600001556001820181600101908054600181600116156101000203166002900461313b929190613663565b50600282015481600201556003820154816003015560048201816004019080546131669291906136ea565b50600582018160050190805461317d9291906136ea565b506006820154816006015590505050505050565b613199613536565b61328d600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156132725780601f1061324757610100808354040283529160200191613272565b820191906000526020600020905b81548152906001019060200180831161325557829003601f168201915b50505050506020604051908101604052806000815250611ccf565b15151561329957600080fd5b600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060e0604051908101604052908160008201548152602001600182018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156133875780601f1061335c57610100808354040283529160200191613387565b820191906000526020600020905b81548152906001019060200180831161336a57829003601f168201915b505050505081526020016002820154815260200160038201548152602001600482018054806020026020016040519081016040528092919081815260200182805480156133f357602002820191906000526020600020905b8154815260200190600101908083116133df575b505050505081526020016005820180548060200260200160405190810160405280929190818152602001828054801561344b57602002820191906000526020600020905b815481526020019060010190808311613437575b5050505050815260200160068201548152505090508181606001510181606001818152505080600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000820151816000015560208201518160010190805190602001906134d6929190613574565b50604082015181600201556060820151816003015560808201518160040190805190602001906135079291906135f4565b5060a08201518160050190805190602001906135249291906135f4565b5060c082015181600601559050505050565b60e060405190810160405280600081526020016060815260200160008152602001600081526020016060815260200160608152602001600081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106135b557805160ff19168380011785556135e3565b828001600101855582156135e3579182015b828111156135e25782518255916020019190600101906135c7565b5b5090506135f09190613765565b5090565b828054828255906000526020600020908101928215613630579160200282015b8281111561362f578251825591602001919060010190613614565b5b50905061363d9190613765565b5090565b6060604051908101604052806000815260200160008152602001600081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061369c57805485556136d9565b828001600101855582156136d957600052602060002091601f016020900482015b828111156136d85782548255916001019190600101906136bd565b5b5090506136e69190613765565b5090565b82805482825590600052602060002090810192821561372b5760005260206000209182015b8281111561372a57825482559160010191906001019061370f565b5b5090506137389190613765565b5090565b608060405190810160405280600081526020016060815260200160008152602001600081525090565b61378791905b8082111561378357600081600090555060010161376b565b5090565b905600a165627a7a72305820df9e49a03bd300c107a48b490fde5ad0acbea89753e144598d1f7c2bd8df9c690029"
const abi = [
	{
		"constant": false,
		"inputs": [],
		"name": "addBanana",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_price",
				"type": "uint256"
			},
			{
				"name": "_effect",
				"type": "int256"
			}
		],
		"name": "addProduct",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "buyProduct",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_animals",
				"type": "uint256"
			}
		],
		"name": "changeAnimals",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_background",
				"type": "uint256"
			}
		],
		"name": "changeBackground",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "checkWalkout",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "int256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_name",
				"type": "string"
			}
		],
		"name": "freeMonkey",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "getPicture",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "setState",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "strA",
				"type": "string"
			},
			{
				"name": "strB",
				"type": "string"
			}
		],
		"name": "strEqual",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "num",
				"type": "uint256"
			}
		],
		"name": "calcucate",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "checkFirst",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getInitcard",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getMonkey",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "int256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256[]"
			},
			{
				"name": "",
				"type": "uint256[]"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getPictureLength",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "getProduct",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getStoreLength",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owneraddress",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "randomAnimals",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "randomBackground",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "randomGene",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]
module.exports = {
    abi,
    bytecode
}