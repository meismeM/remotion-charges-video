import {AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig} from 'remotion';
import { BlockMath } from 'react-katex';
import React from 'react';

const textStyle: React.CSSProperties = {
	fontFamily: 'Helvetica, Arial, sans-serif',
	fontSize: 50,
	color: 'white',
	textAlign: 'center',
};

export const FormulaScene: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const scale = spring({frame, fps, from: 0, to: 1, durationInFrames: 30});
	const textOpacity = interpolate(frame, [40, 60], [0, 1]);

	return (
		<AbsoluteFill
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				gap: '50px',
			}}
		>
			<div style={{transform: `scale(${scale})`, fontSize: '80px', color: 'white'}}>
				<BlockMath math={'Q = n \\cdot e'} />
			</div>
			<div style={{...textStyle, opacity: textOpacity}}>
				<p>Q = Total Charge</p>
				<p>n = Number of electrons</p>
				<p>e = Charge of one electron</p>
			</div>
		</AbsoluteFill>
	);
};
