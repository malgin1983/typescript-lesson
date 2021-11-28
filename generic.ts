
//Partial переводит оюязательные в не обязательные
type A = {one: string; two: number}
const ob1: A = {
    one: 'One',
    two: 34,
}

type B = Partial<A>
const ob2: B ={
    one: 'Two'
}

 type C<T> =  {[K in keyof T]?: T[K]}
 const ob3: C<A> = {
    two: 4
 }

 //Requare переводит необязательные поля в обязательные
 type NR = { one?: number;  two?: string; three: boolean }
 type RR = Required<NR>
 type RRR<T> = {[K in keyof  T]-?: T[K]}
 const ob4: RRR<NR> = {one: 1, two: 'aaa', three: false}


//Pick дает возмлжность выбрать свойста из тинн
type F = { one: string, two: number; three: boolean}

type P = Pick<F, 'two' | 'one'>
type PP<A, B extends  keyof  A> = {[C in B]: A[C]}

const newObject: P =  {
    one: 'bbbb',
    two: 322,
}

const newObj2: PP<F, 'one' | 'two'> = {
    one: 'aaaa',
    two: 32,
}

//Omit дает  возможность исключить свойство

 type D = Omit<F, 'title'>
 type myOmit<T, K> = Pick<T, Exclude<keyof T, K>>
 
const ob5: myOmit<F, 'two'> = { one: 'aaaa', three: false}
 