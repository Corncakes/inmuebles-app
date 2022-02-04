export class Role {
    id: number;
    nombre: string;
    uniqueId: string;

    constructor(
        id = 0,
        nombre = ''
    )
    {
        this.id = id;
        this.nombre = nombre;
        this.uniqueId = 'string';
    }
}