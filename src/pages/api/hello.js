import axios from "axios";
const path = require("path");
const fs = require("fs");
const moment = require("moment");

const filesDirectory = path.join(process.cwd());
const dir = `${filesDirectory}/service-data`;

const createFile = (filename) => {
    const fullName = `${dir}/${filename}`;
    if (fs.existsSync(fullName)) {
        return fs.readFileSync(fullName, { encoding: "utf8", flag: "r" });
    }
    const content = `File: ${filename} - created at ${moment().format(
        "MMMM Do YYYY, h:mm:ss a"
    )}`;
    try {
        fs.writeFileSync(fullName, content, { encoding: "utf8" });
        return content;
    } catch (err) {
        return "Error: " + err.message;
    }
};
const operateFiles = (filename) => {
    var result = ""
    try{
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
        result = createFile(filename);
    }
    catch(err){
        result = err.message
    }

    return result;
    
};

const fetch = (filename) =>
    new Promise((resolve, reject) => {
        try{
            resolve(operateFiles(filename))
        }
        catch(err){
            reject(err)
        }
    });

export default function handler(req, res) {
    const { filename } = req.body;
    console.log("hostname", process.env.HOSTNAME);
    if (!typeof filename === "string")
        return res.status(200).json({ data: "filename not defined" });
    return fetch(filename)
        .then((data) => res.status(200).json({ data }))
        .catch((err) => res.status(200).json({ data: err.message }));
}
