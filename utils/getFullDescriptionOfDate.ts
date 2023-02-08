export default function getFullDescriptionOfDate(date: Date): string {
  console.log(date);
    const day = new Date(date).getDate();
    const month = new Date(date).getMonth();
    const year = new Date(date).getFullYear();
    const weekDay = new Date(date).getDay();

    const dayName = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ];
    const monthName = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
    if (
      day === new Date().getDate() &&
      month === new Date().getMonth() &&
      year === new Date().getFullYear()
    ) {
      return "Hoy";
    } else if (
      day === new Date().getDate() - 1 &&
      month === new Date().getMonth() &&
      year === new Date().getFullYear()
    ) {
      return "Ayer";
    } else {
      return `${dayName[weekDay]}, ${day} de ${monthName[month]} del ${year}`;
    }
  };