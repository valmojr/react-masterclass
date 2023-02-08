import { motion } from 'framer-motion';
import { styled } from '../../../../../stitches.config';

export default styled(motion.div, {
    background: '#FFF',
    height: '100vh',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
});