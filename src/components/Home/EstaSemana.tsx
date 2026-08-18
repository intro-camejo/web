import React, {useEffect, useState} from 'react';
import Link from '@docusaurus/Link';
import cronograma from '@site/src/data/cronograma.json';
import styles from './styles.module.css';

type Actividad = {name: string};
type Dia = {fecha: string; actividades: Actividad[]};
type Semana = {semana: number; martes: Dia; jueves: Dia};

const semanas = cronograma.semanas as Semana[];

/** Las fechas del cronograma vienen como "DD/MM/AAAA". */
function parsearFecha(fecha: string): Date {
  const [dia, mes, anio] = fecha.split('/').map(Number);
  return new Date(anio, mes - 1, dia);
}

/** El jueves recién queda atrás cuando termina el día, no cuando empieza. */
function finDelDia(fecha: string): Date {
  const dia = parsearFecha(fecha);
  dia.setHours(23, 59, 59, 999);
  return dia;
}

/** Primera semana que todavía no terminó, o null si el cuatrimestre ya cerró. */
function buscarSemana(hoy: Date): Semana | null {
  return semanas.find((s) => finDelDia(s.jueves.fecha) >= hoy) ?? null;
}

/** Un feriado o un paro no tiene modalidad de cursada para mostrar. */
function esDiaDeClase(dia: Dia): boolean {
  return !dia.actividades.some((a) => /feriado|paro/i.test(a.name));
}

function Dia({
  dia,
  nombre,
  modalidad,
}: {
  dia: Dia;
  nombre: string;
  modalidad: string;
}) {
  return (
    <div className={styles.semanaDia}>
      <p className={styles.semanaDiaFecha}>
        {nombre} {dia.fecha.slice(0, 5)}
        {esDiaDeClase(dia) && (
          <span className={styles.semanaChip}>{modalidad}</span>
        )}
      </p>
      <ul className={styles.semanaTemas}>
        {dia.actividades.map((actividad, i) => (
          <li key={i}>{actividad.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default function EstaSemana(): React.JSX.Element | null {
  // Se resuelve en el cliente: calculado al buildear, quedaría congelado en la
  // fecha del deploy.
  const [semana, setSemana] = useState<Semana | null>(null);
  const [empezo, setEmpezo] = useState(false);

  useEffect(() => {
    const hoy = new Date();
    const actual = buscarSemana(hoy);
    setSemana(actual);
    setEmpezo(actual ? hoy >= parsearFecha(actual.martes.fecha) : false);
  }, []);

  if (!semana) {
    return null;
  }

  return (
    <section className={styles.seccion}>
      <div className="container">
        <div className={styles.seccionHead}>
          <h2 className={styles.seccionTitulo}>
            {empezo ? 'Esta semana' : 'Arranca la semana'}
          </h2>
          <span className={styles.seccionNota}>Semana {semana.semana}</span>
        </div>

        <div className={styles.semanaPanel}>
          <Dia dia={semana.martes} nombre="Martes" modalidad="Virtual" />
          <Dia dia={semana.jueves} nombre="Jueves" modalidad="Presencial" />
        </div>

        <p className={styles.seccionPie}>
          <Link to="/cronograma">Cronograma completo →</Link>
        </p>
      </div>
    </section>
  );
}
