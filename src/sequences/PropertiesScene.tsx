import {
	AbsoluteFill,
	useCurrentFrame,
	interpolate,
	Sequence,
	useVideoConfig,
} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Poppins';

const {fontFamily} = loadFont();

const propertyStyle: React.CSSProperties = {
	fontFamily,
	fontSize: 40,
	color: 'white',
	textAlign: 'left',
	lineHeight: '1.5',
};

const containerStyle: React.CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	width: '80%',
	margin: '0 auto',
};

type Props = {
	properties: string[];
};

const Property: React.FC<{text: string}> = ({text}) => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, 20], [0, 1], {
		extrapolateRight: 'clamp',
	});
	const y = interpolate(frame, [0, 20], [20, 0], {extrapolateRight: 'clamp'});

	return (
		<p
			style={{...propertyStyle, opacity, transform: `translateY(${y}px)`}}
		>{`• ${text}`}</p>
	);
};

export const PropertiesScene: React.FC<Props> = ({properties}) => {
	const {durationInFrames} = useVideoConfig();

	return (
		<AbsoluteFill style={{padding: '40px'}}>
			<div style={containerStyle}>
				{properties.map((prop, index) => {
					const delay = index * 40;
					return (
						<Sequence
							from={delay}
							durationInFrames={durationInFrames - delay}
							key={prop}
						>
							<Property text={prop} />
						</Sequence>
					);
				})}
			</div>
		</AbsoluteFill>
	);
};
