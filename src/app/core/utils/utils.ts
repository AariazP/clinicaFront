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

  public static showAlertSuccess(message:string): void {
    Swal.fire({
      icon: 'success',
      title: 'OK',
      text: '¡' + message + '!',
      background: '#FFFFFF',
      color: 'BLACK',
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

  public static showAlertTitleSuccess(title:string,message:string): Promise<boolean> {
    return Swal.fire({
      title: title,
      text: message,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, estoy seguro",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      return result.isConfirmed;
    });
  }

  static showAlertTitleError(title: string, body: string) {
    
    Swal.fire({
      title: title,
      text: body,
      icon: "error",
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Aceptar",
    });
  }

}
