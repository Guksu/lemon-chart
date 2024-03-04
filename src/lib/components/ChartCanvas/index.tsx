interface Props {
  children: React.ReactNode;
  width?: number;
  height?: number;
  backgroundColor?: string;
}

export default function ChartCanvas({
  children,
  width = 900,
  height = 600,
  backgroundColor = "blanchedalmond",
}: Props) {
  return (
    <div
      style={{
        backgroundColor,
        width,
        height,
      }}
    >
      {children}
    </div>
  );
}
