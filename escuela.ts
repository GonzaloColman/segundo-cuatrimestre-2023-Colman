/** interface para el examen */
interface Examen {
    materia: string;
    nota: number;
}
/** interface para los alumnos */
interface Alumno {
    nombre: string;
    apellido: string;
    legajo: number;
    examenes: Examen[];
}

class Colegio {
    private alumnos: Alumno[];

    constructor() {
        this.alumnos = [];
    }
/** agrego alumnos */
    agregarAlumno(alumno: Alumno): void {
        this.alumnos.push(alumno);
    }
/** obtener el promedio de cada alumno */
    obtenerPromedioAlumno(legajo: number): number | undefined {
        const alumno = this.alumnos.find((alumno) => alumno.legajo === legajo);
        if (alumno) {
            let totalNotas = 0;
            for (const examen of alumno.examenes) {
                totalNotas += examen.nota;
            }
            return totalNotas / alumno.examenes.length;
        }
        return undefined;
    }
/** promedio general de todos los alumnos */
    obtenerPromedioGeneral(): number {
        let totalPromedios = 0;
        for (const alumno of this.alumnos) {
            const promedioAlumno = this.obtenerPromedioAlumno(alumno.legajo);
            if (promedioAlumno) {
                totalPromedios += promedioAlumno;
            }
        }
        return totalPromedios / this.alumnos.length;
    }
}