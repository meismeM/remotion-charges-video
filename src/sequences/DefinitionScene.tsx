import {AbsoluteFill, useCurrentFrame, interpolate} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Poppins';

const {fontFamily} = loadFont();

const definitionStyle: React.CSSProperties = {
	fontFamily,
	fontSize: 48,
	color: 'white',
	textAlign: 'center',
	lineHeight: '1.6',
};

const containerStyle: React.CSSProperties = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	padding: '60px',
	backgroundColor: 'rgba(0, 0, 0, 0.3)',
	borderRadius: '20px',
};

type Props = {
	definition: string;
};

export const DefinitionScene: React.FC<Props> = ({definition}) => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, 20], [0, 1], {
		extrapolateRight: 'clamp',
	});

	return (
		<AbsoluteFill
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				padding: '40px',
			}}
		>
			<div style={{...containerStyle, opacity}}>
				<p style={definitionStyle}>{definition}</p>
			</div>
		</AbsoluteFill>
	);
};
