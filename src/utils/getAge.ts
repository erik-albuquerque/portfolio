import { getYear } from "./getYear"

const getDay = (date: Date) => {
  return new Date(date).getDate()
}


const getMonth = (date: Date) => {
  return new Date(date).getMonth()
}

const getAge = () => {
  const currentDate = new Date()
  const birthday = new Date('11/06/1999')

  const birthdayDay = getDay(birthday)
  const currentDay = getDay(currentDate)

  const birthMonth = getMonth(birthday)
  const currentMonth = getMonth(currentDate)

  const birthYear = getYear(birthday)
  const currentYear = getYear(currentDate)

  const age = currentYear - birthYear

  const prevAge = age - 1

  if (birthMonth === currentMonth && currentDay >= birthdayDay) {
    return age
  } else {
    return prevAge
  }
}

export { getAge, getDay, getMonth, getYear }
