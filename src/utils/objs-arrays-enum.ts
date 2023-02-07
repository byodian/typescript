enum Role {AUTHOR, ADMIN}

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: number;
  other: [number, string];
} = {
  name: 'box',
  age: 1,
  hobbies: ['Sports', 'Cooking', 'Climbing'],
  role: Role.AUTHOR,
  other: [2, 'author'],
}

const personRole = person.role
const personName = person.name

const favoriteActivities: string[] = []
for (const hobby of person.hobbies) {
  hobby.toUpperCase()
  favoriteActivities.push(hobby)
}
