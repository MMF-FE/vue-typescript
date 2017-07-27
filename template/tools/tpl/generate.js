/**
* Generate component files
* @author Allenice
* @date 2017-03-07 17:21:25
*/

'use strict'

let fs = require('fs-extra')
let path = require('path')
let colors = require('colors')
let confirm = require('../util/confirm')

function compile (tplFile, data) {
    let conent = fs.readFileSync(tplFile, 'utf8')

    return conent.replace(/\${(\w+)}/gi, function (match, name) {
        return data[name] ? data[name] : ''
    })
}

function writeFiles (componentType, distPath, data) {
    let tplPath = path.join(__dirname, './component')

    fs.readdir(tplPath, 'utf8', (err, files) => {
        if (err) {
            console.log(colors.red(err))
            return false
        }

        files.forEach((filename) => {
            let content = compile(path.join(tplPath, filename), data)
            let distFileName = data.componentName + '.' + filename.split('.')[1]

            if (filename.indexOf('index') >= 0) {
                distFileName = 'index.ts'
            }

            let filePath = path.join(distPath, distFileName)

            console.log(colors.green('write file: '))
            console.log(colors.underline(filePath))
            fs.writeFileSync(filePath, content, 'utf8')
        })

        console.log(colors.green(`${componentType}: ${data.componentName} is generated.`))
    })
}

module.exports = function (componentType, distPath, data) {
    if (fs.existsSync(distPath)) {
        confirm(`The component ${componentType}-${data.componentPath} is exist. Do your want to override it?`, (flag) => {
            if (flag) {
                writeFiles(componentType, distPath, data)
            }
        })
    } else {
        fs.mkdirpSync(distPath)
        writeFiles(componentType, distPath, data)
    }
}

