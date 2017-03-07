import Vue from 'vue'
import axios from 'axios'
import * as md5 from 'blueimp-md5'

import {PlainObject, ApiPromise} from 'types/interface'
import env from 'env'

// build http header
function buildHeader(): {[key: string]: string} {

    return {
    }
}

// Vue.use(VueResource)
// Vue.http.headers.common = buildHeader()

const host = '/'

let ax = axios.create({
    baseURL: host,
    headers: buildHeader(),
    timeout: 10000,
    responseType: 'json',
    transformRequest: [function(data) {
        return data
    }],
    transformResponse: [function (data) {
        if (data) {
            return data
        } else {
            let msg = 'Unknow Error'
            throw new Error(msg)
        }
    }]
})

function get(url, data?: PlainObject) {
    return ax.get(host + url, {
        params: data
    }).catch((err) => {
        alert(err)
        return err
    })
}

function post(url, data?: PlainObject) {
    return ax.post(host + url, data).catch((err) => {
        alert(err)
        return err
    })
}

export default {
    getPackage (data: PlainObject): ApiPromise<{
        content: string
    }> {
        return ax.get('static/api-test.json', {
            params: data
        })
    },

    ax: ax
}
