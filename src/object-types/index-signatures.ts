// The idea of the index signatures is type objects of unknown structure when
// you only know the key and value types
type SalaryOptions = {
  [key: string]: number;
}

export function totalSalary(salaryObject: SalaryOptions) {
  let total = 0
  for (const name in salaryObject)
    total += salaryObject[name]

  return total
}

const salary1 = {
  baseSalary: 100,
  yearlyBonus: 200,
}

const salary2 = {
  contractSalary: 1000,
}

totalSalary(salary1)
totalSalary(salary2)

// The key of the index signatures can only be a `string`, `number`, `symbol`.
// Other types are not allowed.

// Index signatures vs Record<Keys, Type>
// Utility type Record<Keys, Type> is similar to the index signature

// The big question is ... when to use a Record<Keys, Type> and when an index
// signature?
// The index signature accepts only `string`, `number`, `symbol` as key type.
// The `Record<Keys, Type>` is meant to be specific in regards to keys.

export const object1: Record<string, string> = { prop: 'value' }
export const object2: { [key: string]: string } = { prop: 'value' }

type SpecificSalary = Record<'yearSalary' | 'yearlyBonus', number>
export const salary4: SpecificSalary = {
  yearlyBonus: 100,
  yearSalary: 200,
}
