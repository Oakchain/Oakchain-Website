export const app_Address = "0x908C8c281039e1E01ccE2D28946849147C9bea5C";
export const app_ABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "newsTitle_",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "body_",
				"type": "string"
			}
		],
		"name": "creatNews",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "comment",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "newscom",
				"type": "string"
			}
		],
		"name": "postComment",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllNews",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "newsBody",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "createdNewsTimestamp",
						"type": "uint256"
					}
				],
				"internalType": "struct News.newsUpload[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "adr",
				"type": "address"
			}
		],
		"name": "getcomment",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "newsCom",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "comm",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "Timestamp",
						"type": "uint256"
					}
				],
				"internalType": "struct News.comment_[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "title_",
				"type": "string"
			}
		],
		"name": "getSingleNews",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "newsBody",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "createdNewsTimestamp",
						"type": "uint256"
					}
				],
				"internalType": "struct News.newsUpload",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];