import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import { CHART_COLORS } from "../../utils/chartColors";


function ChartCard({
  title,
  subtitle,
  data,
  type = "bar",
  layout = "horizontal",
  height = 300,
  xDomain,
  yAxisWidth = 100,
  children,
}) {
  /*
   * =========================================================
   * CUSTOM CONTENT MODE
   * =========================================================
   */

  if (children) {
    return (
      <div className="chart-card">

        <div className="chart-card-header">
          <div>
            <h3>{title}</h3>

            {subtitle && (
              <p>{subtitle}</p>
            )}
          </div>
        </div>

        <div className="chart-container">
          {children}
        </div>

      </div>
    );
  }


  /*
   * =========================================================
   * NORMALIZE DATA
   *
   * Recharts requires an array.
   * =========================================================
   */

  const chartData = Array.isArray(data)
    ? data
    : [];


  /*
   * =========================================================
   * EMPTY STATE
   * =========================================================
   */

  if (chartData.length === 0) {
    return (
      <div className="chart-card">

        <div className="chart-card-header">
          <div>
            <h3>{title}</h3>

            {subtitle && (
              <p>{subtitle}</p>
            )}
          </div>
        </div>

        <div className="chart-empty">
          No responses available yet.
        </div>

      </div>
    );
  }


  /*
   * =========================================================
   * PIE CHART
   * =========================================================
   */

  if (type === "pie") {
    return (
      <div className="chart-card">

        <div className="chart-card-header">
          <div>
            <h3>{title}</h3>

            {subtitle && (
              <p>{subtitle}</p>
            )}
          </div>
        </div>

        <div
          className="chart-container"
          style={{ height }}
        >
          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <PieChart>

              <Tooltip />

              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {chartData.map(
                  (entry, index) => (
                    <Cell
                      key={`pie-cell-${index}`}
                      fill={
                        CHART_COLORS[
                          index %
                            CHART_COLORS.length
                        ]
                      }
                    />
                  )
                )}
              </Pie>

            </PieChart>
          </ResponsiveContainer>
        </div>

      </div>
    );
  }


  /*
   * =========================================================
   * VERTICAL BAR CHART
   * =========================================================
   */

  if (layout === "vertical") {
    return (
      <div className="chart-card">

        <div className="chart-card-header">
          <div>
            <h3>{title}</h3>

            {subtitle && (
              <p>{subtitle}</p>
            )}
          </div>
        </div>

        <div
          className="chart-container"
          style={{ height }}
        >
          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <BarChart
              data={chartData}
              layout="vertical"
              margin={{
                top: 10,
                right: 20,
                left: 10,
                bottom: 10,
              }}
            >

              <CartesianGrid
                strokeDasharray="3 3"
                horizontal={false}
              />

              <XAxis
                type="number"
                allowDecimals={false}
                domain={
                  xDomain || [0, "auto"]
                }
                tickLine={false}
                axisLine={false}
              />

              <YAxis
                type="category"
                dataKey="name"
                width={yAxisWidth}
                tickLine={false}
                axisLine={false}
              />

              <Tooltip />

              <Bar
                dataKey="value"
                radius={[
                  0,
                  6,
                  6,
                  0,
                ]}
              >
                {chartData.map(
                  (entry, index) => (
                    <Cell
                      key={`bar-cell-${index}`}
                      fill={
                        CHART_COLORS[
                          index %
                            CHART_COLORS.length
                        ]
                      }
                    />
                  )
                )}
              </Bar>

            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>
    );
  }


  /*
   * =========================================================
   * STANDARD BAR CHART
   * =========================================================
   */

  return (
    <div className="chart-card">

      <div className="chart-card-header">
        <div>
          <h3>{title}</h3>

          {subtitle && (
            <p>{subtitle}</p>
          )}
        </div>
      </div>

      <div
        className="chart-container"
        style={{ height }}
      >
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <BarChart
            data={chartData}
            margin={{
              top: 10,
              right: 10,
              left: -20,
              bottom: 5,
            }}
          >

            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
            />

            <XAxis
              dataKey="name"
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              allowDecimals={false}
              domain={xDomain}
              tickLine={false}
              axisLine={false}
            />

            <Tooltip />

            <Bar
              dataKey="value"
              radius={[
                6,
                6,
                0,
                0,
              ]}
            >
              {chartData.map(
                (entry, index) => (
                  <Cell
                    key={`bar-cell-${index}`}
                    fill={
                      CHART_COLORS[
                        index %
                          CHART_COLORS.length
                      ]
                    }
                  />
                )
              )}
            </Bar>

          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}

export default ChartCard;