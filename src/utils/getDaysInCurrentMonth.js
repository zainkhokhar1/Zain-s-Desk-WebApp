function getDaysInCurrentMonth() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth(); // 0-based

  const days = [];
  const totalDays = new Date(year, month + 1, 0).getDate();

  const formatter = new Intl.DateTimeFormat("en-US", { weekday: "short", timeZone: "UTC" });

  for (let day = 1; day <= totalDays; day++) {
    const date = new Date(Date.UTC(year, month, day));
    days.push({
      date: date.toISOString().split("T")[0],
      dayName: formatter.format(date),
      day: day,
    });
  }

  return days;
}

export default getDaysInCurrentMonth;