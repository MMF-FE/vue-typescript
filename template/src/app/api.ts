import Vue from 'vue'
import axios from 'axios'
import * as md5 from 'md5'
import stringify = require('qs/lib/stringify')

import { PlainObject } from 'types/interface'
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
        if (data instanceof FormData) return data
        return stringify(data)
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

function processData (data: any = {}) {
    if (data instanceof FormData) {
        // data.append('token', token)
    } else {
        // data.token = token
    }

    return data
}

function get<T>(url, data?: PlainObject): Promise<T> {
    return ax.get(url, {
        params: processData(data)
    }).then((res) => {
        return res.data
    }).catch((err) => {
        alert(err)
        return err
    })
}

function post<T>(url, data?: PlainObject): Promise<T> {
    return ax.post(url, processData(data))
    .then((res) => {
        return res.data
    })
    .catch((err) => {
        alert(err)
        return err
    })
}

export default {
    getPackage (data: PlainObject) {
        return get<{
            content: string
        }>('static/api-test.json', {
            params: data
        })
    },

    ax: ax,
    axios: axios
}
