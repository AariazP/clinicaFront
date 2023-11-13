const apiUrl = 'http://localhost:8080/api';
export const environmentDevelopment = {
    apiUrl : apiUrl.valueOf(),
    production: false,
    // ----------Rutas de los servicios ------------------//

    adminUrl: apiUrl + '/administrador',
    AutenticacionUrl: apiUrl + '/auth',
    imagenesUrl: apiUrl + '/imagenes',
    medicoUrl: apiUrl + '/medico',
    pacienteUrl: apiUrl + '/paciente',
    registroUrl: apiUrl + '/registro'
}
