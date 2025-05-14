function getDaysInCurrentMonth() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth(); // 0-based (0 = January)

  const days = [];
  const totalDays = new Date(year, month + 1, 0).getDate(); // total days in month

  for (let day = 1; day <= totalDays; day++) {
    const date = new Date(year, month, day);
    days.push({
      date: date.toISOString().split("T")[0], // e.g. "2025-05-14"
      dayName: date.toLocaleDateString("en-US", { weekday: "short" }), // e.g. "Mon"
      day: day, // just the day number
    });
  }

  return days;
}

export default getDaysInCurrentMonth;
