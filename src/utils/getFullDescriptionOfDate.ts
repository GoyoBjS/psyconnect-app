interface DateDesc {
  day: number
  month: number
  year: number
  weekDay: number
}

export default function getFullDescriptionOfDate(date: string): string {
  const DateDesc: DateDesc = {
    day: new Date(date).getDate(),
    month: new Date(date).getMonth(),
    year: new Date(date).getFullYear(),
    weekDay: new Date(date).getDay()
  }

  const dayName: Array<string> = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado'
  ]
  const monthName: Array<string> = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
  ]
  if (
    DateDesc.day === new Date().getDate() &&
    DateDesc.month === new Date().getMonth() &&
    DateDesc.year === new Date().getFullYear()
  ) {
    return 'Hoy'
  } else if (
    DateDesc.day === new Date().getDate() - 1 &&
    DateDesc.month === new Date().getMonth() &&
    DateDesc.year === new Date().getFullYear()
  ) {
    return 'Ayer'
  } else {
    return `${dayName[DateDesc.weekDay]}, ${DateDesc.day} de ${monthName[DateDesc.month]} del ${
      DateDesc.year
    }`
  }
}
