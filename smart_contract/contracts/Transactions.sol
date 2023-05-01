// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

//  Định nghĩa hợp đồng thông minh (smart-contract) có tên Transactions
contract Transactions {
    // khai báo biến transactionCount để theo dõi số lượng giao dịch được thêm vào.
    uint256 transactionCount;

    // Sự kiện Transfer ghi lại thông tin về các giao dịch được thêm vào blockchain.
    event Transfer(
        address from,
        address receiver,
        uint amount,
        string message,
        uint256 timestamp,
        string keyword
    );

    // struct TransferStruct để lưu trữ thông tin về một giao dịch bao gồm: địa chỉ người gửi, địa chỉ người nhận, số tiền, thông điệp, thời gian và từ khóa.
    struct TransferStruct {
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    // Biến transactions là một mảng các TransferStruct để lưu trữ thông tin về các giao dịch.
    TransferStruct[] transactions;

    // thêm giao dịch mới vào blockchain
    function addToBlockchain(
        address payable receiver,
        uint amount,
        string memory message,
        string memory keyword
    ) public {
        transactionCount += 1;
        // tạo một TransferStruct mới với thông tin về giao dịch và thêm nó vào mảng transactions.
        transactions.push(
            TransferStruct(
                msg.sender,
                receiver,
                amount,
                message,
                block.timestamp,
                keyword
            )
        );

        emit Transfer(
            msg.sender,
            receiver,
            amount,
            message,
            block.timestamp,
            keyword
        );
    }

    // truy xuất thông tin về tất cả các giao dịch đã được thêm vào.
    function getAllTransactions()
        public
        view
        returns (TransferStruct[] memory)
    {
        return transactions;
    }

    // trả về số lượng giao dịch đã được thêm vào blockchain.
    function getTransactionCount() public view returns (uint256) {
        return transactionCount;
    }
}
