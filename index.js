#!/usr/bin/env node
const { exec } = require("node:child_process");
const os = require("node:os");
const path = require("node:path");

switch (os.platform()) {
    case "win32":
        switch (os.arch()) {
            case "x64":
                const route = path.join(__dirname, "bin", "windows_x86_64.exe")
                exec(`${route} ${process.argv[1]} ${process.argv[2]} ${process.argv[3] ?? ''}`, (error, stdout, stderr) => {
                    if (error || stderr) {
                        console.error(error)
                        return
                    }
                    console.log(stdout)
                })
                break
            case "arm64":
                const routeARM = path.join(__dirname, "bin", "windows_arm64.exe")
                exec(`${routeARM} ${process.argv[1]} ${process.argv[2]} ${process.argv[3] ?? ''}`, (error, stdout, stderr) => {
                    if (error || stderr) {
                        console.error(error)
                        return
                    }
                    console.log(stdout)
                })
                break
            default:
                console.error("Unsupported architecture")
                break
        }
    break
    case "darwin":
        switch (os.arch()) {
            case "x64":
                const route = path.join(__dirname, "bin", "macos_x86_64")
                exec(`${route} ${process.argv[1]} ${process.argv[2]} ${process.argv[3] ?? ''}`, (error, stdout, stderr) => {
                    if (error || stderr) {
                        console.error(error)
                        return
                    }
                    console.log(stdout)
                })
                break
            case "arm64":
                const routeARM = path.join(__dirname, "bin", "macos_arm64")
                exec(`${routeARM} ${process.argv[1]} ${process.argv[2]} ${process.argv[3] ?? ''}`, (error, stdout, stderr) => {
                    if (error || stderr) {
                        console.error(error)
                        return
                    }
                    console.log(stdout)
                })
                break
            default:
                console.error("Unsupported architecture")
                break
        }
        break
    case "linux":
        switch (os.arch()) {
            case "x64":
                const route = path.join(__dirname, "bin", "linux_x86_64")
                exec(`${route} ${process.argv[1]} ${process.argv[2]} ${process.argv[3] ?? ''}`, (error, stdout, stderr) => {
                    if (error || stderr) {
                        console.error(error)
                        return
                    }
                    console.log(stdout)
                })
                break
            case "arm64":
                const routeARM = path.join(__dirname, "bin", "linux_arm64")
                exec(`${routeARM} ${process.argv[1]} ${process.argv[2]} ${process.argv[3] ?? ''}`, (error, stdout, stderr) => {
                    if (error || stderr) {
                        console.error(error)
                        return
                    }
                    console.log(stdout)
                })
                break
            default:
                console.error("Unsupported architecture")
                break
        }
    break
    default:
        console.error("Unsupported platform")
        break
}