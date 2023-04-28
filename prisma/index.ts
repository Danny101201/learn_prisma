import { Prisma, User } from '@prisma/client';
import { prisma } from '../db/index';
const pets = {
  "favorites": {
    "catBreed": "Turkish van",
    "dogBreed": "Rottweiler",
    "sanctuaries": ["RSPCA", "Alley Cat Allies"],
    "treats": [
      { "name": "Dreamies", "manufacturer": "Mars Inc" },
      { "name": "Treatos", "manufacturer": "The Dog People" }
    ]
  },
  "fostered": {
    "cats": ["Bob", "Alice", "Svetlana the Magnificent", "Queenie"]
  },
  "owned": {
    "cats": ["Elliott"]
  }
}

const createUser = async () => {
  const user = await prisma.user.upsert({
    where: {
      email: 'hiunji64@gmail.com'
    },
    create: {
      email: 'hiunji64@gmail.com',
      city: 'Chai',
      country: "Taiwans",
      pets
    },
    update: {}
  })
}

createUser()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.log(e)
    await prisma.$disconnect()
    process.exit(1)
  })



