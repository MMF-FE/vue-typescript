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

yargs.command(['add <componentName>', 'a'], 'Add a component to project', {
    type: {
        alias: 't',
        describe: 'The component type',
        choices: ['view', 'ui', 'tag'],
        default: 'view'
    },
    path: {
        alias: 'p',
        describe: 'The target path',
        default: 'src/components'
    },
    help: {
        alias: 'h'
    }
}, function (args) {
    let componentPath = args.componentName
    let componentName = componentPath.substr(componentPath.lastIndexOf('/') + 1)
    let ComponentName = componentName[0].toLocaleUpperCase() + componentName.substr(1)

    if (args.type) {
        args.type += 's'
    }

    componentPath = path.join(__dirname,'../' + args.path, args.type, componentPath)

    generate(args.type, componentPath, {
        componentPath: args.componentName.replace(/\//g, '-'),
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
