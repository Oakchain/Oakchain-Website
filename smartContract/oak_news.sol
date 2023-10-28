// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract News{
     uint id_;
     
     struct newsDetails{
        uint id;
        string newsTitle;
        uint createdNewsTimestamp;
    }
    
    mapping(address => newsDetails) createNewsLogger;
    mapping(address => bool) insertedLogger;
    address[] keys;

    newsDetails nd;
    
    function creatNews( string memory newsTitle_)  public {
        require(msg.sender != address(0), "Error 404");
        
        nd.id = id_;
        nd.newsTitle = newsTitle_;
        nd.createdNewsTimestamp = block.timestamp;
        id_ = id_+1;

        createNewsLogger[msg.sender] = nd;

        if (!insertedLogger[msg.sender]){
            insertedLogger[msg.sender] = true;
            keys.push(msg.sender);
        }
    }

    function ret (address addr) view public returns(newsDetails memory) {
            return createNewsLogger[addr];
    }

    function loggedData () view public returns(newsDetails[] memory){
         require(keys.length > 0, "No logged data available");
         
            newsDetails[] memory allData = new newsDetails[](keys.length);

         for(uint i = 0; i < keys.length; i++){
            allData[i] = createNewsLogger[keys[i]];
        } return allData;
    } 
}
