import fs from "fs";
import path from "path"
const filesDirectory = path.join(process.cwd(), "content");
export const getFileList = () => {
    let list = [];
    try {
        list = fs.readdirSync(filesDirectory);
    } catch (e) {}
    return list;
};
