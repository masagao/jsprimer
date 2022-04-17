const nameArr = ["主田", "先岡", "後藤"];
nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

const newNameArr = nameArr.map((name) => {
    if (name === "主田") {
        return name;
    } else {
        return `${name}さん`;
    }
});
