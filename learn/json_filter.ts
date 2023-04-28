import { prisma } from './../db/index';

const findUsr = async () => {
  try {
    const user = await prisma.user.findFirst()
    console.log(user)
  } catch (e) {
    console.log(e)
  }
}

const JSONpath = async () => {
  const getUsers = await prisma.user.findMany({
    where: {
      pets: {
        path: ['favorites', 'catBreed'],
        equals: 'Turkish van'
      }
    }
  })
  console.log(getUsers)
}
const string_starts_with = async () => {
  const getUsers = await prisma.user.findMany({
    where: {
      pets: {
        path: ['favorites', 'catBreed'],
        string_starts_with: 'Turkish'
      }
    }
  })
  console.log(getUsers)
}

const string_ends_with = async () => {
  const getUsers = await prisma.user.findMany({
    where: {
      pets: {
        path: ['favorites', 'catBreed'],
        string_starts_with: 'van'
      }
    }
  })
  console.log(getUsers)
}
const array_contains = async () => {
  const getUsers = await prisma.user.findMany({
    where: {
      pets: {
        path: ['favorites', 'sanctuaries'],
        array_contains: ['RSPCA', 'Alley Cat Allies'],
      }
    }
  })
  console.log(getUsers)
}

const array_starts_with = async () => {
  const getUsers = await prisma.user.findMany({
    where: {
      pets: {
        path: ['favorites', 'sanctuaries'],
        array_starts_with: 'RSPCA',
      }
    }
  })
  console.log(getUsers)
}
const array_ends_with = async () => {
  const getUsers = await prisma.user.findMany({
    where: {
      pets: {
        path: ['favorites', 'sanctuaries'],
        array_ends_with: 'Alley Cat Allies',
      }
    }
  })
  console.log(getUsers)
}

