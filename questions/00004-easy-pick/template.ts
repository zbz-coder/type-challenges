// type MyPick<T, K> = any

type MyPick<T, K extends keyof T> = {
  [key in K]: T[key]
}

/**
 * keyof: 取 interface 的键后保存为联合类型
 */
interface userinfo {
  name: string
  age: number
}
type keyofValues = keyof userinfo
// keyofValues = 'name' | 'age'

/**
 * in: 取联合类型的值，主要用于数组和对象的构建
 * 切记不要用于 interface， 否则会报错
 */
type name = 'first'
