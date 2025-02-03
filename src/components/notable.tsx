import { PropsWithChildren } from "react";

interface INotableProps extends PropsWithChildren {
	r: number;
	size?: "small" | "large";
}

export const Notable: React.FC<INotableProps> = ({
	children,
	r,
	size = "small",
}) => {
	const fontSize = size === "large" ? "text-4xl" : "";

	return (
		<span
			style={{ transform: `rotate(${r}deg)` }}
			className={`font-display text-red-500 -z-10 relative inline-block ${fontSize}`}
		>
			{children}
		</span>
	);
};
