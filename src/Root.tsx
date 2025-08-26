import {Composition} from 'remotion';
import {ElectricChargesVideo} from './Video'; // <-- CHANGE THIS IMPORT
import './index.css'; // <-- CORRECT FILENAME

// TikTok/Shorts dimensions & timing
const DURATION_IN_SECONDS = 15;
const VIDEO_FPS = 30;
const VIDEO_WIDTH = 1080;
const VIDEO_HEIGHT = 1920;

export const RemotionRoot: React.FC = () => {
	return (
		<Composition
			id="ElectricCharges" // <-- Give it a descriptive ID
			component={ElectricChargesVideo} // <-- Use our renamed component
			durationInFrames={DURATION_IN_SECONDS * VIDEO_FPS}
			fps={VIDEO_FPS}
			width={VIDEO_WIDTH}
			height={VIDEO_HEIGHT}
		/>
	);
};
