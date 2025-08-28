import {AbsoluteFill, useCurrentFrame, interpolate} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Poppins';

const {fontFamily} = loadFont();

const titleStyle: React.CSSProperties = {
	fontFamily,
	fontSize: 90,
	fontWeight: 'bold',
	color: 'white',
	textAlign: 'center',
	padding: '20px',
};

type Props = {
	title: string;
};

export const TitleScene: React.FC<Props> = ({title}) => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, 20], [0, 1], {
		extrapolateRight: 'clamp',
	});
	const scale = interpolate(frame, [0, 20], [0.8, 1], {
		extrapolateRight: 'clamp',
	});

	return (
		<AbsoluteFill
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<h1 style={{...titleStyle, opacity, transform: `scale(${scale})`}}>
				{title}
			</h1>
		</AbsoluteFill>
	);
};
