import { motion } from 'framer-motion';
import { styled } from '../../../../../stitches.config';

export default styled(motion.div, {
    width: '100%',
    height: '20vh',
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    gap: '1.5vh',
    padding: '1vh',
    position: 'absolute',
    bottom: 0
});