import { isObject } from "./util";

export function transformRequest (data: any): any {
  if (isObject(data)) { // 过滤掉了 formData 或者 ArrayBuffer 等类型
    return JSON.stringify(data)
  }
  return data
}

export function transformResponse (data: any): any {
  if (typeof data === 'string') {
    try {
      data = JSON.parse(data)
    } catch {}
  }
  return data
}