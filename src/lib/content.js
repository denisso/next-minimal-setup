import fs from "fs";
import chokidar from "chokidar";
// const EventEmitter = require("events").EventEmitter;

// class Observer extends EventEmitter {
//     constructor() {
//         super();
//         this.startup = false;
//         const files = {};
//         this.files = files
//         function gg(event){
//             console.log("event file-update", event)
//             files.event = event;
//         }
//         this.gg = gg.bind(files)
//         this.on("file-update", gg);
//         function getFileList(){
//             return this.files
//         }
//         this.getFileList = getFileList.bind(this)
//         function bg(files, event, path) {
//             switch (event) {
//                 case "add":
//                 case "change":
//                     try {
//                         const stats = fs.statSync(path);
//                         this.emit("file-update", { event });

//                         files["gg"] = 0
//                         console.log("emit file-update", path)
//                     } catch (err) {
//                         console.error(err);
//                     }
//                     break;
//                 case "unlink":
//                     try {
//                         this.emit("file-update", { event });
//                         console.log("emit file-update")
//                     } catch (err) {
//                         console.error(err);
//                     }
//                     break;
//             }
//         }

//         this.bg = bg.bind(this, this.files)
//     }

//     watchFile() {
//         console.log("watchFile")
//         if (this.startup) return;
//         console.log("watchFile2")
//         chokidar.watch("./content").on("all", this.bg);
//         this.startup = true;
//     }
// }
// var observer = new Observer();
// export const runWatch = () => {
//     observer.watchFile();
// };
// export const getFileList = () => {
//     console.log("getFileList", observer.getFileList());
//     return observer.getFileList();
// };
let startup = false;
module.listContent = { count: 6 };
export const runWatch = () => {
    if (startup) return;
    chokidar.watch("./content").on("all", (event, path) => {

        switch (event) {
            case "add":
            case "change":
                try {
                    const stats = fs.statSync(path);
                    module.listContent[path] = stats.mtimeMs;
                    console.log(module.listContent)
                } catch (err) {
                    console.error(err);
                }
                break;
            case "unlink":
                try {
                    // delete module.listContent[path];
                } catch (err) {
                    console.error(err);
                }
                break;
        }
    });
    startup = true;
};

export const getFileList = () => {
    console.log("getFileList", module.listContent);
    return module.listContent;
};
