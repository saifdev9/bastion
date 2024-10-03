export default function dateFormat (dateStr) {

  const month =  Number(new Date(dateStr).getMonth()) + 1
  const date  =  Number(new Date(dateStr).getDate())
  const formattedDate = `${new Date(dateStr).getFullYear()}-${month < 10 ? `0${month}`: month}-${date < 9 ? `0${date}` : date}`

  return formattedDate
} 