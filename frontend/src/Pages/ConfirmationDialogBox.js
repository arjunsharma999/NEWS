import Swal from "sweetalert2";

export const showConfirmationAlert = async (icon, title, text) => {

    const result = await Swal.fire({
        icon: icon,
        title: title,
        text: text,
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
    });
    return result;


};