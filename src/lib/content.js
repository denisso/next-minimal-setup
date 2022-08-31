import fs from "fs"
import chokidar from "chokidar";

let startup = false
export const runWatch = () => {
    if(startup) return
    console.log("watch startup", process.cwd())
    chokidar.watch("./content").on("all", (event, path) => {
        console.log(event, path);
    });
    startup = true
}

