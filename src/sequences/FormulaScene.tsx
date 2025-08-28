import {AbsoluteFill, useCurrentFrame, interpolate} from 'remotion';
import 'katex/dist/katex.min.css';
import {InlineMath} from 'react-katex';
import {loadFont} from '@remotion/google-fonts/Poppins';

const {fontFamily} = loadFont();

const formulaStyle: React.CSSProperties = {
	fontFamily,
	fontSize: 100,
	color: 'white',
};

const containerStyle: React.CSSProperties = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
};

type Props = {
	formula: string;
};

export const FormulaScene: React.FC<Props> = ({formula}) => {
	const frame = useCurrentFrame();
	const scale = interpolate(frame, [0, 20], [0.8, 1], {
		extrapolateRight: 'clamp',
	});
	const opacity = interpolate(frame, [0, 20], [0, 1], {
		extrapolateRight: 'clamp',
	});

	return (
		<AbsoluteFill style={containerStyle}>
			<div style={{...formulaStyle, transform: `scale(${scale})`, opacity}}>
				<InlineMath math={formula} />
			</div>
		</AbsoluteFill>
	);
};
