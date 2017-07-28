#!/usr/bin/env node
/**
* Command line tool, 可以根据实际需要修改
* @author Allenice
* @since 2017-06-30 22:26:56
*/

'use strict'

var fs = require('fs-extra')
var os = require('os')
var path = require('path')
var yargs = require('yargs')
var generate = require('./tpl/generate')
var getGitUser = require('./util/getGitUser')
var version = require('../package.json').version
var getDate = require('./util/getDate')

var gitUser = getGitUser()
var user = os.userInfo({encoding: 'utf8'})

yargs.command(['add <componentPath>', 'a'], 'Add a component to project', {
    type: {
        alias: 't',
        describe: 'The component type'
    },
    root: {
        alias: 'r',
        describe: 'The component root path',
        default: 'src/components'
    },
    help: {
        alias: 'h'
    }
}, function (args) {
    let componentPath = args.componentPath
    let componentName = componentPath.substr(componentPath.lastIndexOf('/') + 1)
    let ComponentName = componentName[0].toLocaleUpperCase() + componentName.substr(1)
    let type = args.type

    if (!type) {
        type = componentPath.split('/')[0]
        if (/s$/.test(type)) {
            type = type.slice(0, -1)
        }
    }

    componentPath = path.join(__dirname,'../' + args.root, componentPath)

    generate(type, componentPath, {
        type: type,
        componentPath: args.componentPath.toLowerCase().split('/').slice(1).join('-'),
        componentName: componentName,
        ComponentName: ComponentName,
        username: gitUser || user.username,
        version: version,
        curDate: getDate()
    })
})
.version(function () {
    return version
})
.alias('version', 'v')
.help()
.argv
