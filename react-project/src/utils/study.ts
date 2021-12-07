// 学习资源：
// 1、阮一峰TS教程：http://ts.xcatliu.com/
// 2、TS官网手册：https://www.typescriptlang.org/docs/handbook/intro.html
// 3、TS中文网：https://www.tslang.cn/

import { type } from "os"
import { pathToFileURL } from "url"
import { useState } from "_@types_react@16.14.21@@types/react"
import { Col } from "_antd@4.17.2@antd"
import { is } from "_immer@9.0.7@immer/dist/internal"

// TS简介
// TypeScript(微软) vs. Flow（脸谱）
// Angular vs. React

// TS被广泛运用于前端工程，大约在2020下半年（Vue3.0出现）

// TS > ES6 > ES5，TS是JavaScript的超集，它是静态语言。
// TS在前端工程化中，大多数的TS错误，热更新没法识别；只有当我们使用VScode时才能更好捕捉到TS的错误。

// 一、基础类型

const a0: boolean = true
const a1: number = 100
const a2: string = 'hello'

const a3: number | string = '100'

const a4: null = null
const a5: undefined = undefined

const a6: object = { a: 1 }

const a7: Array<number> = [1, 2, 3]
const a8: number[] = [2,3,4]
const a9: object[] = [{a:1},{b:2}]
const a10: Array<number[]> = [[1,1],[2,2],[3,3]]
const a11: Array<any> = [true, 3, 'hello', [1,2]]

// 元组：本质上也是一个数组，只不过数组中每个位置上的数据类型是确定的。
let a12: [string, boolean, object] = ['hello', true, {a:1}]

// any和void
// any表示任意类型（包括自定义类型）
// void表示没有类型（一般函数返回值）
let a13: any = null
a13 = 100

const a14: void = undefined
function foo(): void {
    console.log('--')
}
foo()

// never 一般函数的返回值类型，表示这个函数没有“终点”
function die(): never {
    while(true) {
        console.log('---')
    }
}
function middleware(): never {
    throw(new Error())
}

// enum 枚举类型（数量有限，并元素各不相同）
enum Color { red, green, blue }
console.log(Color.red)
console.log(Color[0])

enum Cate { car='汽车用品', office='办公用品', chothe='男装女装' }
console.log(Cate.car)

// interface 定义一个接口（用于面向对象编程，如果你有兴趣自行搜索）
interface Shape {
    leg: string,
    arm: string
}
class People implements Shape {
    leg = '1m'
    arm = '2m'
}

// interface 自定义类型
interface User {
    username: string,
    password: string,
    age: number,
    addr?: string,    // 可选的属性
    readonly token?: string,  // 只读属性，不能改
    [propName:string]: any,   // 支持扩展属性
    child?: People,
    four?: Shape,
    run?: (start: string)=>boolean,
    eat?(arg:number, arg2?:string):number
}
const zs: User = { username:'zs', password:'123', age:20, addr:'深圳' }
const ls: User = { username:'zs', password:'123', age:20, token:'tt' }
let ww: User = { username:'zs', password:'123', age:20 }
ww.gender = '男'
ww.mobile = '1000'
ww.child = new People()
ww.four = { leg: '1m', arm: '1m' }
ww.run = function () { console.log('run'); return 1===1 }
ww.run('深圳')
ww.eat = function() {return 20}
ww.eat(30,'40')

// type 类型别名
type Hybrid = number | string | boolean | object | null | Shape | User
const b1: Hybrid  = 80
const b2: Hybrid = {a:1}
let b3: Hybrid = true
b3 = 90

type Female = { hair: string } | { makeup: ()=>void }
type Man = { work: ()=>void } & { clown: boolean }

// 类型联合 |
type Human1 = Female | Man
const h1: Human1 = { hair: '1m' }
const h2: Human1 = { work: ()=>console.log('work'), clown: true }

// 类型交叉
type Human2 = Female & Man
const h3: Human2 = { hair: '2m', work:()=>console.log('work'), clown: false }

// type 和 interface
// 1、type用于定义类型别名，可以进行类型交叉和类型联合。
// 2、interface用于自定义类型，还可以参与面向对象编程。
// 3、最佳实践：尽可能只使用interface，如果需要类型交叉或联合时必须用type。


// 函数类型（函数声明）
interface Menu {
    path: string,
    component: string,
    icon: string,
    [propName:string]: any
}
function arrToTree(arr:Array<Menu>): Array<Menu> {
    // do something
    return arr
}
arrToTree([{path:'/article',component:'',icon:''}])

type MathFn = (a:number, b:number)=>number
const add: MathFn  = (a, b) => {
    return a + b
}
const sub: (a:number, b:number)=>number = (a,b)=>a-b
add(1,2)
sub(2,1)

// 在函数声明时，可选参数必须放后面
function bar(a:string, b?:number, c?:boolean): void {
    console.log(a)
    console.log(b)
}

function car(a:number, ...rest:Array<number>): void {
    console.log(a)
    console.log(rest)
}
car(1,2,4,4,5,6,6,7)

// 函数重载
// 泛型
// 声明文件
// 配置文件