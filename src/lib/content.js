import fs from "fs";
import path from "path";
const filesDirectory = path.join(process.cwd());
export const getFilesList = () => {
    let list = [];
    try {
        const fs = require("fs");
        const content = "Some content!";
        fs.writeFile("1111111test11111.txt", content, (err) => {
            if (err) {
                console.error(err);
                return;
            } 
        });

        list = fs.readdirSync(filesDirectory);
    } catch (e) {
        list.push(`error: ${e.message}`);
    }
    return list;
};
