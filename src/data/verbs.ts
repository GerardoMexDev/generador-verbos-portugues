/**
 * The UI consumes explicit conjugation tables instead of trying to guess
 * Portuguese morphology. This keeps irregular forms visible and reviewable.
 * The 100-verb catalog lives in verbCatalog.ts (extracted from the user's PDF
 * and validated); this module holds the shared types, labels and exercises.
 */
import { VERB_CATALOG } from "./verbCatalog";
export type PersonKey = "eu" | "tu" | "voce" | "ele" | "nos" | "vos" | "voces" | "eles";
export type TenseKey = "present" | "preterite" | "imperfect" | "nearFuture";

export interface VerbEntry {
  /** Frequency position in the PDF (1 = most used). Absent for verbs added outside the PDF. */
  rank?: number;
  /** Dictionary form used for lookup and for the infinitive in ir + infinitive. */
  infinitive: string;
  translation: string;
  family: "regular" | "irregular";
  /** Each tense is stored as an explicit, reviewable table to preserve irregularity and accents. */
  forms: Record<TenseKey, Partial<Record<PersonKey, string>>>;
}

// Standard Brazilian learner forms are shown by default; tu and vós are rare in Brazil, so they are opt-in.
export const PERSONS: { key: PersonKey; label: string; optional?: boolean }[] = [
  { key: "eu", label: "eu" },
  { key: "tu", label: "tu", optional: true },
  { key: "voce", label: "você" },
  { key: "ele", label: "ele / ela" },
  { key: "nos", label: "nós" },
  { key: "vos", label: "vós", optional: true },
  { key: "voces", label: "vocês" },
  { key: "eles", label: "eles / elas" },
];

export const TENSES: { key: TenseKey; label: string; compact: string }[] = [
  { key: "present", label: "Presente", compact: "Presente" },
  { key: "preterite", label: "Pretérito perfeito", compact: "Perfeito" },
  { key: "imperfect", label: "Pretérito imperfeito", compact: "Imperfeito" },
  { key: "nearFuture", label: "Futuro · ir + infinitivo", compact: "Futuro próximo" },
];

// Full catalog in frequency order, plus verbs the exercises need that the PDF does not include.
export const VERBS: VerbEntry[] = [
  ...VERB_CATALOG,
  // viajar is not among the PDF's 100 verbs but the travel exercise uses it.
  { infinitive: "viajar", translation: "viajar", family: "regular", forms: {
    present: { eu: "viajo", tu: "viajas", voce: "viaja", ele: "viaja", nos: "viajamos", vos: "viajais", voces: "viajam", eles: "viajam" },
    preterite: { eu: "viajei", tu: "viajaste", voce: "viajou", ele: "viajou", nos: "viajamos", vos: "viajastes", voces: "viajaram", eles: "viajaram" },
    imperfect: { eu: "viajava", tu: "viajavas", voce: "viajava", ele: "viajava", nos: "viajávamos", vos: "viajáveis", voces: "viajavam", eles: "viajavam" },
    nearFuture: { eu: "vou viajar", tu: "vais viajar", voce: "vai viajar", ele: "vai viajar", nos: "vamos viajar", vos: "ides viajar", voces: "vão viajar", eles: "vão viajar" },
  } },
];

/** A compact, hand-written queue makes every sample prompt intentional. */
// Exercises encode their intended context, person, tense, answer, and teaching note together.
export const EXERCISES = [
  { scene: "Trabalho", place: "Antes da reunião", sentence: "Hoje, eu ___ com a equipe sobre o projeto.", verb: "falar", person: "eu" as PersonKey, tense: "present" as TenseKey, answer: "falo", explanation: "A situação acontece hoje, então usamos o presente: eu falo." },
  { scene: "Restaurante", place: "Na mesa", sentence: "Ontem, nós ___ uma reserva para o jantar.", verb: "fazer", person: "nos" as PersonKey, tense: "preterite" as TenseKey, answer: "fizemos", explanation: "A ação terminou ontem; por isso usamos o pretérito perfeito: nós fizemos." },
  { scene: "Viagem", place: "Planejando o passeio", sentence: "Amanhã, vocês ___ para o litoral.", verb: "viajar", person: "voces" as PersonKey, tense: "nearFuture" as TenseKey, answer: "vão viajar", explanation: "Para um plano próximo, conjugamos ir e mantemos o infinitivo: vocês vão viajar." },
  { scene: "Trabalho", place: "Uma rotina antiga", sentence: "Naquele emprego, ela ___ relatórios toda semana.", verb: "fazer", person: "ele" as PersonKey, tense: "imperfect" as TenseKey, answer: "fazia", explanation: "Era uma rotina repetida no passado, então usamos o pretérito imperfeito: ela fazia." },
] as const;
