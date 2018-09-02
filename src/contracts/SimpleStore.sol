pragma solidity 0.4.24;

contract CoreContract {

    uint256 background = 4;
    uint256 animals = 3;

    struct Monkey {
        string name;
        int256 mood;
        uint256 banana;
        uint256 state;
    }

    struct Product {
        uint256 key;
        string name;
        uint256 price;
        int256 effect;
    }

    struct Picture {
        uint256 backgroundid;
        uint256 animalsid;
        uint256 monkeystate; 
    }

    mapping (address => Monkey) owner;
    mapping (uint256 => address) product2owner;
    mapping (uint256 => address) picture2owner;
    mapping (uint256 => Product) store;
    Picture[] pictures;
    uint256[] products;
    uint256 tree = 5;
    
    /*

    address public owneraddress;

    function CoreContract() {
        owneraddress = msg.sender;
    }
    

    modifier onlyOwner() {
        require(msg.sender == owneraddress);
        _;
    }

    modifier exsitMonkey() {
        require(!strEqual(owner[msg.sender].name,""));
        _;
    }

    function addProduct (string _name,uint256 _price, int256 _effect) returns (string){
        require(_price > 0);
        if(msg.sender == owneraddress){
            uint256 _key = getStoreLength();
            Product memory product = Product({key:_key, name:_name, price:_price, effect:_effect});
            store.push(product);
            return _name;
        }
    }

    function changeBackground (uint256 _background) {
        if(msg.sender == owneraddress){
            require(_background > background);
            background = _background;
        }
    }

    function changeAnimals (uint256 _animals) {
        if(msg.sender == owneraddress){
            require(_animals > animals);
            animals = _animals;
        }
    }
*/
    function initProduct() public {
        Product memory product0 = Product({key:0,name:"hat",price:2,effect:2});
        Product memory product1 = Product({key:1,name:"T-shirt",price:5,effect:5});
        Product memory product2 = Product({key:2,name:"surgur",price:1,effect:1});
        Product memory product3 = Product({key:3,name:"lighting",price:3,effect:3});
        Product memory product4 = Product({key:4,name:"gold",price:10,effect:10});
        store[0] = product0;
        store[1] = product1;
        store[2] = product2;
        store[3] = product3;
        store[4] = product4;
    }


    function strEqual(string strA, string strB) public returns(bool) {
            bytes memory byteA = bytes(strA);
            bytes memory byteB = bytes(strB);
            if (byteA.length != byteB.length) {
                return false;
            }else {
                for (uint256 i=0; i < byteA.length; i++){
                    if (byteA[i] != byteB[i]) {
                        return false;
                    }
                }
            }
            return true;
        }

    function checkFirst () public view returns(bool){
        if(strEqual(owner[msg.sender].name,"")){
            return false;
        }
        else{
            return true;
        }
    }


    function freeMonkey () public{
        int256 _mood = 60;
        uint256 _banana = 100;
        uint256 _state = 1;
        string memory _name = "bitrun";
        Monkey memory monkey = Monkey({name:_name, mood:_mood, banana:_banana, state:_state});
        owner[msg.sender] = monkey;
    }

    function getMonkey () public view  returns (string, int256, uint256, uint256) {
        Monkey memory monkey = owner[msg.sender];
        return (monkey.name, monkey.mood, monkey.banana, monkey.state);
    }

    function getInitcard () public view returns (uint256, uint256, uint256) {
        Monkey memory monkey = owner[msg.sender];
        return (1, 0, monkey.state);
    }

    function calcucate (uint256 num) public view returns(uint256) {
        uint256 res = 1;
        for(uint256 i = 0; i < num; i++){
            res = res * 2;
        }
        return res;
    }

    function getOneProducts () public view returns (uint256[]) {
        uint256[] res;
        for(uint256 i = 0;i<products.length;i++){
            if (product2owner[i] == msg.sender){
                res.push(i);
            }
        }
        return res;
    }


    function setState () public  {
        Monkey storage monkey = owner[msg.sender];
        uint256[] memory tmpproducts = getOneProducts();
        uint256 i = 0;
        bool[] flag;
        for(i = 0; i < 5; i ++) {
            flag.push(false);
        }
        for(i = 0; i < tmpproducts.length; i ++) {
            flag[tmpproducts[i]] = true;
        }
        uint256 res = 0;
        for(i = 0; i < flag.length; i++) {
            if(flag[i] == true){
                res = res + calcucate(i);
            }
        }
        monkey.state = res + 1;
        owner[msg.sender] = monkey;
    }

    function setMood (int256 _mood) private {
        Monkey memory monkey = owner[msg.sender];
        monkey.mood = monkey.mood + _mood;
        if(monkey.mood > 100) {
            monkey.mood = 100;
        }
        owner[msg.sender] = monkey;
    }

    function setBanana (uint256 _banana) private {
        Monkey memory monkey = owner[msg.sender];
        monkey.banana = monkey.banana + _banana;
        owner[msg.sender] = monkey;
    }

    function setProduct (uint256 _key) private {
        Monkey storage monkey = owner[msg.sender];
        uint256 id = products.push(_key);
        product2owner[id-1] = msg.sender;
        Product memory product = store[_key];
        int256 effect = product.effect;
        if(product.effect < 0) {
            effect = (-1) * effect;
        }
        effect = effect + int256(randomAnimals() % 10);
        monkey.mood = monkey.mood + effect;
        owner[msg.sender] = monkey;
    }

    function setPicture (uint256 _backgroundid, uint256 _animalsid, uint256 _monkeystate) public {
        Picture memory picture = Picture({backgroundid:_backgroundid, animalsid:_animalsid, monkeystate:_monkeystate});
        uint256 id = pictures.push(picture);
        picture2owner[id-1] = msg.sender;
    }

    function getProduct (uint256 _id) public view returns (uint256, string, uint256) {
        uint256 key = products[_id];
        Product memory product = store[key];
        return (product.key, product.name, product.price);
    }
    
    function getStore (uint256 _id) public view returns (uint256, string, uint256) {
        Product memory product = store[_id];
        return (product.key, product.name, product.price);
    }
    
    

    function buyProduct (uint256 _id) public{
        Monkey storage monkey = owner[msg.sender];
        Product memory product = store[_id];
        require(monkey.banana >= product.price);
        monkey.banana = monkey.banana - product.price;
        monkey.mood = monkey.mood + product.effect;
        if (monkey.mood > 100) {
            monkey.mood = 100;
        }
        uint256 id = products.push(_id);
        product2owner[id-1] = msg.sender;
        owner[msg.sender] = monkey;
        setState();
        if(tree == 0){
            addTree();
        }
    }

    function addBanana () public payable {
        require(msg.value > 1);
        uint256 value = uint256(msg.value);
        Monkey storage monkey = owner[msg.sender];
        monkey.banana = monkey.banana + value;
        owner[msg.sender] = monkey;
    }


    function getPictureLength () public view returns (uint256) {
        return pictures.length;
    }


    function getPicture (uint256 _id) public view returns (uint256, uint256, uint256) {
        Picture memory picture = pictures[_id];
        return (picture.backgroundid, picture.animalsid, picture.monkeystate);
    }

    function getOnePictures () public view returns (uint256[]) {
        uint256[] res;
        for(uint256 i = 0 ; i < pictures.length; i ++) {
            if(picture2owner[i] == msg.sender){
                res.push(i);
            }
        }
        return res;
    }

    function addTree () public {
        uint256 probability = uint256(sha256(now, msg.sender))%100;
        if(probability > 80) {
            tree = probability % 5;
        }
        
    }

    function getBananaFromTree () public {
        Monkey memory monkey = owner[msg.sender];
        monkey.banana = monkey.banana + tree;
        owner[msg.sender] = monkey;
        tree = 0;
    }

    function addPicture(uint256 _randombackground, uint256 _randomanimals, uint256 _state) private {
        Picture memory picture = Picture({backgroundid:_randombackground, animalsid: _randomanimals, monkeystate: _state});
        uint256 id = pictures.push(picture);
        picture2owner[id-1] = msg.sender;
    }


    function randomGene () public view returns (uint256) {
        return uint256(sha256(now, msg.sender));
    }

    function randomBackground () public view returns(uint256) {
        return uint256(sha256(now, msg.sender)) % background + 1;
    }

    function randomAnimals () public view returns (uint256) {
        return uint256(sha256(now, msg.sender)) % animals;
    }

    function checkWalkout () public returns (uint256, uint256, uint256, int256) {
        Monkey memory monkey = owner[msg.sender];
        uint256 probability = uint256(sha256(now, msg.sender)) % 100;
        uint256 randombackground = 0;
        uint256 randomanimals = 0;
        int256 mood = 0;
        uint256 gift = 0;
        if (monkey.mood > int256(probability)){
            randombackground = randomBackground();
            randomanimals = randomAnimals();
            addPicture(randombackground, randomanimals, monkey.state);
            if(100 - monkey.mood > int256(probability)) {
                mood = monkey.mood - int256(probability);
                if (mood > 10) {
                    mood = 10;
                }
                mood = (-1) * mood;
            }
            mood = monkey.mood - int256(probability);
            if (mood > 10) {
                mood = 10;
            }
            setMood(mood);
            gift = probability % 20;
            if (gift < 5) {
                setProduct(gift);
            }
            return (randombackground, randomanimals, monkey.state, int256(gift));
        } else if (monkey.mood < 30 && (100 - monkey.mood) > int256(probability)){
            randombackground = randomBackground();
            randomanimals = randomAnimals();
            addPicture(randombackground, randomanimals, monkey.state);
            mood = 100 - monkey.mood - int256(probability);
            if (mood > 15) {
                mood = 15;
            }
            setMood(mood);
            gift = uint256(mood / 2);
            setBanana(gift);
            return (randombackground, randomanimals, monkey.state, int256(gift));
        } else {
            int256 weather = int256(probability % 10);
            if( weather > 5) {
                weather = (-1) * (weather - 5);
            }
            setMood(weather);
            return (0, 0, 0, weather);
        }
        return (randombackground, randomanimals, monkey.state, int256(gift));
    }

    function walkOut() public returns (uint256, uint256, uint256, int256) {
        Monkey memory monkey = owner[msg.sender];
        uint256 randombackground = randomBackground();
        uint256 randomanimals = randomAnimals();
        addPicture(randombackground, randomanimals, monkey.state);
        uint256 probability = uint256(sha256(now, msg.sender)) % 10;
        int256 mood = monkey.mood + int256(probability);
        setMood(mood);
        uint256 gift = uint256(probability % 20);
        if (gift < 5) {
            setProduct(gift);
        }
        return (randombackground, randomanimals, monkey.state, int256(gift));
    }

    function comeHome() public returns (uint256, uint256, uint256, int256) {
        Monkey memory monkey = owner[msg.sender];
        uint256 randombackground = randomBackground();
        uint256 randomanimals = randomAnimals();
        addPicture(randombackground, randomanimals, monkey.state);
        uint256 probability = uint256(sha256(now, msg.sender)) % 10;
        int256 mood = monkey.mood + int256(probability);
        setMood(mood);
        uint256 gift = uint256(mood / 2);
        setBanana(gift);
        return (randombackground, randomanimals, monkey.state, int256(gift));
    }

    function weather () public returns (uint256, uint256, uint256, int256) {
        uint256 probability = uint256(sha256(now, msg.sender)) % 10;
        int256 weather = int256(probability);
        if( weather > 5) {
            weather = (-1) * (weather - 5);
        }
        setMood(weather);
        return (0, 0, 0, weather);
    }

    function finalPicture() public returns (uint256, uint256, uint256) {
        uint256 randombackground = 1;
        uint256 randomanimals = 1;
        uint256 state = 2;
        addPicture(randombackground,randomanimals,state);
        return (randombackground,randomanimals,state);
    }
}
