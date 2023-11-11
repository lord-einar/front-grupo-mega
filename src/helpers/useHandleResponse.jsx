import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export const useHandleResponse = () => {
  const navigateTo = useNavigate();

  const respuestaPost = (respuesta) => {
    if (respuesta.result === 'ok') {
      Swal.fire(
        'Exito!',
        'Se ha realizado la operación correctamente',
        'success'
      ).then((result) => {
        if (result.isConfirmed) {
          navigateTo('/lista-contactos');
        }
      });
    } else {
      Swal.fire('Error!', 'Ha ocurrido un error', 'error');
    }
  };

  return respuestaPost;
};