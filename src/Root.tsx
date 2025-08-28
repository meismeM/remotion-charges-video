import {Composition} from 'remotion';
import './index.css';
import {Main} from './Composition';

const DURATION_IN_SECONDS = 20;
const VIDEO_FPS = 30;
const VIDEO_WIDTH = 1080;
const VIDEO_HEIGHT = 1920;

export const RemotionRoot: React.FC = () => {
	return (
		<Composition
			id="ElectricCharges"
			component={Main}
			durationInFrames={DURATION_IN_SECONDS * VIDEO_FPS}
			fps={VIDEO_FPS}
			width={VIDEO_WIDTH}
			height={VIDEO_HEIGHT}
		/>
	);
};
