export class User {
    id: number;
    attempt: number;
    correo: string;
    dependencia: string;
    enabled: boolean;
    estadoContrato: string
    fechaFinContrato: string;
    fechaInicioContrato: string;
    latitud: string;
    longitud: string;
    nombreDeUsuario: string;
    numeroDocumento: string;
    password: string;
    primerApellido: string;
    primerNombre: string;
    roles: string[];
    segundoApellido: string;
    segundoNombre: string;
    tipoContrato: string;
    tipoDocumento: string;
    uniqueId: string;

    constructor(
        id = 0,
        attempt = 0,
        correo = '',
        dependencia = '',
        enabled = true,
        estadoContrato = '',
        fechaFinContrato = '',
        fechaInicioContrato = '',
        latitud = '',
        longitud = '',
        nombreDeUsuario = '',
        numeroDocumento = '',
        password = '',
        primerApellido = '',
        primerNombre = '',
        roles = [],
        segundoApellido = '',
        segundoNombre = '',
        tipoContrato = '',
        tipoDocumento = '',
        uniqueId = '',
    )
    {
        this.id = id;
        this.attempt = attempt;
        this.correo = correo;
        this.dependencia = dependencia;
        this.enabled = enabled;
        this.estadoContrato = estadoContrato;
        this.fechaFinContrato = fechaFinContrato;
        this.fechaInicioContrato = fechaInicioContrato;
        this.latitud = latitud;
        this.longitud = longitud;
        this.nombreDeUsuario = nombreDeUsuario;
        this.numeroDocumento = numeroDocumento;
        this.password = password;
        this.primerApellido = primerApellido;
        this.primerNombre = primerNombre;
        this.roles = roles;
        this.segundoApellido = segundoApellido;
        this.segundoNombre = segundoNombre;
        this.tipoContrato = tipoContrato;
        this.tipoDocumento = tipoDocumento;
        this.uniqueId = uniqueId;
    }
}