import Swal from 'sweetalert2';
export const showAlert = (iconType, titleText, messageText) => {
    Swal.fire({
      icon: iconType,
      title: titleText,
      text: messageText,
    });
  };
