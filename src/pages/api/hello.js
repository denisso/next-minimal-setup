import path from "path";
import fs from "fs";
import moment from "moment";

const filesDirectory = path.join(process.cwd());
const dir = `${filesDirectory}/service-data`;

const createFile = (filename) => {
    const fullName = `${dir}/${filename}`;
    if (fs.existsSync(fullName)) {
        //file exists
        return fs.readFileSync(fullName, { encoding: "utf8", flag: "r" });
    }
    const content = `File: ${filename} - created at ${moment().format(
        "MMMM Do YYYY, h:mm:ss a"
    )}`;
    try{
        fs.writeFileSync(fullName, content, { encoding: "utf8" });
        return content;
    }
    catch(err){
        return "Error: " + err.message
    }

};

const operateFiles = (filename) => {
    if (fs.existsSync(dir)) {
        return createFile(filename);
    } else {
        fs.mkdirSync(dir);
        return createFile(filename);
    }
};



export default async function handler(
    req,
    res
) {
    const { filename } = req.query;

    res.status(200).json({ data: operateFiles(filename) });
}
