import { motion } from 'framer-motion';
import { styled } from '../../../../stitches.config';

export default styled(motion.button, {
    borderStyle: 'solid',
    borderWidth: '5px',
    width: '85%',
    height: '9vh',
    borderRadius: '20px',
    fontSize: '4vh',
    fontWeight: 'bold',
	padding: 0,
	cursor: 'pointer',
	outline: 'inherit',
    pointerEvents: 'initial',
    '&:focus': {
        outline: 'none'
    },
    variants: {
        type: {
            primary: {
                background: '$primary',
                color: '#FFF',
                borderColor: '$primary',
                '&:hover': {
                    background: '#FFF',
                    color: '$primary',
                    borderColor: '#FFF',
                }
            },
            secondary: {
                background: 'none',
                color: '#FFF',
                borderColor: '#FFF',
                '&:hover': {
                    background: '#FFF',
                    color: '$primary',
                }
            }
        }
    }
});