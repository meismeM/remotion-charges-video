import {AbsoluteFill, useCurrentFrame, interpolate} from 'remotion';

const titleStyle: React.CSSProperties = {
	fontFamily: 'Helvetica, Arial, sans-serif',
	fontSize: 80,
	fontWeight: 'bold',
	color: 'white',
	textAlign: 'center',
};

export const TitleScene: React.FC = () => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, 20], [0, 1]);
	const scale = interpolate(frame, [0, 20], [0.8, 1]);

	return (
		<AbsoluteFill
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				opacity,
				transform: `scale(${scale})`,
			}}
		>
			<h1 style={titleStyle}>What are Electric Charges?</h1>
		</AbsoluteFill>
	);
};
