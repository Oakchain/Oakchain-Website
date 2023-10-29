// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract News{
     uint id_;
     
     struct newsDetails{
        uint id;
        string newsTitle;
        string newsBody;
        uint createdNewsTimestamp;
    }

    struct newsUpload{
        uint id;
        string newsBody;
        uint createdNewsTimestamp;
    }
    
    mapping(string => newsUpload) allNews;
    mapping(address => newsDetails) createNewsLogger;
    mapping(address => bool) insertedLogger;
    string[] newstitles;
    address[] keys;

    newsDetails nd;
    newsUpload nu;
    
    
    function creatNews( string memory newsTitle_, string memory body_)  public {
        require(msg.sender != address(0), "Error 404");
        
        nd.id = id_;
        nd.newsTitle = newsTitle_;
        nd.newsBody = body_;
        nd.createdNewsTimestamp = block.timestamp;

        nu.id = id_;
        nu.newsBody = body_;
        nu.createdNewsTimestamp = block.timestamp;

        id_ = id_+1;

        createNewsLogger[msg.sender] = nd;
        allNews[newsTitle_] = nu;

        newstitles.push(newsTitle_);

        if (!insertedLogger[msg.sender]){
            insertedLogger[msg.sender] = true;
            keys.push(msg.sender);
        }
    }

    function getSingleNews (string memory title_) view public returns(newsUpload memory) {
            return allNews[title_];
    }

    function getAllNews () view public returns(newsUpload[] memory){
         require(keys.length > 0, "No logged data available");
         
             newsUpload[] memory allData = new newsUpload[](newstitles.length);

         for(uint i = 0; i < keys.length; i++){
            allData[i] = allNews[newstitles[i]];
        } return allData;
    } 
}
