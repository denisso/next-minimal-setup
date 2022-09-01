import fs from "fs";

export const getFileList = () => {
    const folderPath = "./content";
    let list = [];
    try {
        list = fs.readdirSync(folderPath);
    } catch (e) {}
    return list;
};
