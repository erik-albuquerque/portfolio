const getYear = (date: Date | undefined = new Date()) => {
  const year = date.getFullYear()

  return year
}

export { getYear }
