const fs = require('fs');

// 5000個のユーザーデータを生成する関数
function generateUsers(numUsers) {
    const users = [];
    for (let i = 1; i <= numUsers; i++) {
        users.push({
            id: i,
            name: `User${i}`,
            age: 20 + (i % 100)
        });
    }
    return users;
}

// データをJSON形式で生成
const data = {
    data: generateUsers(5000)
};

// JSON形式に変換
const jsonData = JSON.stringify(data, null, 2);

// ファイルに書き出し
fs.writeFile('medium-large-data.json', jsonData, 'utf8', (err) => {
    if (err) {
        console.log('エラーが発生しました:', err);
    } else {
        console.log('ファイルが正常に保存されました。');
    }
});
