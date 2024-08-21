import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

const Modal = ({ show, message, onClose, icon, iconClickUrl }) => {
  const handleIconClick = () => {
    if (iconClickUrl) {
      window.open(iconClickUrl, '_blank');
    }
  };

  return (
    <Dialog
      open={show}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
          <div onClick={handleIconClick} style={{ cursor: iconClickUrl ? 'pointer' : 'default' }}>
            {icon}
          </div>
          <DialogContentText id="alert-dialog-description" style={{ textAlign: 'center', marginTop: 16 }}>
            {message}
          </DialogContentText>
        </Box>
      </DialogContent>
      <DialogActions style={{ justifyContent: 'center' }}>
        <Button onClick={onClose} color="primary" variant="contained">
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  icon: PropTypes.element,
  iconClickUrl: PropTypes.string,
};

export default Modal;