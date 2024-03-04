import ChartCanvas from "../ChartCanvas";

export default function BarChart() {
  const CHART_WIDTH = 900;
  const CHART_HEIGHT = 600;

  const x0 = 50;
  const xAxisLength = CHART_WIDTH - x0 * 2;
  const y0 = 50;
  const yAxisLength = CHART_HEIGHT - y0 * 2;
  const xAxisY = y0 + yAxisLength;

  const MOCK_DATA = [1500, 250, 1000, 700, 100, 50];
  const MOCK_LABELS = ["01/01", "01/02", "01/03", "01/4", "01/05", "01/06"];
  const MAX_DATA = Math.max(...MOCK_DATA);

  return (
    <ChartCanvas height={CHART_HEIGHT} width={CHART_WIDTH}>
      <svg width={CHART_WIDTH} height={CHART_HEIGHT}>
        {/* Y축 */}
        <line x1={x0} y1={20} x2={x0} y2={xAxisY} style={{ stroke: "green" }} />
        {/*--------*/}
        {/* X축 Text */}
        <text
          x={x0 + xAxisLength + 5}
          y={xAxisY + 10}
          style={{ fill: "red", fontSize: "30px" }}
        >
          x
        </text>
        {/*--------------*/}
        {/* X축 */}
        <line
          x1={x0}
          y1={xAxisY}
          x2={x0 + xAxisLength}
          y2={xAxisY}
          style={{ stroke: "green" }}
        />
        {/*-----------*/}
        {/* Y축 단위 표시 */}
        {Array.from({ length: MOCK_DATA.length + 1 })
          .fill(0)
          .map((_, index) => {
            const y = y0 + index * (yAxisLength / MOCK_DATA.length);
            const xGap = 5;
            const yGap = 0;
            const yValue = Math.floor(
              MAX_DATA - (MAX_DATA / MOCK_DATA.length) * index
            );

            return (
              <g key={index}>
                <line
                  x1={x0}
                  x2={CHART_WIDTH - x0}
                  y1={y}
                  y2={y}
                  stroke={MOCK_DATA.length === index ? "none" : "green"}
                />
                <text x={x0 - xGap} x2={x0} y={y + yGap} textAnchor="end">
                  {yValue}
                </text>
              </g>
            );
          })}
        {/*------------*/}

        {/* x축 데이터 */}
        {MOCK_DATA.map((value, index) => {
          const columnGap = 40;
          const gap = 10;
          const width =
            (xAxisLength - columnGap * (MOCK_DATA.length - 1)) /
            MOCK_DATA.length;
          const height = (value / MAX_DATA) * yAxisLength;
          const x = x0 + gap + (index * xAxisLength) / MOCK_DATA.length;
          const y = xAxisY - height;

          return (
            <g key={index}>
              <rect fill="red" x={x} y={y} width={width} height={height} />
              <text x={x + width / 2} y={xAxisY + 20} textAnchor="middle">
                {MOCK_LABELS[index]}
              </text>
            </g>
          );
        })}
        {/*----------*/}
      </svg>
    </ChartCanvas>
  );
}
