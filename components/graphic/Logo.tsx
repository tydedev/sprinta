import Image from "next/image";

const symbolSizes = {
  sm: 24,
  md: 32,
  lg: 40,
} as const;

const logotypeSizes = {
  sm: { width: 96, height: 24 },
  md: { width: 128, height: 32 },
  lg: { width: 160, height: 40 },
} as const;

interface Props {
  size?: keyof typeof symbolSizes;
  variant?: "symbol" | "logotype";
}

export const Logo = ({ size = "md", variant = "symbol" }: Props) => {
  if (variant === "logotype") {
    const { width, height } = logotypeSizes[size];

    return (
      <Image
        src="/images/logotype.svg"
        alt="Logo"
        width={width}
        height={height}
        priority
      />
    );
  }

  const dimension = symbolSizes[size];

  return (
    <Image
      src="/images/symbol.svg"
      alt="Logo"
      width={dimension}
      height={dimension}
      priority
    />
  );
};
