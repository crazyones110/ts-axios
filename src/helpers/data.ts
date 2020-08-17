import { isObject } from "./util";

export function transformRequest (data: any): any {
  if (isObject(data)) { // 过滤掉了 formData 或者 ArrayBuffer 等类型
    return JSON.stringify(data)
  }
  return data
}