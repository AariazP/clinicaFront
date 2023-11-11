import Swal from "sweetalert2";

export class Utils{



  public static showAlertError(message:string): void {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: '¡' + message + '!',
      background: '#252525',
      color: '#fff',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      },
      timer: 4000,
      timerProgressBar: true,
    });
  }


}
