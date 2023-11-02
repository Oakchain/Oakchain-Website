// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract News{
    uint id_;
    string[] newstitles;
    address[] keys;
     
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

    struct comment_{
        string newsCom;
        string comm;
        uint Timestamp;
    }
    
    mapping(string => newsUpload) allNews;
    mapping(address => newsDetails) createNewsLogger;
    mapping(address => comment_[]) allComments;
    mapping(address => bool) insertedLogger;
    mapping(address => bool) banList;
   

    newsDetails nd;
    newsUpload nu;
    comment_ c;
    
    
    function creatNews( string memory newsTitle_, string memory body_)  public {
        require(msg.sender != address(0), "Error 404");
        require(!banList[msg.sender], "You are a banned user");
        
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
            require(!banList[msg.sender], "You are a banned user");
            return allNews[title_];
    }

    function getAllNews () view public returns(newsUpload[] memory){
         require(!banList[msg.sender], "You are a banned user");
         require(keys.length > 0, "No logged data available");
         
             newsUpload[] memory allData = new newsUpload[](newstitles.length);

         for(uint i = 0; i < keys.length; i++){
            allData[i] = allNews[newstitles[i]];
        } return allData;
    } 

    function postComment (string memory comment, string memory newscom) public {
        require(!banList[msg.sender], "You are a banned user");
        c.newsCom = comment;
        c.comm = newscom;
        c.Timestamp = block.timestamp;

        allComments[msg.sender].push(c);
    }

    function getcomment(address adr) view  public returns(comment_[] memory){
        return allComments[adr];
    }
}

    contract admin is News {
        function banUser (address addr) public returns (string memory){
        if(!banList[addr]){
            banList[addr] = true;
        } return ("Done");
    }
}