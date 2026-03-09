import React, { useState, useRef, useCallback } from 'react';
import styles from './styles.module.css';

export interface CodePlaygroundProps {
  language: 'javascript' | 'html' | 'sql';
  initialCode?: string;
  title?: string;
  height?: string;
}

const LANGUAGE_LABELS: Record<CodePlaygroundProps['language'], string> = {
  javascript: 'JavaScript',
  html: 'HTML',
  sql: 'SQL',
};

const PLACEHOLDER_TEXT: Record<CodePlaygroundProps['language'], string> = {
  javascript: '// Escribi tu codigo JavaScript aca...\nconsole.log("Hola mundo!");',
  html: '<!-- Escribi tu HTML aca -->\n<h1>Hola mundo!</h1>',
  sql: '-- Escribi tu consulta SQL aca\nSELECT * FROM tabla;',
};

const BADGE_STYLES: Record<CodePlaygroundProps['language'], string> = {
  javascript: styles.languageBadgeJavascript,
  html: styles.languageBadgeHtml,
  sql: styles.languageBadgeSql,
};

/**
 * CodePlayground - Interactive code editor component for Docusaurus.
 *
 * Supports JavaScript execution, HTML preview, and SQL display with
 * an external link to DB Fiddle.
 */
export default function CodePlayground({
  language,
  initialCode = '',
  title,
  height = '200px',
}: CodePlaygroundProps): JSX.Element {
  const effectiveInitial = initialCode || PLACEHOLDER_TEXT[language];
  const [code, setCode] = useState<string>(effectiveInitial);
  const [output, setOutput] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [htmlPreview, setHtmlPreview] = useState<string>('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // --- Tab key handling ---
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === 'Tab') {
        e.preventDefault();
        const target = e.currentTarget;
        const start = target.selectionStart;
        const end = target.selectionEnd;
        const newValue = code.substring(0, start) + '  ' + code.substring(end);
        setCode(newValue);
        // Restore cursor position after React re-renders
        requestAnimationFrame(() => {
          target.selectionStart = start + 2;
          target.selectionEnd = start + 2;
        });
      }
    },
    [code],
  );

  // --- Copy to clipboard ---
  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for environments without clipboard API
      const textarea = document.createElement('textarea');
      textarea.value = code;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [code]);

  // --- Reset to initial code ---
  const handleReset = useCallback(() => {
    setCode(effectiveInitial);
    setOutput('');
    setIsError(false);
    setHtmlPreview('');
  }, [effectiveInitial]);

  // --- JavaScript execution ---
  const handleRunJavaScript = useCallback(() => {
    const logs: string[] = [];
    const originalConsoleLog = console.log;
    const originalConsoleError = console.error;
    const originalConsoleWarn = console.warn;

    // Override console methods to capture output
    console.log = (...args: unknown[]) => {
      logs.push(
        args
          .map((a) =>
            typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a),
          )
          .join(' '),
      );
    };
    console.error = (...args: unknown[]) => {
      logs.push(
        '[Error] ' +
          args
            .map((a) =>
              typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a),
            )
            .join(' '),
      );
    };
    console.warn = (...args: unknown[]) => {
      logs.push(
        '[Warn] ' +
          args
            .map((a) =>
              typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a),
            )
            .join(' '),
      );
    };

    try {
      // eslint-disable-next-line no-new-func
      const result = new Function(code)();
      const parts: string[] = [];

      if (logs.length > 0) {
        parts.push(logs.join('\n'));
      }

      if (result !== undefined) {
        const resultStr =
          typeof result === 'object'
            ? JSON.stringify(result, null, 2)
            : String(result);
        parts.push(`\n=> ${resultStr}`);
      }

      setOutput(parts.length > 0 ? parts.join('\n') : '(sin salida)');
      setIsError(false);
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : String(err);
      const combined = logs.length > 0 ? logs.join('\n') + '\n\n' : '';
      setOutput(combined + `Error: ${errorMessage}`);
      setIsError(true);
    } finally {
      // Restore original console methods
      console.log = originalConsoleLog;
      console.error = originalConsoleError;
      console.warn = originalConsoleWarn;
    }
  }, [code]);

  // --- HTML preview ---
  const handlePreviewHtml = useCallback(() => {
    setHtmlPreview(code);
  }, [code]);

  // --- Render language-specific action button ---
  const renderActionButton = () => {
    switch (language) {
      case 'javascript':
        return (
          <button
            className={styles.runButton}
            onClick={handleRunJavaScript}
            type="button"
            title="Ejecutar codigo JavaScript"
          >
            &#9654; Ejecutar
          </button>
        );
      case 'html':
        return (
          <button
            className={styles.runButton}
            onClick={handlePreviewHtml}
            type="button"
            title="Mostrar vista previa del HTML"
          >
            &#9654; Vista previa
          </button>
        );
      case 'sql':
        return null; // No run button for SQL
      default:
        return null;
    }
  };

  // --- Render language-specific output ---
  const renderOutput = () => {
    switch (language) {
      case 'javascript':
        return (
          <div className={styles.outputArea}>
            <span className={styles.outputLabel}>Salida</span>
            {output ? (
              <pre className={isError ? styles.outputError : styles.outputSuccess}>
                {output}
              </pre>
            ) : (
              <span className={styles.outputPlaceholder}>
                Hace clic en &quot;Ejecutar&quot; para ver el resultado...
              </span>
            )}
          </div>
        );

      case 'html':
        return htmlPreview ? (
          <iframe
            className={styles.previewFrame}
            srcDoc={htmlPreview}
            title="Vista previa HTML"
            sandbox="allow-scripts"
            style={{ minHeight: '200px' }}
          />
        ) : (
          <div className={styles.outputArea}>
            <span className={styles.outputPlaceholder}>
              Hace clic en &quot;Vista previa&quot; para ver el resultado...
            </span>
          </div>
        );

      case 'sql':
        return (
          <div className={styles.sqlNote}>
            <span>
              Para ejecutar consultas SQL, copia el codigo y probalo en{' '}
              <a
                href="https://www.db-fiddle.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                DB Fiddle
              </a>
            </span>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={styles.playgroundContainer}>
      {/* Header */}
      <div className={styles.header}>
        <span className={styles.headerTitle}>
          {title || `Editor ${LANGUAGE_LABELS[language]}`}
        </span>
        <span className={`${styles.languageBadge} ${BADGE_STYLES[language]}`}>
          {LANGUAGE_LABELS[language]}
        </span>
      </div>

      {/* Code editor */}
      <div className={styles.editorArea}>
        <textarea
          ref={textareaRef}
          className={styles.codeEditor}
          value={code}
          onChange={(e) => setCode(e.target.value)}
          onKeyDown={handleKeyDown}
          style={{ height }}
          spellCheck={false}
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
          data-gramm="false"
          placeholder={PLACEHOLDER_TEXT[language]}
        />
      </div>

      {/* Button bar */}
      <div className={styles.buttonBar}>
        {renderActionButton()}
        <button
          className={`${styles.copyButton} ${copied ? styles.copySuccess : ''}`}
          onClick={handleCopy}
          type="button"
          title="Copiar codigo al portapapeles"
        >
          {copied ? '\u2713 Copiado' : 'Copiar'}
        </button>
        <button
          className={styles.resetButton}
          onClick={handleReset}
          type="button"
          title="Restaurar al codigo original"
        >
          Restaurar
        </button>
      </div>

      {/* Output / preview / SQL note */}
      {renderOutput()}
    </div>
  );
}
