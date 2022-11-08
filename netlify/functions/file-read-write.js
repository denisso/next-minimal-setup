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
    if (fs.existsSync(dir)) {
        return createFile(filename);
    } else {
        fs.mkdirSync(dir);
        return createFile(filename);
    }
};

exports.handler = async (event) => {
    try {
        if (event.httpMethod !== "POST") {
            return {
                statusCode: 405,
                body: "Method Not Allowed",
                headers: { Allow: "POST" },
            };
        }
        const data = JSON.parse(event.body);
        if (!data.filename) {
            return {
                statusCode: 422,
                body: "filename are required.",
            };
        }
        const filename = data.filename;
        const body = operateFiles(filename);
        return { statusCode: 200, body };
    } catch (err) {
        return { statusCode: 500, body: err.message };
    }
};
