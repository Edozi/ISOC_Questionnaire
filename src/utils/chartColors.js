export const CHART_COLORS = [
  "#6366f1", // Indigo
  "#14b8a6", // Teal
  "#f59e0b", // Amber
  "#ec4899", // Pink
  "#8b5cf6", // Purple
  "#06b6d4", // Cyan
  "#ef4444", // Red
  "#22c55e", // Green
  "#f97316", // Orange
  "#3b82f6", // Blue
];

export const getChartColor = (index) => {
  return CHART_COLORS[index % CHART_COLORS.length];
};