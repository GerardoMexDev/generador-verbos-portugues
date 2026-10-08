import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import { EXERCISES, PERSONS, TENSES, VERBS } from "./data/verbs";
import type { TenseKey, VerbEntry } from "./data/verbs";

type View = "conjugator" | "practice";

/** Normalize only superficial typing differences; accents remain significant. */
function normalizeAnswer(value: string): string {
  return value.trim().toLocaleLowerCase("pt-BR").replace(/\s+/g, " ");
}

export default function App() {
  const [view, setView] = useState<View>("conjugator");
  const [query, setQuery] = useState("falar");
  const [selectedVerb, setSelectedVerb] = useState<VerbEntry>(VERBS[0]);
  const [tense, setTense] = useState<TenseKey>("present");
  // tu and vós share one switch: both are rare in spoken Brazilian Portuguese and hidden by default.
  const [includeRare, setIncludeRare] = useState(false);
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [checked, setChecked] = useState(false);

  // Search both the Portuguese infinitive and Spanish gloss so either language leads to the same record.
  // Exact infinitive first, then prefix, then substring: "ver" must open ver, not haver.
  const matches = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase("pt-BR");
    if (!normalized) return VERBS.slice(0, 5);
    const score = (verb: VerbEntry) =>
      verb.infinitive === normalized ? 0 : verb.infinitive.startsWith(normalized) ? 1 : 2;
    return VERBS
      .filter((verb) => `${verb.infinitive} ${verb.translation}`.toLocaleLowerCase("pt-BR").includes(normalized))
      .sort((a, b) => score(a) - score(b)); // stable sort keeps frequency order within each group
  }, [query]);

  // Each prompt identifies a known verb and explicit answer table in the local catalog.
  const exercise = EXERCISES[exerciseIndex % EXERCISES.length];
  const exerciseVerb = VERBS.find((verb) => verb.infinitive === exercise.verb)!;
  const isCorrect = normalizeAnswer(answer) === normalizeAnswer(exercise.answer);

  /** Select an explicit table; never guess irregular forms from a suffix. */
  function chooseVerb(verb: VerbEntry) {
    setSelectedVerb(verb);
    setQuery(verb.infinitive);
  }

  /** Prevent browser navigation and reveal feedback for the current prompt. */
  function submitAnswer(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (answer.trim()) setChecked(true);
  }

  /** Move through the reviewed prompt queue and clear the previous response. */
  function nextExercise() {
    setExerciseIndex((current) => (current + 1) % EXERCISES.length);
    setAnswer("");
    setChecked(false);
  }

  // The two modes share the same shell and course context so switching between
  // reference and practice never loses the learner’s current verb selection.
  return (
    <div className="app-shell">
      <header className="topbar">
        <a className="brand" href="#inicio" onClick={() => setView("conjugator")} aria-label="Verbos em contexto, inicio">
          <span className="brand-mark" aria-hidden="true"><span>V</span><i /></span>
          <span className="brand-name">verbos <b>em contexto</b></span>
        </a>
        <nav className="main-nav" aria-label="Navegação principal">
          <button className={view === "conjugator" ? "nav-link active" : "nav-link"} onClick={() => setView("conjugator")}>Conjugador</button>
          <button className={view === "practice" ? "nav-link active" : "nav-link"} onClick={() => setView("practice")}>Práctica <span className="nav-dot" /></button>
        </nav>
        <div className="course-tag"><span className="course-pin" /> Portugués brasileño <span className="tag-divider">·</span> Nivel 3</div>
      </header>

      <main id="inicio" className="main-content">
        <section className="intro-row">
          <div>
            <p className="eyebrow"><span className="eyebrow-line" /> CUADERNO DE VERBOS · PT-BR</p>
            <h1>{view === "conjugator" ? <>Cada verbo,<br /><em>en su momento.</em></> : <>Aprender haciendo,<br /><em>como en la vida.</em></>}</h1>
          </div>
          <p className="intro-copy">Conjugaciones claras y práctica en situaciones que sí podrías vivir. Un verbo a la vez, con contexto.</p>
        </section>

        <div className="workspace-grid">
          <aside className="side-rail" aria-label="Herramientas">
            <div className="rail-label">TU CUADERNO</div>
            <button className={view === "conjugator" ? "rail-item selected" : "rail-item"} onClick={() => setView("conjugator")}>
              <span className="rail-icon conjugate-icon" aria-hidden="true">Aa</span><span>Conjugador</span>
            </button>
            <button className={view === "practice" ? "rail-item selected" : "rail-item"} onClick={() => setView("practice")}>
              <span className="rail-icon practice-icon" aria-hidden="true"><i /><i /><i /></span><span>Ejercicios</span>
            </button>
            <div className="rail-note">
              <span className="note-mark" aria-hidden="true" />
              <p>Português do Brasil</p>
              <small>Las formas siguen el uso brasileño habitual.</small>
            </div>
            <div className="rail-bottom"><span className="route-dash" /> SEGUIR PRACTICANDO</div>
          </aside>

          {/* Reference and practice are two modes of the same learner workspace. */}
          {view === "conjugator" ? (
            <section className="content-pane" aria-label="Conjugador de verbos">
              <div className="section-heading">
                <div><span className="section-index">01</span><h2>Busca un verbo</h2></div>
                <span className="data-note">{VERBS.length} VERBOS <i /></span>
              </div>
              <div className="lookup-row">
                <label className="search-box">
                  <span className="search-symbol" aria-hidden="true" />
                  <span className="sr-only">Busca en portugués o español</span>
                  <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Escribe en portugués o español…" list="verb-suggestions" />
                  <datalist id="verb-suggestions">{matches.map((verb) => <option key={verb.infinitive} value={verb.infinitive} />)}</datalist>
                </label>
                <button className="primary-button" onClick={() => matches[0] && chooseVerb(matches[0])}>Ver verbo</button>
              </div>
              <div className="verb-picks" aria-label="Verbos disponibles">
                {matches.length ? matches.slice(0, 6).map((verb) => (
                  <button key={verb.infinitive} aria-pressed={selectedVerb.infinitive === verb.infinitive} className={selectedVerb.infinitive === verb.infinitive ? "verb-chip picked" : "verb-chip"} onClick={() => chooseVerb(verb)}>
                    <span>{verb.infinitive}</span><small>{verb.translation}</small>
                  </button>
                )) : <span className="no-results">Ese verbo no está en la lista. Prueba con el infinitivo en portugués o con su traducción.</span>}
              </div>

              <div className="verb-title-row">
                <div><span className="verb-kicker">VERBO EN PORTUGUÉS</span><h3>{selectedVerb.infinitive}<span className="verb-period">.</span></h3></div>
                <span className="translation">{selectedVerb.translation}</span>
              </div>
              <div className="tense-tabs" role="tablist" aria-label="Tiempo verbal">
                {TENSES.map((item) => <button key={item.key} role="tab" aria-selected={tense === item.key} className={tense === item.key ? "tense-tab active" : "tense-tab"} onClick={() => setTense(item.key)}>{item.compact}</button>)}
              </div>
              {/* Keep the conjugation as a real HTML table for keyboard and screen-reader navigation. */}
              <div className="table-wrap">
                <table className="conjugation-table">
                  <thead><tr><th>PRONOMBRE</th><th>FORMA CONJUGADA</th></tr></thead>
                  <tbody>{PERSONS.filter((person) => includeRare || !person.optional).map((person) => {
                    const value = selectedVerb.forms[tense][person.key] ?? "—";
                    return <tr key={person.key}><td>{person.label}</td><td className="form-cell">{value}</td></tr>;
                  })}</tbody>
                </table>
              </div>
              <label className="tu-toggle"><input type="checkbox" role="switch" checked={includeRare} onChange={(event) => setIncludeRare(event.target.checked)} /><span className="toggle-track" /><span>Mostrar <i>tu</i> y <i>vós</i> (poco usados en Brasil)</span></label>
              <p className="source-footnote"><span /> Los 100 verbos más usados en Brasil, revisados uno por uno. Las formas están escritas a mano, no se generan automáticamente.</p>
            </section>
          ) : (
            <section className="content-pane practice-pane" aria-label="Ejercicios de práctica">
              <div className="section-heading">
                <div><span className="section-index">02</span><h2>Practica en contexto</h2></div>
                <span className="data-note">SITUACIÓN {String(exerciseIndex + 1).padStart(2, "0")} / {String(EXERCISES.length).padStart(2, "0")}</span>
              </div>
              <div className="scene-meta"><span className="scene-label">{exercise.scene}</span><span className="scene-separator">/</span><span>{exercise.place}</span></div>
              <div className="exercise-prompt">
                <div className="quote-mark">“</div>
                <p>{exercise.sentence.split("___")[0]}<span className="blank-slot">{checked ? (isCorrect ? exercise.answer : "________") : "________"}</span>{exercise.sentence.split("___")[1]}</p>
              </div>
              <div className="exercise-hint-row"><span>VERBO</span><b>{exerciseVerb.infinitive}</b><span className="hint-divider" /><span>TEMPO</span><b>{TENSES.find((item) => item.key === exercise.tense)?.label}</b></div>
              <form className="answer-form" onSubmit={submitAnswer}>
                <label htmlFor="exercise-answer">¿Qué forma completa la frase?</label>
                <div className="answer-row"><input id="exercise-answer" autoComplete="off" disabled={checked} value={answer} onChange={(event) => setAnswer(event.target.value)} placeholder="Escribe la conjugación…" /><button className="primary-button" type="submit" disabled={checked || !answer.trim()}>Comprobar</button></div>
              </form>
              {/* Feedback always includes the expected answer and a reason, not color alone. */}
              {checked && <div className={isCorrect ? "feedback correct" : "feedback incorrect"} role="status"><span className="feedback-symbol">{isCorrect ? "✓" : "!"}</span><div><b>{isCorrect ? "¡Eso es!" : `La respuesta es “${exercise.answer}”.`}</b><p>{exercise.explanation}</p></div></div>}
              <div className="practice-footer"><span><i className="route-dash" /> Situaciones cotidianas · Respuesta escrita</span><button className="text-button" onClick={nextExercise}>{checked ? "Siguiente situación" : "Saltar situación"}</button></div>
            </section>
          )}
        </div>
        <footer className="page-footer"><span>ESTUDIO DE PORTUGUÉS BRASILEÑO</span><span>Hecho para aprender una forma a la vez</span></footer>
      </main>
    </div>
  );
}
