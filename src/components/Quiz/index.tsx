import React, { useState, useCallback } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export interface Pregunta {
  pregunta: string;
  opciones: string[];
  respuesta: number;
  explicacion?: string;
}

export interface QuizProps {
  preguntas: Pregunta[];
}

/**
 * Componente de Quiz reutilizable para Docusaurus.
 *
 * Uso:
 * ```tsx
 * import Quiz from '@site/src/components/Quiz';
 *
 * const preguntas = [
 *   {
 *     pregunta: "Cual es la capital de Francia?",
 *     opciones: ["Madrid", "Paris", "Roma", "Berlin"],
 *     respuesta: 1,
 *     explicacion: "Paris es la capital de Francia desde el siglo X.",
 *   },
 * ];
 *
 * <Quiz preguntas={preguntas} />
 * ```
 */
export function Quiz({ preguntas }: QuizProps): JSX.Element {
  // Map of question index -> selected option index (null means not answered yet)
  const [respuestas, setRespuestas] = useState<Record<number, number>>({});

  const handleSelect = useCallback(
    (questionIdx: number, optionIdx: number) => {
      setRespuestas((prev) => {
        // If already answered, do nothing
        if (prev[questionIdx] !== undefined) return prev;
        return { ...prev, [questionIdx]: optionIdx };
      });
    },
    [],
  );

  const handleReset = useCallback(() => {
    setRespuestas({});
  }, []);

  const totalRespondidas = Object.keys(respuestas).length;
  const totalCorrectas = preguntas.reduce((acc, q, idx) => {
    if (respuestas[idx] !== undefined && respuestas[idx] === q.respuesta) {
      return acc + 1;
    }
    return acc;
  }, 0);

  return (
    <div className={styles.quizContainer}>
      {preguntas.map((q, qIdx) => {
        const answered = respuestas[qIdx] !== undefined;
        const selected = respuestas[qIdx];
        const isCorrectAnswer = answered && selected === q.respuesta;

        return (
          <div key={qIdx} className={styles.questionCard}>
            <div className={styles.questionTitle}>
              {qIdx + 1}. {q.pregunta}
            </div>
            <div className={styles.optionsContainer}>
              {q.opciones.map((opcion, oIdx) => {
                let optionClass = styles.option;

                if (answered) {
                  if (oIdx === q.respuesta) {
                    // Always highlight the correct answer in green once answered
                    optionClass = clsx(styles.option, styles.optionCorrect);
                  } else if (oIdx === selected) {
                    // The user picked this one and it was wrong
                    optionClass = clsx(styles.option, styles.optionIncorrect);
                  } else {
                    // Other non-selected, non-correct options
                    optionClass = clsx(styles.option, styles.optionDisabled);
                  }
                }

                return (
                  <button
                    key={oIdx}
                    className={optionClass}
                    disabled={answered}
                    onClick={() => handleSelect(qIdx, oIdx)}
                    aria-label={`Opcion ${oIdx + 1}: ${opcion}`}
                  >
                    {answered && oIdx === q.respuesta && (
                      <span className={styles.iconSpan} aria-hidden="true">
                        &#x2714;
                      </span>
                    )}
                    {answered &&
                      oIdx === selected &&
                      oIdx !== q.respuesta && (
                        <span className={styles.iconSpan} aria-hidden="true">
                          &#x2718;
                        </span>
                      )}
                    {opcion}
                  </button>
                );
              })}
            </div>
            {answered && q.explicacion && (
              <div className={styles.explicacion}>{q.explicacion}</div>
            )}
          </div>
        );
      })}

      {totalRespondidas > 0 && (
        <>
          <div className={styles.score}>
            Resultado: {totalCorrectas}/{preguntas.length} correctas
          </div>
          <button className={styles.resetButton} onClick={handleReset}>
            Reiniciar Quiz
          </button>
        </>
      )}
    </div>
  );
}

export default Quiz;
