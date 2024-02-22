import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import heartSvg from '../images/flower_heart.svg';
import '../index.css';

const heartBeats = {
  beat: {
    scale: [1, 0.9, 1],
    transition: {
      duration: 1, // increased from 0.5 for a slower beat
      ease: "easeInOut",
      times: [0, 0.5, 1],
      repeat: Infinity,
      repeatType: "loop",
    },
  },
};

const ekgVariants = {
  initial: { pathLength: 0 },
  animate: {
    pathLength: 1,
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 2,
      ease: "linear"
    }
  }
};

const LandingPage = () => {
	const navigate = useNavigate();

	return (
		<div className="landing-page">
			<motion.img
				src={heartSvg}
				alt="Heart"
				className="heart-svg"
				variants={heartBeats}
				animate="beat"
				whileHover={{ scale: 1.1 }}
				onClick={() => navigate('/main')}
			/>
			<motion.svg
				className="ekg-line"
				width="100%"
				height="100"
				viewBox="0 0 200 20"
				initial="initial"
				animate="animate"
			>
				<motion.path
					d="M0,10 L50,10 L55,2 L60,18 L65,10 L130,10 L135,2 L140,18 L145,10 L200,10"
					fill="none"
					strokeWidth="2"
					stroke="red"
					variants={ekgVariants}
				/>
			</motion.svg>
		</div>
	);
};

export default LandingPage;
