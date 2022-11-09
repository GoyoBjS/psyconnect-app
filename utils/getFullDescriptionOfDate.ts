export default function getFullDescriptionOfDate(date: Date): string {
    const day = new Date(date).getDay();
    const month = new Date(date).getMonth();
    const year = new Date(date).getFullYear();
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
      day === new Date().getDay() &&
      month === new Date().getMonth() &&
      year === new Date().getFullYear()
    ) {
      return "Hoy";
    } else if (
      day === new Date().getDay() - 1 &&
      month === new Date().getMonth() &&
      year === new Date().getFullYear()
    ) {
      return "Ayer";
    } else {
      return `${dayName[day]}, ${day} de ${monthName[month]} del ${year}`;
    }
  };