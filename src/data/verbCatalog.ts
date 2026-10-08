/**
 * Catálogo de los 100 verbos más usados en Brasil, en orden de frecuencia.
 * Fuente: 100_verbos_portugues_conjugados.pdf, extraído por coordenadas de
 * cada celda y validado contra los patrones regulares -ar/-er/-ir.
 *
 * Correcciones aplicadas al PDF (errores del material original):
 *   - ver: 'vêem' -> 'veem'
 *   - falar: nós perfeito 'fal)' -> 'falamos'
 *   - ficar: nós perfeito 'fir)' -> 'ficamos'
 *   - achar: nós perfeito 'ach)' -> 'achamos'
 *   - chegar: nós perfeito 'cheg' -> 'chegamos'
 *   - ler: 'lêem' -> 'leem'
 *   - morar: nós perfeito 'mor)' -> 'moramos'
 *   - colocar: nós perfeito 'colo' -> 'colocamos'
 *   - andar: nós perfeito 'and)' -> 'andamos'
 *   - começar: nós perfeito 'come' -> 'começamos'
 *   - levar: nós perfeito 'lev)' -> 'levamos'
 *   - tirar: nós perfeito 'tir)' -> 'tiramos'
 *   - tomar: nós perfeito 'tom)' -> 'tomamos'
 *   - criar: nós perfeito 'cri)' -> 'criamos'
 *   - ganhar: nós perfeito 'ganh' -> 'ganhamos'
 *   - pagar: nós perfeito 'pag)' -> 'pagamos'
 *
 * "voce" y "voces" toman la forma de "ele" y "eles". "tu" y "vós" se cargan
 * completos pero la interfaz los oculta por defecto (poco usados en Brasil).
 * "family" marca como irregular todo
 * verbo que se aparta del patrón más allá de cambios solo ortográficos
 * (ç/c, gu/g, qu/c, j/g), como chegar → cheguei.
 * Archivo generado: si hay que corregir una forma, editarla aquí y anotarla arriba.
 */
import type { VerbEntry } from "./verbs";

export const VERB_CATALOG: VerbEntry[] = [
  { rank: 1, infinitive: "ser", translation: "ser", family: "irregular", forms: {
    present: { eu: "sou", tu: "és", voce: "é", ele: "é", nos: "somos", vos: "sois", voces: "são", eles: "são" },
    preterite: { eu: "fui", tu: "foste", voce: "foi", ele: "foi", nos: "fomos", vos: "fostes", voces: "foram", eles: "foram" },
    imperfect: { eu: "era", tu: "eras", voce: "era", ele: "era", nos: "éramos", vos: "éreis", voces: "eram", eles: "eram" },
    nearFuture: { eu: "vou ser", tu: "vais ser", voce: "vai ser", ele: "vai ser", nos: "vamos ser", vos: "ides ser", voces: "vão ser", eles: "vão ser" },
  } },
  { rank: 2, infinitive: "dizer", translation: "decir", family: "irregular", forms: {
    present: { eu: "digo", tu: "dizes", voce: "diz", ele: "diz", nos: "dizemos", vos: "dizeis", voces: "dizem", eles: "dizem" },
    preterite: { eu: "disse", tu: "disseste", voce: "disse", ele: "disse", nos: "dissemos", vos: "dissestes", voces: "disseram", eles: "disseram" },
    imperfect: { eu: "dizia", tu: "dizias", voce: "dizia", ele: "dizia", nos: "dizíamos", vos: "dizíeis", voces: "diziam", eles: "diziam" },
    nearFuture: { eu: "vou dizer", tu: "vais dizer", voce: "vai dizer", ele: "vai dizer", nos: "vamos dizer", vos: "ides dizer", voces: "vão dizer", eles: "vão dizer" },
  } },
  { rank: 3, infinitive: "ter", translation: "tener", family: "irregular", forms: {
    present: { eu: "tenho", tu: "tens", voce: "tem", ele: "tem", nos: "temos", vos: "tendes", voces: "têm", eles: "têm" },
    preterite: { eu: "tive", tu: "tiveste", voce: "teve", ele: "teve", nos: "tivemos", vos: "tivestes", voces: "tiveram", eles: "tiveram" },
    imperfect: { eu: "tinha", tu: "tinhas", voce: "tinha", ele: "tinha", nos: "tínhamos", vos: "tínheis", voces: "tinham", eles: "tinham" },
    nearFuture: { eu: "vou ter", tu: "vais ter", voce: "vai ter", ele: "vai ter", nos: "vamos ter", vos: "ides ter", voces: "vão ter", eles: "vão ter" },
  } },
  { rank: 4, infinitive: "ir", translation: "ir", family: "irregular", forms: {
    present: { eu: "vou", tu: "vais", voce: "vai", ele: "vai", nos: "vamos", vos: "ides", voces: "vão", eles: "vão" },
    preterite: { eu: "fui", tu: "foste", voce: "foi", ele: "foi", nos: "fomos", vos: "fostes", voces: "foram", eles: "foram" },
    imperfect: { eu: "ia", tu: "ias", voce: "ia", ele: "ia", nos: "íamos", vos: "íeis", voces: "iam", eles: "iam" },
    nearFuture: { eu: "vou ir", tu: "vais ir", voce: "vai ir", ele: "vai ir", nos: "vamos ir", vos: "ides ir", voces: "vão ir", eles: "vão ir" },
  } },
  { rank: 5, infinitive: "estar", translation: "estar", family: "irregular", forms: {
    present: { eu: "estou", tu: "estás", voce: "está", ele: "está", nos: "estamos", vos: "estais", voces: "estão", eles: "estão" },
    preterite: { eu: "estive", tu: "estiveste", voce: "esteve", ele: "esteve", nos: "estivemos", vos: "estivestes", voces: "estiveram", eles: "estiveram" },
    imperfect: { eu: "estava", tu: "estavas", voce: "estava", ele: "estava", nos: "estávamos", vos: "estáveis", voces: "estavam", eles: "estavam" },
    nearFuture: { eu: "vou estar", tu: "vais estar", voce: "vai estar", ele: "vai estar", nos: "vamos estar", vos: "ides estar", voces: "vão estar", eles: "vão estar" },
  } },
  { rank: 6, infinitive: "fazer", translation: "hacer", family: "irregular", forms: {
    present: { eu: "faço", tu: "fazes", voce: "faz", ele: "faz", nos: "fazemos", vos: "fazeis", voces: "fazem", eles: "fazem" },
    preterite: { eu: "fiz", tu: "fizeste", voce: "fez", ele: "fez", nos: "fizemos", vos: "fizestes", voces: "fizeram", eles: "fizeram" },
    imperfect: { eu: "fazia", tu: "fazias", voce: "fazia", ele: "fazia", nos: "fazíamos", vos: "fazíeis", voces: "faziam", eles: "faziam" },
    nearFuture: { eu: "vou fazer", tu: "vais fazer", voce: "vai fazer", ele: "vai fazer", nos: "vamos fazer", vos: "ides fazer", voces: "vão fazer", eles: "vão fazer" },
  } },
  { rank: 7, infinitive: "haver", translation: "haber (impersonal)", family: "irregular", forms: {
    present: { eu: "hei", tu: "hás", voce: "há", ele: "há", nos: "hemos", vos: "heis", voces: "hão", eles: "hão" },
    preterite: { eu: "houve", tu: "houveste", voce: "houve", ele: "houve", nos: "houvemos", vos: "houvestes", voces: "houveram", eles: "houveram" },
    imperfect: { eu: "havia", tu: "havias", voce: "havia", ele: "havia", nos: "havíamos", vos: "havíeis", voces: "haviam", eles: "haviam" },
    nearFuture: { eu: "vou haver", tu: "vais haver", voce: "vai haver", ele: "vai haver", nos: "vamos haver", vos: "ides haver", voces: "vão haver", eles: "vão haver" },
  } },
  { rank: 8, infinitive: "poder", translation: "poder", family: "irregular", forms: {
    present: { eu: "posso", tu: "podes", voce: "pode", ele: "pode", nos: "podemos", vos: "podeis", voces: "podem", eles: "podem" },
    preterite: { eu: "pude", tu: "pudeste", voce: "pôde", ele: "pôde", nos: "pudemos", vos: "pudestes", voces: "puderam", eles: "puderam" },
    imperfect: { eu: "podia", tu: "podias", voce: "podia", ele: "podia", nos: "podíamos", vos: "podíeis", voces: "podiam", eles: "podiam" },
    nearFuture: { eu: "vou poder", tu: "vais poder", voce: "vai poder", ele: "vai poder", nos: "vamos poder", vos: "ides poder", voces: "vão poder", eles: "vão poder" },
  } },
  { rank: 9, infinitive: "ver", translation: "ver", family: "irregular", forms: {
    present: { eu: "vejo", tu: "vês", voce: "vê", ele: "vê", nos: "vemos", vos: "vedes", voces: "veem", eles: "veem" },
    preterite: { eu: "vi", tu: "viste", voce: "viu", ele: "viu", nos: "vimos", vos: "vistes", voces: "viram", eles: "viram" },
    imperfect: { eu: "via", tu: "vias", voce: "via", ele: "via", nos: "víamos", vos: "víeis", voces: "viam", eles: "viam" },
    nearFuture: { eu: "vou ver", tu: "vais ver", voce: "vai ver", ele: "vai ver", nos: "vamos ver", vos: "ides ver", voces: "vão ver", eles: "vão ver" },
  } },
  { rank: 10, infinitive: "dar", translation: "dar", family: "irregular", forms: {
    present: { eu: "dou", tu: "dás", voce: "dá", ele: "dá", nos: "damos", vos: "dais", voces: "dão", eles: "dão" },
    preterite: { eu: "dei", tu: "deste", voce: "deu", ele: "deu", nos: "demos", vos: "destes", voces: "deram", eles: "deram" },
    imperfect: { eu: "dava", tu: "davas", voce: "dava", ele: "dava", nos: "dávamos", vos: "dáveis", voces: "davam", eles: "davam" },
    nearFuture: { eu: "vou dar", tu: "vais dar", voce: "vai dar", ele: "vai dar", nos: "vamos dar", vos: "ides dar", voces: "vão dar", eles: "vão dar" },
  } },
  { rank: 11, infinitive: "saber", translation: "saber", family: "irregular", forms: {
    present: { eu: "sei", tu: "sabes", voce: "sabe", ele: "sabe", nos: "sabemos", vos: "sabeis", voces: "sabem", eles: "sabem" },
    preterite: { eu: "soube", tu: "soubeste", voce: "soube", ele: "soube", nos: "soubemos", vos: "soubestes", voces: "souberam", eles: "souberam" },
    imperfect: { eu: "sabia", tu: "sabias", voce: "sabia", ele: "sabia", nos: "sabíamos", vos: "sabíeis", voces: "sabiam", eles: "sabiam" },
    nearFuture: { eu: "vou saber", tu: "vais saber", voce: "vai saber", ele: "vai saber", nos: "vamos saber", vos: "ides saber", voces: "vão saber", eles: "vão saber" },
  } },
  { rank: 12, infinitive: "vir", translation: "venir", family: "irregular", forms: {
    present: { eu: "venho", tu: "vens", voce: "vem", ele: "vem", nos: "vimos", vos: "vindes", voces: "vêm", eles: "vêm" },
    preterite: { eu: "vim", tu: "vieste", voce: "veio", ele: "veio", nos: "viemos", vos: "viestes", voces: "vieram", eles: "vieram" },
    imperfect: { eu: "vinha", tu: "vinhas", voce: "vinha", ele: "vinha", nos: "vínhamos", vos: "vínheis", voces: "vinham", eles: "vinham" },
    nearFuture: { eu: "vou vir", tu: "vais vir", voce: "vai vir", ele: "vai vir", nos: "vamos vir", vos: "ides vir", voces: "vão vir", eles: "vão vir" },
  } },
  { rank: 13, infinitive: "querer", translation: "querer", family: "irregular", forms: {
    present: { eu: "quero", tu: "queres", voce: "quer", ele: "quer", nos: "queremos", vos: "quereis", voces: "querem", eles: "querem" },
    preterite: { eu: "quis", tu: "quiseste", voce: "quis", ele: "quis", nos: "quisemos", vos: "quisestes", voces: "quiseram", eles: "quiseram" },
    imperfect: { eu: "queria", tu: "querias", voce: "queria", ele: "queria", nos: "queríamos", vos: "queríeis", voces: "queriam", eles: "queriam" },
    nearFuture: { eu: "vou querer", tu: "vais querer", voce: "vai querer", ele: "vai querer", nos: "vamos querer", vos: "ides querer", voces: "vão querer", eles: "vão querer" },
  } },
  { rank: 14, infinitive: "parecer", translation: "parecer", family: "regular", forms: {
    present: { eu: "pareço", tu: "pareces", voce: "parece", ele: "parece", nos: "parecemos", vos: "pareceis", voces: "parecem", eles: "parecem" },
    preterite: { eu: "pareci", tu: "pareceste", voce: "pareceu", ele: "pareceu", nos: "parecemos", vos: "parecestes", voces: "pareceram", eles: "pareceram" },
    imperfect: { eu: "parecia", tu: "parecias", voce: "parecia", ele: "parecia", nos: "parecíamos", vos: "parecíeis", voces: "pareciam", eles: "pareciam" },
    nearFuture: { eu: "vou parecer", tu: "vais parecer", voce: "vai parecer", ele: "vai parecer", nos: "vamos parecer", vos: "ides parecer", voces: "vão parecer", eles: "vão parecer" },
  } },
  { rank: 15, infinitive: "falar", translation: "hablar", family: "regular", forms: {
    present: { eu: "falo", tu: "falas", voce: "fala", ele: "fala", nos: "falamos", vos: "falais", voces: "falam", eles: "falam" },
    preterite: { eu: "falei", tu: "falaste", voce: "falou", ele: "falou", nos: "falamos", vos: "falastes", voces: "falaram", eles: "falaram" },
    imperfect: { eu: "falava", tu: "falavas", voce: "falava", ele: "falava", nos: "falávamos", vos: "faláveis", voces: "falavam", eles: "falavam" },
    nearFuture: { eu: "vou falar", tu: "vais falar", voce: "vai falar", ele: "vai falar", nos: "vamos falar", vos: "ides falar", voces: "vão falar", eles: "vão falar" },
  } },
  { rank: 16, infinitive: "ficar", translation: "quedar(se)", family: "regular", forms: {
    present: { eu: "fico", tu: "ficas", voce: "fica", ele: "fica", nos: "ficamos", vos: "ficais", voces: "ficam", eles: "ficam" },
    preterite: { eu: "fiquei", tu: "ficaste", voce: "ficou", ele: "ficou", nos: "ficamos", vos: "ficastes", voces: "ficaram", eles: "ficaram" },
    imperfect: { eu: "ficava", tu: "ficavas", voce: "ficava", ele: "ficava", nos: "ficávamos", vos: "ficáveis", voces: "ficavam", eles: "ficavam" },
    nearFuture: { eu: "vou ficar", tu: "vais ficar", voce: "vai ficar", ele: "vai ficar", nos: "vamos ficar", vos: "ides ficar", voces: "vão ficar", eles: "vão ficar" },
  } },
  { rank: 17, infinitive: "ouvir", translation: "oír / escuchar", family: "irregular", forms: {
    present: { eu: "ouço", tu: "ouves", voce: "ouve", ele: "ouve", nos: "ouvimos", vos: "ouvis", voces: "ouvem", eles: "ouvem" },
    preterite: { eu: "ouvi", tu: "ouviste", voce: "ouviu", ele: "ouviu", nos: "ouvimos", vos: "ouvistes", voces: "ouviram", eles: "ouviram" },
    imperfect: { eu: "ouvia", tu: "ouvias", voce: "ouvia", ele: "ouvia", nos: "ouvíamos", vos: "ouvíeis", voces: "ouviam", eles: "ouviam" },
    nearFuture: { eu: "vou ouvir", tu: "vais ouvir", voce: "vai ouvir", ele: "vai ouvir", nos: "vamos ouvir", vos: "ides ouvir", voces: "vão ouvir", eles: "vão ouvir" },
  } },
  { rank: 18, infinitive: "achar", translation: "encontrar / creer", family: "regular", forms: {
    present: { eu: "acho", tu: "achas", voce: "acha", ele: "acha", nos: "achamos", vos: "achais", voces: "acham", eles: "acham" },
    preterite: { eu: "achei", tu: "achaste", voce: "achou", ele: "achou", nos: "achamos", vos: "achastes", voces: "acharam", eles: "acharam" },
    imperfect: { eu: "achava", tu: "achavas", voce: "achava", ele: "achava", nos: "achávamos", vos: "acháveis", voces: "achavam", eles: "achavam" },
    nearFuture: { eu: "vou achar", tu: "vais achar", voce: "vai achar", ele: "vai achar", nos: "vamos achar", vos: "ides achar", voces: "vão achar", eles: "vão achar" },
  } },
  { rank: 19, infinitive: "deixar", translation: "dejar", family: "regular", forms: {
    present: { eu: "deixo", tu: "deixas", voce: "deixa", ele: "deixa", nos: "deixamos", vos: "deixais", voces: "deixam", eles: "deixam" },
    preterite: { eu: "deixei", tu: "deixaste", voce: "deixou", ele: "deixou", nos: "deixamos", vos: "deixastes", voces: "deixaram", eles: "deixaram" },
    imperfect: { eu: "deixava", tu: "deixavas", voce: "deixava", ele: "deixava", nos: "deixávamos", vos: "deixáveis", voces: "deixavam", eles: "deixavam" },
    nearFuture: { eu: "vou deixar", tu: "vais deixar", voce: "vai deixar", ele: "vai deixar", nos: "vamos deixar", vos: "ides deixar", voces: "vão deixar", eles: "vão deixar" },
  } },
  { rank: 20, infinitive: "sair", translation: "salir", family: "irregular", forms: {
    present: { eu: "saio", tu: "sais", voce: "sai", ele: "sai", nos: "saímos", vos: "saís", voces: "saem", eles: "saem" },
    preterite: { eu: "saí", tu: "saíste", voce: "saiu", ele: "saiu", nos: "saímos", vos: "saístes", voces: "saíram", eles: "saíram" },
    imperfect: { eu: "saía", tu: "saías", voce: "saía", ele: "saía", nos: "saíamos", vos: "saíeis", voces: "saíam", eles: "saíam" },
    nearFuture: { eu: "vou sair", tu: "vais sair", voce: "vai sair", ele: "vai sair", nos: "vamos sair", vos: "ides sair", voces: "vão sair", eles: "vão sair" },
  } },
  { rank: 21, infinitive: "chegar", translation: "llegar", family: "regular", forms: {
    present: { eu: "chego", tu: "chegas", voce: "chega", ele: "chega", nos: "chegamos", vos: "chegais", voces: "chegam", eles: "chegam" },
    preterite: { eu: "cheguei", tu: "chegaste", voce: "chegou", ele: "chegou", nos: "chegamos", vos: "chegastes", voces: "chegaram", eles: "chegaram" },
    imperfect: { eu: "chegava", tu: "chegavas", voce: "chegava", ele: "chegava", nos: "chegávamos", vos: "chegáveis", voces: "chegavam", eles: "chegavam" },
    nearFuture: { eu: "vou chegar", tu: "vais chegar", voce: "vai chegar", ele: "vai chegar", nos: "vamos chegar", vos: "ides chegar", voces: "vão chegar", eles: "vão chegar" },
  } },
  { rank: 22, infinitive: "passar", translation: "pasar", family: "regular", forms: {
    present: { eu: "passo", tu: "passas", voce: "passa", ele: "passa", nos: "passamos", vos: "passais", voces: "passam", eles: "passam" },
    preterite: { eu: "passei", tu: "passaste", voce: "passou", ele: "passou", nos: "passamos", vos: "passastes", voces: "passaram", eles: "passaram" },
    imperfect: { eu: "passava", tu: "passavas", voce: "passava", ele: "passava", nos: "passávamos", vos: "passáveis", voces: "passavam", eles: "passavam" },
    nearFuture: { eu: "vou passar", tu: "vais passar", voce: "vai passar", ele: "vai passar", nos: "vamos passar", vos: "ides passar", voces: "vão passar", eles: "vão passar" },
  } },
  { rank: 23, infinitive: "pedir", translation: "pedir", family: "irregular", forms: {
    present: { eu: "peço", tu: "pedes", voce: "pede", ele: "pede", nos: "pedimos", vos: "pedis", voces: "pedem", eles: "pedem" },
    preterite: { eu: "pedi", tu: "pediste", voce: "pediu", ele: "pediu", nos: "pedimos", vos: "pedistes", voces: "pediram", eles: "pediram" },
    imperfect: { eu: "pedia", tu: "pedias", voce: "pedia", ele: "pedia", nos: "pedíamos", vos: "pedíeis", voces: "pediam", eles: "pediam" },
    nearFuture: { eu: "vou pedir", tu: "vais pedir", voce: "vai pedir", ele: "vai pedir", nos: "vamos pedir", vos: "ides pedir", voces: "vão pedir", eles: "vão pedir" },
  } },
  { rank: 24, infinitive: "ler", translation: "leer", family: "irregular", forms: {
    present: { eu: "leio", tu: "lês", voce: "lê", ele: "lê", nos: "lemos", vos: "ledes", voces: "leem", eles: "leem" },
    preterite: { eu: "li", tu: "leste", voce: "leu", ele: "leu", nos: "lemos", vos: "lestes", voces: "leram", eles: "leram" },
    imperfect: { eu: "lia", tu: "lias", voce: "lia", ele: "lia", nos: "líamos", vos: "líeis", voces: "liam", eles: "liam" },
    nearFuture: { eu: "vou ler", tu: "vais ler", voce: "vai ler", ele: "vai ler", nos: "vamos ler", vos: "ides ler", voces: "vão ler", eles: "vão ler" },
  } },
  { rank: 25, infinitive: "acabar", translation: "acabar / terminar", family: "regular", forms: {
    present: { eu: "acabo", tu: "acabas", voce: "acaba", ele: "acaba", nos: "acabamos", vos: "acabais", voces: "acabam", eles: "acabam" },
    preterite: { eu: "acabei", tu: "acabaste", voce: "acabou", ele: "acabou", nos: "acabamos", vos: "acabastes", voces: "acabaram", eles: "acabaram" },
    imperfect: { eu: "acabava", tu: "acabavas", voce: "acabava", ele: "acabava", nos: "acabávamos", vos: "acabáveis", voces: "acabavam", eles: "acabavam" },
    nearFuture: { eu: "vou acabar", tu: "vais acabar", voce: "vai acabar", ele: "vai acabar", nos: "vamos acabar", vos: "ides acabar", voces: "vão acabar", eles: "vão acabar" },
  } },
  { rank: 26, infinitive: "chamar", translation: "llamar", family: "regular", forms: {
    present: { eu: "chamo", tu: "chamas", voce: "chama", ele: "chama", nos: "chamamos", vos: "chamais", voces: "chamam", eles: "chamam" },
    preterite: { eu: "chamei", tu: "chamaste", voce: "chamou", ele: "chamou", nos: "chamamos", vos: "chamastes", voces: "chamaram", eles: "chamaram" },
    imperfect: { eu: "chamava", tu: "chamavas", voce: "chamava", ele: "chamava", nos: "chamávamos", vos: "chamáveis", voces: "chamavam", eles: "chamavam" },
    nearFuture: { eu: "vou chamar", tu: "vais chamar", voce: "vai chamar", ele: "vai chamar", nos: "vamos chamar", vos: "ides chamar", voces: "vão chamar", eles: "vão chamar" },
  } },
  { rank: 27, infinitive: "morar", translation: "vivir (residir)", family: "regular", forms: {
    present: { eu: "moro", tu: "moras", voce: "mora", ele: "mora", nos: "moramos", vos: "morais", voces: "moram", eles: "moram" },
    preterite: { eu: "morei", tu: "moraste", voce: "morou", ele: "morou", nos: "moramos", vos: "morastes", voces: "moraram", eles: "moraram" },
    imperfect: { eu: "morava", tu: "moravas", voce: "morava", ele: "morava", nos: "morávamos", vos: "moráveis", voces: "moravam", eles: "moravam" },
    nearFuture: { eu: "vou morar", tu: "vais morar", voce: "vai morar", ele: "vai morar", nos: "vamos morar", vos: "ides morar", voces: "vão morar", eles: "vão morar" },
  } },
  { rank: 28, infinitive: "trabalhar", translation: "trabajar", family: "regular", forms: {
    present: { eu: "trabalho", tu: "trabalhas", voce: "trabalha", ele: "trabalha", nos: "trabalhamos", vos: "trabalhais", voces: "trabalham", eles: "trabalham" },
    preterite: { eu: "trabalhei", tu: "trabalhaste", voce: "trabalhou", ele: "trabalhou", nos: "trabalhamos", vos: "trabalhastes", voces: "trabalharam", eles: "trabalharam" },
    imperfect: { eu: "trabalhava", tu: "trabalhavas", voce: "trabalhava", ele: "trabalhava", nos: "trabalhávamos", vos: "trabalháveis", voces: "trabalhavam", eles: "trabalhavam" },
    nearFuture: { eu: "vou trabalhar", tu: "vais trabalhar", voce: "vai trabalhar", ele: "vai trabalhar", nos: "vamos trabalhar", vos: "ides trabalhar", voces: "vão trabalhar", eles: "vão trabalhar" },
  } },
  { rank: 29, infinitive: "estudar", translation: "estudiar", family: "regular", forms: {
    present: { eu: "estudo", tu: "estudas", voce: "estuda", ele: "estuda", nos: "estudamos", vos: "estudais", voces: "estudam", eles: "estudam" },
    preterite: { eu: "estudei", tu: "estudaste", voce: "estudou", ele: "estudou", nos: "estudamos", vos: "estudastes", voces: "estudaram", eles: "estudaram" },
    imperfect: { eu: "estudava", tu: "estudavas", voce: "estudava", ele: "estudava", nos: "estudávamos", vos: "estudáveis", voces: "estudavam", eles: "estudavam" },
    nearFuture: { eu: "vou estudar", tu: "vais estudar", voce: "vai estudar", ele: "vai estudar", nos: "vamos estudar", vos: "ides estudar", voces: "vão estudar", eles: "vão estudar" },
  } },
  { rank: 30, infinitive: "comprar", translation: "comprar", family: "regular", forms: {
    present: { eu: "compro", tu: "compras", voce: "compra", ele: "compra", nos: "compramos", vos: "comprais", voces: "compram", eles: "compram" },
    preterite: { eu: "comprei", tu: "compraste", voce: "comprou", ele: "comprou", nos: "compramos", vos: "comprastes", voces: "compraram", eles: "compraram" },
    imperfect: { eu: "comprava", tu: "compravas", voce: "comprava", ele: "comprava", nos: "comprávamos", vos: "compráveis", voces: "compravam", eles: "compravam" },
    nearFuture: { eu: "vou comprar", tu: "vais comprar", voce: "vai comprar", ele: "vai comprar", nos: "vamos comprar", vos: "ides comprar", voces: "vão comprar", eles: "vão comprar" },
  } },
  { rank: 31, infinitive: "gostar", translation: "gustar", family: "regular", forms: {
    present: { eu: "gosto", tu: "gostas", voce: "gosta", ele: "gosta", nos: "gostamos", vos: "gostais", voces: "gostam", eles: "gostam" },
    preterite: { eu: "gostei", tu: "gostaste", voce: "gostou", ele: "gostou", nos: "gostamos", vos: "gostastes", voces: "gostaram", eles: "gostaram" },
    imperfect: { eu: "gostava", tu: "gostavas", voce: "gostava", ele: "gostava", nos: "gostávamos", vos: "gostáveis", voces: "gostavam", eles: "gostavam" },
    nearFuture: { eu: "vou gostar", tu: "vais gostar", voce: "vai gostar", ele: "vai gostar", nos: "vamos gostar", vos: "ides gostar", voces: "vão gostar", eles: "vão gostar" },
  } },
  { rank: 32, infinitive: "jogar", translation: "jugar", family: "regular", forms: {
    present: { eu: "jogo", tu: "jogas", voce: "joga", ele: "joga", nos: "jogamos", vos: "jogais", voces: "jogam", eles: "jogam" },
    preterite: { eu: "joguei", tu: "jogaste", voce: "jogou", ele: "jogou", nos: "jogamos", vos: "jogastes", voces: "jogaram", eles: "jogaram" },
    imperfect: { eu: "jogava", tu: "jogavas", voce: "jogava", ele: "jogava", nos: "jogávamos", vos: "jogáveis", voces: "jogavam", eles: "jogavam" },
    nearFuture: { eu: "vou jogar", tu: "vais jogar", voce: "vai jogar", ele: "vai jogar", nos: "vamos jogar", vos: "ides jogar", voces: "vão jogar", eles: "vão jogar" },
  } },
  { rank: 33, infinitive: "viver", translation: "vivir", family: "regular", forms: {
    present: { eu: "vivo", tu: "vives", voce: "vive", ele: "vive", nos: "vivemos", vos: "viveis", voces: "vivem", eles: "vivem" },
    preterite: { eu: "vivi", tu: "viveste", voce: "viveu", ele: "viveu", nos: "vivemos", vos: "vivestes", voces: "viveram", eles: "viveram" },
    imperfect: { eu: "vivia", tu: "vivias", voce: "vivia", ele: "vivia", nos: "vivíamos", vos: "vivíeis", voces: "viviam", eles: "viviam" },
    nearFuture: { eu: "vou viver", tu: "vais viver", voce: "vai viver", ele: "vai viver", nos: "vamos viver", vos: "ides viver", voces: "vão viver", eles: "vão viver" },
  } },
  { rank: 34, infinitive: "morrer", translation: "morir", family: "regular", forms: {
    present: { eu: "morro", tu: "morres", voce: "morre", ele: "morre", nos: "morremos", vos: "morreis", voces: "morrem", eles: "morrem" },
    preterite: { eu: "morri", tu: "morreste", voce: "morreu", ele: "morreu", nos: "morremos", vos: "morrestes", voces: "morreram", eles: "morreram" },
    imperfect: { eu: "morria", tu: "morrias", voce: "morria", ele: "morria", nos: "morríamos", vos: "morríeis", voces: "morriam", eles: "morriam" },
    nearFuture: { eu: "vou morrer", tu: "vais morrer", voce: "vai morrer", ele: "vai morrer", nos: "vamos morrer", vos: "ides morrer", voces: "vão morrer", eles: "vão morrer" },
  } },
  { rank: 35, infinitive: "nascer", translation: "nacer", family: "regular", forms: {
    present: { eu: "nasço", tu: "nasces", voce: "nasce", ele: "nasce", nos: "nascemos", vos: "nasceis", voces: "nascem", eles: "nascem" },
    preterite: { eu: "nasci", tu: "nasceste", voce: "nasceu", ele: "nasceu", nos: "nascemos", vos: "nascestes", voces: "nasceram", eles: "nasceram" },
    imperfect: { eu: "nascia", tu: "nascias", voce: "nascia", ele: "nascia", nos: "nascíamos", vos: "nascíeis", voces: "nasciam", eles: "nasciam" },
    nearFuture: { eu: "vou nascer", tu: "vais nascer", voce: "vai nascer", ele: "vai nascer", nos: "vamos nascer", vos: "ides nascer", voces: "vão nascer", eles: "vão nascer" },
  } },
  { rank: 36, infinitive: "aprender", translation: "aprender", family: "regular", forms: {
    present: { eu: "aprendo", tu: "aprendes", voce: "aprende", ele: "aprende", nos: "aprendemos", vos: "aprendeis", voces: "aprendem", eles: "aprendem" },
    preterite: { eu: "aprendi", tu: "aprendeste", voce: "aprendeu", ele: "aprendeu", nos: "aprendemos", vos: "aprendestes", voces: "aprenderam", eles: "aprenderam" },
    imperfect: { eu: "aprendia", tu: "aprendias", voce: "aprendia", ele: "aprendia", nos: "aprendíamos", vos: "aprendíeis", voces: "aprendiam", eles: "aprendiam" },
    nearFuture: { eu: "vou aprender", tu: "vais aprender", voce: "vai aprender", ele: "vai aprender", nos: "vamos aprender", vos: "ides aprender", voces: "vão aprender", eles: "vão aprender" },
  } },
  { rank: 37, infinitive: "entender", translation: "entender", family: "regular", forms: {
    present: { eu: "entendo", tu: "entendes", voce: "entende", ele: "entende", nos: "entendemos", vos: "entendeis", voces: "entendem", eles: "entendem" },
    preterite: { eu: "entendi", tu: "entendeste", voce: "entendeu", ele: "entendeu", nos: "entendemos", vos: "entendestes", voces: "entenderam", eles: "entenderam" },
    imperfect: { eu: "entendia", tu: "entendias", voce: "entendia", ele: "entendia", nos: "entendíamos", vos: "entendíeis", voces: "entendiam", eles: "entendiam" },
    nearFuture: { eu: "vou entender", tu: "vais entender", voce: "vai entender", ele: "vai entender", nos: "vamos entender", vos: "ides entender", voces: "vão entender", eles: "vão entender" },
  } },
  { rank: 38, infinitive: "vender", translation: "vender", family: "regular", forms: {
    present: { eu: "vendo", tu: "vendes", voce: "vende", ele: "vende", nos: "vendemos", vos: "vendeis", voces: "vendem", eles: "vendem" },
    preterite: { eu: "vendi", tu: "vendeste", voce: "vendeu", ele: "vendeu", nos: "vendemos", vos: "vendestes", voces: "venderam", eles: "venderam" },
    imperfect: { eu: "vendia", tu: "vendias", voce: "vendia", ele: "vendia", nos: "vendíamos", vos: "vendíeis", voces: "vendiam", eles: "vendiam" },
    nearFuture: { eu: "vou vender", tu: "vais vender", voce: "vai vender", ele: "vai vender", nos: "vamos vender", vos: "ides vender", voces: "vão vender", eles: "vão vender" },
  } },
  { rank: 39, infinitive: "escrever", translation: "escribir", family: "regular", forms: {
    present: { eu: "escrevo", tu: "escreves", voce: "escreve", ele: "escreve", nos: "escrevemos", vos: "escreveis", voces: "escrevem", eles: "escrevem" },
    preterite: { eu: "escrevi", tu: "escreveste", voce: "escreveu", ele: "escreveu", nos: "escrevemos", vos: "escrevestes", voces: "escreveram", eles: "escreveram" },
    imperfect: { eu: "escrevia", tu: "escrevias", voce: "escrevia", ele: "escrevia", nos: "escrevíamos", vos: "escrevíeis", voces: "escreviam", eles: "escreviam" },
    nearFuture: { eu: "vou escrever", tu: "vais escrever", voce: "vai escrever", ele: "vai escrever", nos: "vamos escrever", vos: "ides escrever", voces: "vão escrever", eles: "vão escrever" },
  } },
  { rank: 40, infinitive: "conhecer", translation: "conocer", family: "regular", forms: {
    present: { eu: "conheço", tu: "conheces", voce: "conhece", ele: "conhece", nos: "conhecemos", vos: "conheceis", voces: "conhecem", eles: "conhecem" },
    preterite: { eu: "conheci", tu: "conheceste", voce: "conheceu", ele: "conheceu", nos: "conhecemos", vos: "conhecestes", voces: "conheceram", eles: "conheceram" },
    imperfect: { eu: "conhecia", tu: "conhecias", voce: "conhecia", ele: "conhecia", nos: "conhecíamos", vos: "conhecíeis", voces: "conheciam", eles: "conheciam" },
    nearFuture: { eu: "vou conhecer", tu: "vais conhecer", voce: "vai conhecer", ele: "vai conhecer", nos: "vamos conhecer", vos: "ides conhecer", voces: "vão conhecer", eles: "vão conhecer" },
  } },
  { rank: 41, infinitive: "colocar", translation: "colocar / poner", family: "regular", forms: {
    present: { eu: "coloco", tu: "colocas", voce: "coloca", ele: "coloca", nos: "colocamos", vos: "colocais", voces: "colocam", eles: "colocam" },
    preterite: { eu: "coloquei", tu: "colocaste", voce: "colocou", ele: "colocou", nos: "colocamos", vos: "colocastes", voces: "colocaram", eles: "colocaram" },
    imperfect: { eu: "colocava", tu: "colocavas", voce: "colocava", ele: "colocava", nos: "colocávamos", vos: "colocáveis", voces: "colocavam", eles: "colocavam" },
    nearFuture: { eu: "vou colocar", tu: "vais colocar", voce: "vai colocar", ele: "vai colocar", nos: "vamos colocar", vos: "ides colocar", voces: "vão colocar", eles: "vão colocar" },
  } },
  { rank: 42, infinitive: "abrir", translation: "abrir", family: "regular", forms: {
    present: { eu: "abro", tu: "abres", voce: "abre", ele: "abre", nos: "abrimos", vos: "abris", voces: "abrem", eles: "abrem" },
    preterite: { eu: "abri", tu: "abriste", voce: "abriu", ele: "abriu", nos: "abrimos", vos: "abristes", voces: "abriram", eles: "abriram" },
    imperfect: { eu: "abria", tu: "abrias", voce: "abria", ele: "abria", nos: "abríamos", vos: "abríeis", voces: "abriam", eles: "abriam" },
    nearFuture: { eu: "vou abrir", tu: "vais abrir", voce: "vai abrir", ele: "vai abrir", nos: "vamos abrir", vos: "ides abrir", voces: "vão abrir", eles: "vão abrir" },
  } },
  { rank: 43, infinitive: "partir", translation: "partir", family: "regular", forms: {
    present: { eu: "parto", tu: "partes", voce: "parte", ele: "parte", nos: "partimos", vos: "partis", voces: "partem", eles: "partem" },
    preterite: { eu: "parti", tu: "partiste", voce: "partiu", ele: "partiu", nos: "partimos", vos: "partistes", voces: "partiram", eles: "partiram" },
    imperfect: { eu: "partia", tu: "partias", voce: "partia", ele: "partia", nos: "partíamos", vos: "partíeis", voces: "partiam", eles: "partiam" },
    nearFuture: { eu: "vou partir", tu: "vais partir", voce: "vai partir", ele: "vai partir", nos: "vamos partir", vos: "ides partir", voces: "vão partir", eles: "vão partir" },
  } },
  { rank: 44, infinitive: "sentir", translation: "sentir", family: "irregular", forms: {
    present: { eu: "sinto", tu: "sentes", voce: "sente", ele: "sente", nos: "sentimos", vos: "sentis", voces: "sentem", eles: "sentem" },
    preterite: { eu: "senti", tu: "sentiste", voce: "sentiu", ele: "sentiu", nos: "sentimos", vos: "sentistes", voces: "sentiram", eles: "sentiram" },
    imperfect: { eu: "sentia", tu: "sentias", voce: "sentia", ele: "sentia", nos: "sentíamos", vos: "sentíeis", voces: "sentiam", eles: "sentiam" },
    nearFuture: { eu: "vou sentir", tu: "vais sentir", voce: "vai sentir", ele: "vai sentir", nos: "vamos sentir", vos: "ides sentir", voces: "vão sentir", eles: "vão sentir" },
  } },
  { rank: 45, infinitive: "seguir", translation: "seguir", family: "irregular", forms: {
    present: { eu: "sigo", tu: "segues", voce: "segue", ele: "segue", nos: "seguimos", vos: "seguis", voces: "seguem", eles: "seguem" },
    preterite: { eu: "segui", tu: "seguiste", voce: "seguiu", ele: "seguiu", nos: "seguimos", vos: "seguistes", voces: "seguiram", eles: "seguiram" },
    imperfect: { eu: "seguia", tu: "seguias", voce: "seguia", ele: "seguia", nos: "seguíamos", vos: "seguíeis", voces: "seguiam", eles: "seguiam" },
    nearFuture: { eu: "vou seguir", tu: "vais seguir", voce: "vai seguir", ele: "vai seguir", nos: "vamos seguir", vos: "ides seguir", voces: "vão seguir", eles: "vão seguir" },
  } },
  { rank: 46, infinitive: "servir", translation: "servir", family: "irregular", forms: {
    present: { eu: "sirvo", tu: "serves", voce: "serve", ele: "serve", nos: "servimos", vos: "servis", voces: "servem", eles: "servem" },
    preterite: { eu: "servi", tu: "serviste", voce: "serviu", ele: "serviu", nos: "servimos", vos: "servistes", voces: "serviram", eles: "serviram" },
    imperfect: { eu: "servia", tu: "servias", voce: "servia", ele: "servia", nos: "servíamos", vos: "servíeis", voces: "serviam", eles: "serviam" },
    nearFuture: { eu: "vou servir", tu: "vais servir", voce: "vai servir", ele: "vai servir", nos: "vamos servir", vos: "ides servir", voces: "vão servir", eles: "vão servir" },
  } },
  { rank: 47, infinitive: "dormir", translation: "dormir", family: "irregular", forms: {
    present: { eu: "durmo", tu: "dormes", voce: "dorme", ele: "dorme", nos: "dormimos", vos: "dormis", voces: "dormem", eles: "dormem" },
    preterite: { eu: "dormi", tu: "dormiste", voce: "dormiu", ele: "dormiu", nos: "dormimos", vos: "dormistes", voces: "dormiram", eles: "dormiram" },
    imperfect: { eu: "dormia", tu: "dormias", voce: "dormia", ele: "dormia", nos: "dormíamos", vos: "dormíeis", voces: "dormiam", eles: "dormiam" },
    nearFuture: { eu: "vou dormir", tu: "vais dormir", voce: "vai dormir", ele: "vai dormir", nos: "vamos dormir", vos: "ides dormir", voces: "vão dormir", eles: "vão dormir" },
  } },
  { rank: 48, infinitive: "vestir", translation: "vestir", family: "irregular", forms: {
    present: { eu: "visto", tu: "vestes", voce: "veste", ele: "veste", nos: "vestimos", vos: "vestis", voces: "vestem", eles: "vestem" },
    preterite: { eu: "vesti", tu: "vestiste", voce: "vestiu", ele: "vestiu", nos: "vestimos", vos: "vestistes", voces: "vestiram", eles: "vestiram" },
    imperfect: { eu: "vestia", tu: "vestias", voce: "vestia", ele: "vestia", nos: "vestíamos", vos: "vestíeis", voces: "vestiam", eles: "vestiam" },
    nearFuture: { eu: "vou vestir", tu: "vais vestir", voce: "vai vestir", ele: "vai vestir", nos: "vamos vestir", vos: "ides vestir", voces: "vão vestir", eles: "vão vestir" },
  } },
  { rank: 49, infinitive: "repetir", translation: "repetir", family: "irregular", forms: {
    present: { eu: "repito", tu: "repetes", voce: "repete", ele: "repete", nos: "repetimos", vos: "repetis", voces: "repetem", eles: "repetem" },
    preterite: { eu: "repeti", tu: "repetiste", voce: "repetiu", ele: "repetiu", nos: "repetimos", vos: "repetistes", voces: "repetiram", eles: "repetiram" },
    imperfect: { eu: "repetia", tu: "repetias", voce: "repetia", ele: "repetia", nos: "repetíamos", vos: "repetíeis", voces: "repetiam", eles: "repetiam" },
    nearFuture: { eu: "vou repetir", tu: "vais repetir", voce: "vai repetir", ele: "vai repetir", nos: "vamos repetir", vos: "ides repetir", voces: "vão repetir", eles: "vão repetir" },
  } },
  { rank: 50, infinitive: "sorrir", translation: "sonreír", family: "irregular", forms: {
    present: { eu: "sorrio", tu: "sorris", voce: "sorri", ele: "sorri", nos: "sorrimos", vos: "sorrides", voces: "sorriem", eles: "sorriem" },
    preterite: { eu: "sorri", tu: "sorriste", voce: "sorriu", ele: "sorriu", nos: "sorrimos", vos: "sorristes", voces: "sorriram", eles: "sorriram" },
    imperfect: { eu: "sorria", tu: "sorrias", voce: "sorria", ele: "sorria", nos: "sorríamos", vos: "sorríeis", voces: "sorriam", eles: "sorriam" },
    nearFuture: { eu: "vou sorrir", tu: "vais sorrir", voce: "vai sorrir", ele: "vai sorrir", nos: "vamos sorrir", vos: "ides sorrir", voces: "vão sorrir", eles: "vão sorrir" },
  } },
  { rank: 51, infinitive: "subir", translation: "subir", family: "irregular", forms: {
    present: { eu: "subo", tu: "sobes", voce: "sobe", ele: "sobe", nos: "subimos", vos: "subis", voces: "sobem", eles: "sobem" },
    preterite: { eu: "subi", tu: "subiste", voce: "subiu", ele: "subiu", nos: "subimos", vos: "subistes", voces: "subiram", eles: "subiram" },
    imperfect: { eu: "subia", tu: "subias", voce: "subia", ele: "subia", nos: "subíamos", vos: "subíeis", voces: "subiam", eles: "subiam" },
    nearFuture: { eu: "vou subir", tu: "vais subir", voce: "vai subir", ele: "vai subir", nos: "vamos subir", vos: "ides subir", voces: "vão subir", eles: "vão subir" },
  } },
  { rank: 52, infinitive: "decidir", translation: "decidir", family: "regular", forms: {
    present: { eu: "decido", tu: "decides", voce: "decide", ele: "decide", nos: "decidimos", vos: "decidis", voces: "decidem", eles: "decidem" },
    preterite: { eu: "decidi", tu: "decidiste", voce: "decidiu", ele: "decidiu", nos: "decidimos", vos: "decidistes", voces: "decidiram", eles: "decidiram" },
    imperfect: { eu: "decidia", tu: "decidias", voce: "decidia", ele: "decidia", nos: "decidíamos", vos: "decidíeis", voces: "decidiam", eles: "decidiam" },
    nearFuture: { eu: "vou decidir", tu: "vais decidir", voce: "vai decidir", ele: "vai decidir", nos: "vamos decidir", vos: "ides decidir", voces: "vão decidir", eles: "vão decidir" },
  } },
  { rank: 53, infinitive: "permitir", translation: "permitir", family: "regular", forms: {
    present: { eu: "permito", tu: "permites", voce: "permite", ele: "permite", nos: "permitimos", vos: "permitis", voces: "permitem", eles: "permitem" },
    preterite: { eu: "permiti", tu: "permitiste", voce: "permitiu", ele: "permitiu", nos: "permitimos", vos: "permitistes", voces: "permitiram", eles: "permitiram" },
    imperfect: { eu: "permitia", tu: "permitias", voce: "permitia", ele: "permitia", nos: "permitíamos", vos: "permitíeis", voces: "permitiam", eles: "permitiam" },
    nearFuture: { eu: "vou permitir", tu: "vais permitir", voce: "vai permitir", ele: "vai permitir", nos: "vamos permitir", vos: "ides permitir", voces: "vão permitir", eles: "vão permitir" },
  } },
  { rank: 54, infinitive: "insistir", translation: "insistir", family: "regular", forms: {
    present: { eu: "insisto", tu: "insistes", voce: "insiste", ele: "insiste", nos: "insistimos", vos: "insistis", voces: "insistem", eles: "insistem" },
    preterite: { eu: "insisti", tu: "insististe", voce: "insistiu", ele: "insistiu", nos: "insistimos", vos: "insististes", voces: "insistiram", eles: "insistiram" },
    imperfect: { eu: "insistia", tu: "insistias", voce: "insistia", ele: "insistia", nos: "insistíamos", vos: "insistíeis", voces: "insistiam", eles: "insistiam" },
    nearFuture: { eu: "vou insistir", tu: "vais insistir", voce: "vai insistir", ele: "vai insistir", nos: "vamos insistir", vos: "ides insistir", voces: "vão insistir", eles: "vão insistir" },
  } },
  { rank: 55, infinitive: "existir", translation: "existir", family: "regular", forms: {
    present: { eu: "existo", tu: "existes", voce: "existe", ele: "existe", nos: "existimos", vos: "existis", voces: "existem", eles: "existem" },
    preterite: { eu: "existi", tu: "exististe", voce: "existiu", ele: "existiu", nos: "existimos", vos: "exististes", voces: "existiram", eles: "existiram" },
    imperfect: { eu: "existia", tu: "existias", voce: "existia", ele: "existia", nos: "existíamos", vos: "existíeis", voces: "existiam", eles: "existiam" },
    nearFuture: { eu: "vou existir", tu: "vais existir", voce: "vai existir", ele: "vai existir", nos: "vamos existir", vos: "ides existir", voces: "vão existir", eles: "vão existir" },
  } },
  { rank: 56, infinitive: "assistir", translation: "asistir / mirar (TV)", family: "regular", forms: {
    present: { eu: "assisto", tu: "assistes", voce: "assiste", ele: "assiste", nos: "assistimos", vos: "assistis", voces: "assistem", eles: "assistem" },
    preterite: { eu: "assisti", tu: "assististe", voce: "assistiu", ele: "assistiu", nos: "assistimos", vos: "assististes", voces: "assistiram", eles: "assistiram" },
    imperfect: { eu: "assistia", tu: "assistias", voce: "assistia", ele: "assistia", nos: "assistíamos", vos: "assistíeis", voces: "assistiam", eles: "assistiam" },
    nearFuture: { eu: "vou assistir", tu: "vais assistir", voce: "vai assistir", ele: "vai assistir", nos: "vamos assistir", vos: "ides assistir", voces: "vão assistir", eles: "vão assistir" },
  } },
  { rank: 57, infinitive: "construir", translation: "construir", family: "irregular", forms: {
    present: { eu: "construo", tu: "constróis", voce: "constrói", ele: "constrói", nos: "construímos", vos: "construís", voces: "constroem", eles: "constroem" },
    preterite: { eu: "construí", tu: "construíste", voce: "construiu", ele: "construiu", nos: "construímos", vos: "construístes", voces: "construíram", eles: "construíram" },
    imperfect: { eu: "construía", tu: "construías", voce: "construía", ele: "construía", nos: "construíamos", vos: "construíeis", voces: "construíam", eles: "construíam" },
    nearFuture: { eu: "vou construir", tu: "vais construir", voce: "vai construir", ele: "vai construir", nos: "vamos construir", vos: "ides construir", voces: "vão construir", eles: "vão construir" },
  } },
  { rank: 58, infinitive: "produzir", translation: "producir", family: "irregular", forms: {
    present: { eu: "produzo", tu: "produzes", voce: "produz", ele: "produz", nos: "produzimos", vos: "produzis", voces: "produzem", eles: "produzem" },
    preterite: { eu: "produzi", tu: "produziste", voce: "produziu", ele: "produziu", nos: "produzimos", vos: "produzistes", voces: "produziram", eles: "produziram" },
    imperfect: { eu: "produzia", tu: "produzias", voce: "produzia", ele: "produzia", nos: "produzíamos", vos: "produzíeis", voces: "produziam", eles: "produziam" },
    nearFuture: { eu: "vou produzir", tu: "vais produzir", voce: "vai produzir", ele: "vai produzir", nos: "vamos produzir", vos: "ides produzir", voces: "vão produzir", eles: "vão produzir" },
  } },
  { rank: 59, infinitive: "traduzir", translation: "traducir", family: "irregular", forms: {
    present: { eu: "traduzo", tu: "traduzes", voce: "traduz", ele: "traduz", nos: "traduzimos", vos: "traduzis", voces: "traduzem", eles: "traduzem" },
    preterite: { eu: "traduzi", tu: "traduziste", voce: "traduziu", ele: "traduziu", nos: "traduzimos", vos: "traduzistes", voces: "traduziram", eles: "traduziram" },
    imperfect: { eu: "traduzia", tu: "traduzias", voce: "traduzia", ele: "traduzia", nos: "traduzíamos", vos: "traduzíeis", voces: "traduziam", eles: "traduziam" },
    nearFuture: { eu: "vou traduzir", tu: "vais traduzir", voce: "vai traduzir", ele: "vai traduzir", nos: "vamos traduzir", vos: "ides traduzir", voces: "vão traduzir", eles: "vão traduzir" },
  } },
  { rank: 60, infinitive: "conduzir", translation: "conducir", family: "irregular", forms: {
    present: { eu: "conduzo", tu: "conduzes", voce: "conduz", ele: "conduz", nos: "conduzimos", vos: "conduzis", voces: "conduzem", eles: "conduzem" },
    preterite: { eu: "conduzi", tu: "conduziste", voce: "conduziu", ele: "conduziu", nos: "conduzimos", vos: "conduzistes", voces: "conduziram", eles: "conduziram" },
    imperfect: { eu: "conduzia", tu: "conduzias", voce: "conduzia", ele: "conduzia", nos: "conduzíamos", vos: "conduzíeis", voces: "conduziam", eles: "conduziam" },
    nearFuture: { eu: "vou conduzir", tu: "vais conduzir", voce: "vai conduzir", ele: "vai conduzir", nos: "vamos conduzir", vos: "ides conduzir", voces: "vão conduzir", eles: "vão conduzir" },
  } },
  { rank: 61, infinitive: "dirigir", translation: "dirigir / manejar", family: "regular", forms: {
    present: { eu: "dirijo", tu: "diriges", voce: "dirige", ele: "dirige", nos: "dirigimos", vos: "dirigis", voces: "dirigem", eles: "dirigem" },
    preterite: { eu: "dirigi", tu: "dirigiste", voce: "dirigiu", ele: "dirigiu", nos: "dirigimos", vos: "dirigistes", voces: "dirigiram", eles: "dirigiram" },
    imperfect: { eu: "dirigia", tu: "dirigias", voce: "dirigia", ele: "dirigia", nos: "dirigíamos", vos: "dirigíeis", voces: "dirigiam", eles: "dirigiam" },
    nearFuture: { eu: "vou dirigir", tu: "vais dirigir", voce: "vai dirigir", ele: "vai dirigir", nos: "vamos dirigir", vos: "ides dirigir", voces: "vão dirigir", eles: "vão dirigir" },
  } },
  { rank: 62, infinitive: "corrigir", translation: "corregir", family: "regular", forms: {
    present: { eu: "corrijo", tu: "corriges", voce: "corrige", ele: "corrige", nos: "corrigimos", vos: "corrigis", voces: "corrigem", eles: "corrigem" },
    preterite: { eu: "corrigi", tu: "corrigiste", voce: "corrigiu", ele: "corrigiu", nos: "corrigimos", vos: "corrigistes", voces: "corrigiram", eles: "corrigiram" },
    imperfect: { eu: "corrigia", tu: "corrigias", voce: "corrigia", ele: "corrigia", nos: "corrigíamos", vos: "corrigíeis", voces: "corrigiam", eles: "corrigiam" },
    nearFuture: { eu: "vou corrigir", tu: "vais corrigir", voce: "vai corrigir", ele: "vai corrigir", nos: "vamos corrigir", vos: "ides corrigir", voces: "vão corrigir", eles: "vão corrigir" },
  } },
  { rank: 63, infinitive: "exigir", translation: "exigir", family: "regular", forms: {
    present: { eu: "exijo", tu: "exiges", voce: "exige", ele: "exige", nos: "exigimos", vos: "exigis", voces: "exigem", eles: "exigem" },
    preterite: { eu: "exigi", tu: "exigiste", voce: "exigiu", ele: "exigiu", nos: "exigimos", vos: "exigistes", voces: "exigiram", eles: "exigiram" },
    imperfect: { eu: "exigia", tu: "exigias", voce: "exigia", ele: "exigia", nos: "exigíamos", vos: "exigíeis", voces: "exigiam", eles: "exigiam" },
    nearFuture: { eu: "vou exigir", tu: "vais exigir", voce: "vai exigir", ele: "vai exigir", nos: "vamos exigir", vos: "ides exigir", voces: "vão exigir", eles: "vão exigir" },
  } },
  { rank: 64, infinitive: "fugir", translation: "huir", family: "irregular", forms: {
    present: { eu: "fujo", tu: "foges", voce: "foge", ele: "foge", nos: "fugimos", vos: "fugis", voces: "fogem", eles: "fogem" },
    preterite: { eu: "fugi", tu: "fugiste", voce: "fugiu", ele: "fugiu", nos: "fugimos", vos: "fugistes", voces: "fugiram", eles: "fugiram" },
    imperfect: { eu: "fugia", tu: "fugias", voce: "fugia", ele: "fugia", nos: "fugíamos", vos: "fugíeis", voces: "fugiam", eles: "fugiam" },
    nearFuture: { eu: "vou fugir", tu: "vais fugir", voce: "vai fugir", ele: "vai fugir", nos: "vamos fugir", vos: "ides fugir", voces: "vão fugir", eles: "vão fugir" },
  } },
  { rank: 65, infinitive: "mentir", translation: "mentir", family: "irregular", forms: {
    present: { eu: "minto", tu: "mentes", voce: "mente", ele: "mente", nos: "mentimos", vos: "mentis", voces: "mentem", eles: "mentem" },
    preterite: { eu: "menti", tu: "mentiste", voce: "mentiu", ele: "mentiu", nos: "mentimos", vos: "mentistes", voces: "mentiram", eles: "mentiram" },
    imperfect: { eu: "mentia", tu: "mentias", voce: "mentia", ele: "mentia", nos: "mentíamos", vos: "mentíeis", voces: "mentiam", eles: "mentiam" },
    nearFuture: { eu: "vou mentir", tu: "vais mentir", voce: "vai mentir", ele: "vai mentir", nos: "vamos mentir", vos: "ides mentir", voces: "vão mentir", eles: "vão mentir" },
  } },
  { rank: 66, infinitive: "sentar", translation: "sentar(se)", family: "regular", forms: {
    present: { eu: "sento", tu: "sentas", voce: "senta", ele: "senta", nos: "sentamos", vos: "sentais", voces: "sentam", eles: "sentam" },
    preterite: { eu: "sentei", tu: "sentaste", voce: "sentou", ele: "sentou", nos: "sentamos", vos: "sentastes", voces: "sentaram", eles: "sentaram" },
    imperfect: { eu: "sentava", tu: "sentavas", voce: "sentava", ele: "sentava", nos: "sentávamos", vos: "sentáveis", voces: "sentavam", eles: "sentavam" },
    nearFuture: { eu: "vou sentar", tu: "vais sentar", voce: "vai sentar", ele: "vai sentar", nos: "vamos sentar", vos: "ides sentar", voces: "vão sentar", eles: "vão sentar" },
  } },
  { rank: 67, infinitive: "preferir", translation: "preferir", family: "irregular", forms: {
    present: { eu: "prefiro", tu: "preferes", voce: "prefere", ele: "prefere", nos: "preferimos", vos: "preferis", voces: "preferem", eles: "preferem" },
    preterite: { eu: "preferi", tu: "preferiste", voce: "preferiu", ele: "preferiu", nos: "preferimos", vos: "preferistes", voces: "preferiram", eles: "preferiram" },
    imperfect: { eu: "preferia", tu: "preferias", voce: "preferia", ele: "preferia", nos: "preferíamos", vos: "preferíeis", voces: "preferiam", eles: "preferiam" },
    nearFuture: { eu: "vou preferir", tu: "vais preferir", voce: "vai preferir", ele: "vai preferir", nos: "vamos preferir", vos: "ides preferir", voces: "vão preferir", eles: "vão preferir" },
  } },
  { rank: 68, infinitive: "sugerir", translation: "sugerir", family: "irregular", forms: {
    present: { eu: "sugiro", tu: "sugeres", voce: "sugere", ele: "sugere", nos: "sugerimos", vos: "sugeris", voces: "sugerem", eles: "sugerem" },
    preterite: { eu: "sugeri", tu: "sugeriste", voce: "sugeriu", ele: "sugeriu", nos: "sugerimos", vos: "sugeristes", voces: "sugeriram", eles: "sugeriram" },
    imperfect: { eu: "sugeria", tu: "sugerias", voce: "sugeria", ele: "sugeria", nos: "sugeríamos", vos: "sugeríeis", voces: "sugeriam", eles: "sugeriam" },
    nearFuture: { eu: "vou sugerir", tu: "vais sugerir", voce: "vai sugerir", ele: "vai sugerir", nos: "vamos sugerir", vos: "ides sugerir", voces: "vão sugerir", eles: "vão sugerir" },
  } },
  { rank: 69, infinitive: "continuar", translation: "continuar", family: "regular", forms: {
    present: { eu: "continuo", tu: "continuas", voce: "continua", ele: "continua", nos: "continuamos", vos: "continuais", voces: "continuam", eles: "continuam" },
    preterite: { eu: "continuei", tu: "continuaste", voce: "continuou", ele: "continuou", nos: "continuamos", vos: "continuastes", voces: "continuaram", eles: "continuaram" },
    imperfect: { eu: "continuava", tu: "continuavas", voce: "continuava", ele: "continuava", nos: "continuávamos", vos: "continuáveis", voces: "continuavam", eles: "continuavam" },
    nearFuture: { eu: "vou continuar", tu: "vais continuar", voce: "vai continuar", ele: "vai continuar", nos: "vamos continuar", vos: "ides continuar", voces: "vão continuar", eles: "vão continuar" },
  } },
  { rank: 70, infinitive: "mostrar", translation: "mostrar", family: "regular", forms: {
    present: { eu: "mostro", tu: "mostras", voce: "mostra", ele: "mostra", nos: "mostramos", vos: "mostrais", voces: "mostram", eles: "mostram" },
    preterite: { eu: "mostrei", tu: "mostraste", voce: "mostrou", ele: "mostrou", nos: "mostramos", vos: "mostrastes", voces: "mostraram", eles: "mostraram" },
    imperfect: { eu: "mostrava", tu: "mostravas", voce: "mostrava", ele: "mostrava", nos: "mostrávamos", vos: "mostráveis", voces: "mostravam", eles: "mostravam" },
    nearFuture: { eu: "vou mostrar", tu: "vais mostrar", voce: "vai mostrar", ele: "vai mostrar", nos: "vamos mostrar", vos: "ides mostrar", voces: "vão mostrar", eles: "vão mostrar" },
  } },
  { rank: 71, infinitive: "contar", translation: "contar", family: "regular", forms: {
    present: { eu: "conto", tu: "contas", voce: "conta", ele: "conta", nos: "contamos", vos: "contais", voces: "contam", eles: "contam" },
    preterite: { eu: "contei", tu: "contaste", voce: "contou", ele: "contou", nos: "contamos", vos: "contastes", voces: "contaram", eles: "contaram" },
    imperfect: { eu: "contava", tu: "contavas", voce: "contava", ele: "contava", nos: "contávamos", vos: "contáveis", voces: "contavam", eles: "contavam" },
    nearFuture: { eu: "vou contar", tu: "vais contar", voce: "vai contar", ele: "vai contar", nos: "vamos contar", vos: "ides contar", voces: "vão contar", eles: "vão contar" },
  } },
  { rank: 72, infinitive: "voltar", translation: "volver", family: "regular", forms: {
    present: { eu: "volto", tu: "voltas", voce: "volta", ele: "volta", nos: "voltamos", vos: "voltais", voces: "voltam", eles: "voltam" },
    preterite: { eu: "voltei", tu: "voltaste", voce: "voltou", ele: "voltou", nos: "voltamos", vos: "voltastes", voces: "voltaram", eles: "voltaram" },
    imperfect: { eu: "voltava", tu: "voltavas", voce: "voltava", ele: "voltava", nos: "voltávamos", vos: "voltáveis", voces: "voltavam", eles: "voltavam" },
    nearFuture: { eu: "vou voltar", tu: "vais voltar", voce: "vai voltar", ele: "vai voltar", nos: "vamos voltar", vos: "ides voltar", voces: "vão voltar", eles: "vão voltar" },
  } },
  { rank: 73, infinitive: "andar", translation: "andar / caminar", family: "regular", forms: {
    present: { eu: "ando", tu: "andas", voce: "anda", ele: "anda", nos: "andamos", vos: "andais", voces: "andam", eles: "andam" },
    preterite: { eu: "andei", tu: "andaste", voce: "andou", ele: "andou", nos: "andamos", vos: "andastes", voces: "andaram", eles: "andaram" },
    imperfect: { eu: "andava", tu: "andavas", voce: "andava", ele: "andava", nos: "andávamos", vos: "andáveis", voces: "andavam", eles: "andavam" },
    nearFuture: { eu: "vou andar", tu: "vais andar", voce: "vai andar", ele: "vai andar", nos: "vamos andar", vos: "ides andar", voces: "vão andar", eles: "vão andar" },
  } },
  { rank: 74, infinitive: "correr", translation: "correr", family: "regular", forms: {
    present: { eu: "corro", tu: "corres", voce: "corre", ele: "corre", nos: "corremos", vos: "correis", voces: "correm", eles: "correm" },
    preterite: { eu: "corri", tu: "correste", voce: "correu", ele: "correu", nos: "corremos", vos: "correstes", voces: "correram", eles: "correram" },
    imperfect: { eu: "corria", tu: "corrias", voce: "corria", ele: "corria", nos: "corríamos", vos: "corríeis", voces: "corriam", eles: "corriam" },
    nearFuture: { eu: "vou correr", tu: "vais correr", voce: "vai correr", ele: "vai correr", nos: "vamos correr", vos: "ides correr", voces: "vão correr", eles: "vão correr" },
  } },
  { rank: 75, infinitive: "esperar", translation: "esperar", family: "regular", forms: {
    present: { eu: "espero", tu: "esperas", voce: "espera", ele: "espera", nos: "esperamos", vos: "esperais", voces: "esperam", eles: "esperam" },
    preterite: { eu: "esperei", tu: "esperaste", voce: "esperou", ele: "esperou", nos: "esperamos", vos: "esperastes", voces: "esperaram", eles: "esperaram" },
    imperfect: { eu: "esperava", tu: "esperavas", voce: "esperava", ele: "esperava", nos: "esperávamos", vos: "esperáveis", voces: "esperavam", eles: "esperavam" },
    nearFuture: { eu: "vou esperar", tu: "vais esperar", voce: "vai esperar", ele: "vai esperar", nos: "vamos esperar", vos: "ides esperar", voces: "vão esperar", eles: "vão esperar" },
  } },
  { rank: 76, infinitive: "começar", translation: "empezar / comenzar", family: "regular", forms: {
    present: { eu: "começo", tu: "começas", voce: "começa", ele: "começa", nos: "começamos", vos: "começais", voces: "começam", eles: "começam" },
    preterite: { eu: "comecei", tu: "começaste", voce: "começou", ele: "começou", nos: "começamos", vos: "começastes", voces: "começaram", eles: "começaram" },
    imperfect: { eu: "começava", tu: "começavas", voce: "começava", ele: "começava", nos: "começávamos", vos: "começáveis", voces: "começavam", eles: "começavam" },
    nearFuture: { eu: "vou começar", tu: "vais começar", voce: "vai começar", ele: "vai começar", nos: "vamos começar", vos: "ides começar", voces: "vão começar", eles: "vão começar" },
  } },
  { rank: 77, infinitive: "acontecer", translation: "suceder / pasar", family: "regular", forms: {
    present: { eu: "aconteço", tu: "aconteces", voce: "acontece", ele: "acontece", nos: "acontecemos", vos: "aconteceis", voces: "acontecem", eles: "acontecem" },
    preterite: { eu: "aconteci", tu: "aconteceste", voce: "aconteceu", ele: "aconteceu", nos: "acontecemos", vos: "acontecestes", voces: "aconteceram", eles: "aconteceram" },
    imperfect: { eu: "acontecia", tu: "acontecias", voce: "acontecia", ele: "acontecia", nos: "acontecíamos", vos: "acontecíeis", voces: "aconteciam", eles: "aconteciam" },
    nearFuture: { eu: "vou acontecer", tu: "vais acontecer", voce: "vai acontecer", ele: "vai acontecer", nos: "vamos acontecer", vos: "ides acontecer", voces: "vão acontecer", eles: "vão acontecer" },
  } },
  { rank: 78, infinitive: "precisar", translation: "necesitar", family: "regular", forms: {
    present: { eu: "preciso", tu: "precisas", voce: "precisa", ele: "precisa", nos: "precisamos", vos: "precisais", voces: "precisam", eles: "precisam" },
    preterite: { eu: "precisei", tu: "precisaste", voce: "precisou", ele: "precisou", nos: "precisamos", vos: "precisastes", voces: "precisaram", eles: "precisaram" },
    imperfect: { eu: "precisava", tu: "precisavas", voce: "precisava", ele: "precisava", nos: "precisávamos", vos: "precisáveis", voces: "precisavam", eles: "precisavam" },
    nearFuture: { eu: "vou precisar", tu: "vais precisar", voce: "vai precisar", ele: "vai precisar", nos: "vamos precisar", vos: "ides precisar", voces: "vão precisar", eles: "vão precisar" },
  } },
  { rank: 79, infinitive: "tornar", translation: "volver(se)", family: "regular", forms: {
    present: { eu: "torno", tu: "tornas", voce: "torna", ele: "torna", nos: "tornamos", vos: "tornais", voces: "tornam", eles: "tornam" },
    preterite: { eu: "tornei", tu: "tornaste", voce: "tornou", ele: "tornou", nos: "tornamos", vos: "tornastes", voces: "tornaram", eles: "tornaram" },
    imperfect: { eu: "tornava", tu: "tornavas", voce: "tornava", ele: "tornava", nos: "tornávamos", vos: "tornáveis", voces: "tornavam", eles: "tornavam" },
    nearFuture: { eu: "vou tornar", tu: "vais tornar", voce: "vai tornar", ele: "vai tornar", nos: "vamos tornar", vos: "ides tornar", voces: "vão tornar", eles: "vão tornar" },
  } },
  { rank: 80, infinitive: "lembrar", translation: "recordar", family: "regular", forms: {
    present: { eu: "lembro", tu: "lembras", voce: "lembra", ele: "lembra", nos: "lembramos", vos: "lembrais", voces: "lembram", eles: "lembram" },
    preterite: { eu: "lembrei", tu: "lembraste", voce: "lembrou", ele: "lembrou", nos: "lembramos", vos: "lembrastes", voces: "lembraram", eles: "lembraram" },
    imperfect: { eu: "lembrava", tu: "lembravas", voce: "lembrava", ele: "lembrava", nos: "lembrávamos", vos: "lembráveis", voces: "lembravam", eles: "lembravam" },
    nearFuture: { eu: "vou lembrar", tu: "vais lembrar", voce: "vai lembrar", ele: "vai lembrar", nos: "vamos lembrar", vos: "ides lembrar", voces: "vão lembrar", eles: "vão lembrar" },
  } },
  { rank: 81, infinitive: "esquecer", translation: "olvidar", family: "regular", forms: {
    present: { eu: "esqueço", tu: "esqueces", voce: "esquece", ele: "esquece", nos: "esquecemos", vos: "esqueceis", voces: "esquecem", eles: "esquecem" },
    preterite: { eu: "esqueci", tu: "esqueceste", voce: "esqueceu", ele: "esqueceu", nos: "esquecemos", vos: "esquecestes", voces: "esqueceram", eles: "esqueceram" },
    imperfect: { eu: "esquecia", tu: "esquecias", voce: "esquecia", ele: "esquecia", nos: "esquecíamos", vos: "esquecíeis", voces: "esqueciam", eles: "esqueciam" },
    nearFuture: { eu: "vou esquecer", tu: "vais esquecer", voce: "vai esquecer", ele: "vai esquecer", nos: "vamos esquecer", vos: "ides esquecer", voces: "vão esquecer", eles: "vão esquecer" },
  } },
  { rank: 82, infinitive: "encontrar", translation: "encontrar", family: "regular", forms: {
    present: { eu: "encontro", tu: "encontras", voce: "encontra", ele: "encontra", nos: "encontramos", vos: "encontrais", voces: "encontram", eles: "encontram" },
    preterite: { eu: "encontrei", tu: "encontraste", voce: "encontrou", ele: "encontrou", nos: "encontramos", vos: "encontrastes", voces: "encontraram", eles: "encontraram" },
    imperfect: { eu: "encontrava", tu: "encontravas", voce: "encontrava", ele: "encontrava", nos: "encontrávamos", vos: "encontráveis", voces: "encontravam", eles: "encontravam" },
    nearFuture: { eu: "vou encontrar", tu: "vais encontrar", voce: "vai encontrar", ele: "vai encontrar", nos: "vamos encontrar", vos: "ides encontrar", voces: "vão encontrar", eles: "vão encontrar" },
  } },
  { rank: 83, infinitive: "receber", translation: "recibir", family: "regular", forms: {
    present: { eu: "recebo", tu: "recebes", voce: "recebe", ele: "recebe", nos: "recebemos", vos: "recebeis", voces: "recebem", eles: "recebem" },
    preterite: { eu: "recebi", tu: "recebeste", voce: "recebeu", ele: "recebeu", nos: "recebemos", vos: "recebestes", voces: "receberam", eles: "receberam" },
    imperfect: { eu: "recebia", tu: "recebias", voce: "recebia", ele: "recebia", nos: "recebíamos", vos: "recebíeis", voces: "recebiam", eles: "recebiam" },
    nearFuture: { eu: "vou receber", tu: "vais receber", voce: "vai receber", ele: "vai receber", nos: "vamos receber", vos: "ides receber", voces: "vão receber", eles: "vão receber" },
  } },
  { rank: 84, infinitive: "perder", translation: "perder", family: "irregular", forms: {
    present: { eu: "perco", tu: "perdes", voce: "perde", ele: "perde", nos: "perdemos", vos: "perdeis", voces: "perdem", eles: "perdem" },
    preterite: { eu: "perdi", tu: "perdeste", voce: "perdeu", ele: "perdeu", nos: "perdemos", vos: "perdestes", voces: "perderam", eles: "perderam" },
    imperfect: { eu: "perdia", tu: "perdias", voce: "perdia", ele: "perdia", nos: "perdíamos", vos: "perdíeis", voces: "perdiam", eles: "perdiam" },
    nearFuture: { eu: "vou perder", tu: "vais perder", voce: "vai perder", ele: "vai perder", nos: "vamos perder", vos: "ides perder", voces: "vão perder", eles: "vão perder" },
  } },
  { rank: 85, infinitive: "entrar", translation: "entrar", family: "regular", forms: {
    present: { eu: "entro", tu: "entras", voce: "entra", ele: "entra", nos: "entramos", vos: "entrais", voces: "entram", eles: "entram" },
    preterite: { eu: "entrei", tu: "entraste", voce: "entrou", ele: "entrou", nos: "entramos", vos: "entrastes", voces: "entraram", eles: "entraram" },
    imperfect: { eu: "entrava", tu: "entravas", voce: "entrava", ele: "entrava", nos: "entrávamos", vos: "entráveis", voces: "entravam", eles: "entravam" },
    nearFuture: { eu: "vou entrar", tu: "vais entrar", voce: "vai entrar", ele: "vai entrar", nos: "vamos entrar", vos: "ides entrar", voces: "vão entrar", eles: "vão entrar" },
  } },
  { rank: 86, infinitive: "levar", translation: "llevar", family: "regular", forms: {
    present: { eu: "levo", tu: "levas", voce: "leva", ele: "leva", nos: "levamos", vos: "levais", voces: "levam", eles: "levam" },
    preterite: { eu: "levei", tu: "levaste", voce: "levou", ele: "levou", nos: "levamos", vos: "levastes", voces: "levaram", eles: "levaram" },
    imperfect: { eu: "levava", tu: "levavas", voce: "levava", ele: "levava", nos: "levávamos", vos: "leváveis", voces: "levavam", eles: "levavam" },
    nearFuture: { eu: "vou levar", tu: "vais levar", voce: "vai levar", ele: "vai levar", nos: "vamos levar", vos: "ides levar", voces: "vão levar", eles: "vão levar" },
  } },
  { rank: 87, infinitive: "trazer", translation: "traer", family: "irregular", forms: {
    present: { eu: "trago", tu: "trazes", voce: "traz", ele: "traz", nos: "trazemos", vos: "trazeis", voces: "trazem", eles: "trazem" },
    preterite: { eu: "trouxe", tu: "trouxeste", voce: "trouxe", ele: "trouxe", nos: "trouxemos", vos: "trouxestes", voces: "trouxeram", eles: "trouxeram" },
    imperfect: { eu: "trazia", tu: "trazias", voce: "trazia", ele: "trazia", nos: "trazíamos", vos: "trazíeis", voces: "traziam", eles: "traziam" },
    nearFuture: { eu: "vou trazer", tu: "vais trazer", voce: "vai trazer", ele: "vai trazer", nos: "vamos trazer", vos: "ides trazer", voces: "vão trazer", eles: "vão trazer" },
  } },
  { rank: 88, infinitive: "tirar", translation: "sacar / quitar", family: "regular", forms: {
    present: { eu: "tiro", tu: "tiras", voce: "tira", ele: "tira", nos: "tiramos", vos: "tirais", voces: "tiram", eles: "tiram" },
    preterite: { eu: "tirei", tu: "tiraste", voce: "tirou", ele: "tirou", nos: "tiramos", vos: "tirastes", voces: "tiraram", eles: "tiraram" },
    imperfect: { eu: "tirava", tu: "tiravas", voce: "tirava", ele: "tirava", nos: "tirávamos", vos: "tiráveis", voces: "tiravam", eles: "tiravam" },
    nearFuture: { eu: "vou tirar", tu: "vais tirar", voce: "vai tirar", ele: "vai tirar", nos: "vamos tirar", vos: "ides tirar", voces: "vão tirar", eles: "vão tirar" },
  } },
  { rank: 89, infinitive: "tomar", translation: "tomar", family: "regular", forms: {
    present: { eu: "tomo", tu: "tomas", voce: "toma", ele: "toma", nos: "tomamos", vos: "tomais", voces: "tomam", eles: "tomam" },
    preterite: { eu: "tomei", tu: "tomaste", voce: "tomou", ele: "tomou", nos: "tomamos", vos: "tomastes", voces: "tomaram", eles: "tomaram" },
    imperfect: { eu: "tomava", tu: "tomavas", voce: "tomava", ele: "tomava", nos: "tomávamos", vos: "tomáveis", voces: "tomavam", eles: "tomavam" },
    nearFuture: { eu: "vou tomar", tu: "vais tomar", voce: "vai tomar", ele: "vai tomar", nos: "vamos tomar", vos: "ides tomar", voces: "vão tomar", eles: "vão tomar" },
  } },
  { rank: 90, infinitive: "procurar", translation: "buscar", family: "regular", forms: {
    present: { eu: "procuro", tu: "procuras", voce: "procura", ele: "procura", nos: "procuramos", vos: "procurais", voces: "procuram", eles: "procuram" },
    preterite: { eu: "procurei", tu: "procuraste", voce: "procurou", ele: "procurou", nos: "procuramos", vos: "procurastes", voces: "procuraram", eles: "procuraram" },
    imperfect: { eu: "procurava", tu: "procuravas", voce: "procurava", ele: "procurava", nos: "procurávamos", vos: "procuráveis", voces: "procuravam", eles: "procuravam" },
    nearFuture: { eu: "vou procurar", tu: "vais procurar", voce: "vai procurar", ele: "vai procurar", nos: "vamos procurar", vos: "ides procurar", voces: "vão procurar", eles: "vão procurar" },
  } },
  { rank: 91, infinitive: "considerar", translation: "considerar", family: "regular", forms: {
    present: { eu: "considero", tu: "consideras", voce: "considera", ele: "considera", nos: "consideramos", vos: "considerais", voces: "consideram", eles: "consideram" },
    preterite: { eu: "considerei", tu: "consideraste", voce: "considerou", ele: "considerou", nos: "consideramos", vos: "considerastes", voces: "consideraram", eles: "consideraram" },
    imperfect: { eu: "considerava", tu: "consideravas", voce: "considerava", ele: "considerava", nos: "considerávamos", vos: "consideráveis", voces: "consideravam", eles: "consideravam" },
    nearFuture: { eu: "vou considerar", tu: "vais considerar", voce: "vai considerar", ele: "vai considerar", nos: "vamos considerar", vos: "ides considerar", voces: "vão considerar", eles: "vão considerar" },
  } },
  { rank: 92, infinitive: "apresentar", translation: "presentar", family: "regular", forms: {
    present: { eu: "apresento", tu: "apresentas", voce: "apresenta", ele: "apresenta", nos: "apresentamos", vos: "apresentais", voces: "apresentam", eles: "apresentam" },
    preterite: { eu: "apresentei", tu: "apresentaste", voce: "apresentou", ele: "apresentou", nos: "apresentamos", vos: "apresentastes", voces: "apresentaram", eles: "apresentaram" },
    imperfect: { eu: "apresentava", tu: "apresentavas", voce: "apresentava", ele: "apresentava", nos: "apresentávamos", vos: "apresentáveis", voces: "apresentavam", eles: "apresentavam" },
    nearFuture: { eu: "vou apresentar", tu: "vais apresentar", voce: "vai apresentar", ele: "vai apresentar", nos: "vamos apresentar", vos: "ides apresentar", voces: "vão apresentar", eles: "vão apresentar" },
  } },
  { rank: 93, infinitive: "criar", translation: "crear", family: "regular", forms: {
    present: { eu: "crio", tu: "crias", voce: "cria", ele: "cria", nos: "criamos", vos: "criais", voces: "criam", eles: "criam" },
    preterite: { eu: "criei", tu: "criaste", voce: "criou", ele: "criou", nos: "criamos", vos: "criastes", voces: "criaram", eles: "criaram" },
    imperfect: { eu: "criava", tu: "criavas", voce: "criava", ele: "criava", nos: "criávamos", vos: "criáveis", voces: "criavam", eles: "criavam" },
    nearFuture: { eu: "vou criar", tu: "vais criar", voce: "vai criar", ele: "vai criar", nos: "vamos criar", vos: "ides criar", voces: "vão criar", eles: "vão criar" },
  } },
  { rank: 94, infinitive: "manter", translation: "mantener", family: "irregular", forms: {
    present: { eu: "mantenho", tu: "manténs", voce: "mantém", ele: "mantém", nos: "mantemos", vos: "mantendes", voces: "mantêm", eles: "mantêm" },
    preterite: { eu: "mantive", tu: "mantiveste", voce: "manteve", ele: "manteve", nos: "mantivemos", vos: "mantivestes", voces: "mantiveram", eles: "mantiveram" },
    imperfect: { eu: "mantinha", tu: "mantinhas", voce: "mantinha", ele: "mantinha", nos: "mantínhamos", vos: "mantínheis", voces: "mantinham", eles: "mantinham" },
    nearFuture: { eu: "vou manter", tu: "vais manter", voce: "vai manter", ele: "vai manter", nos: "vamos manter", vos: "ides manter", voces: "vão manter", eles: "vão manter" },
  } },
  { rank: 95, infinitive: "aparecer", translation: "aparecer", family: "regular", forms: {
    present: { eu: "apareço", tu: "apareces", voce: "aparece", ele: "aparece", nos: "aparecemos", vos: "apareceis", voces: "aparecem", eles: "aparecem" },
    preterite: { eu: "apareci", tu: "apareceste", voce: "apareceu", ele: "apareceu", nos: "aparecemos", vos: "aparecestes", voces: "apareceram", eles: "apareceram" },
    imperfect: { eu: "aparecia", tu: "aparecias", voce: "aparecia", ele: "aparecia", nos: "aparecíamos", vos: "aparecíeis", voces: "apareciam", eles: "apareciam" },
    nearFuture: { eu: "vou aparecer", tu: "vais aparecer", voce: "vai aparecer", ele: "vai aparecer", nos: "vamos aparecer", vos: "ides aparecer", voces: "vão aparecer", eles: "vão aparecer" },
  } },
  { rank: 96, infinitive: "oferecer", translation: "ofrecer", family: "regular", forms: {
    present: { eu: "ofereço", tu: "ofereces", voce: "oferece", ele: "oferece", nos: "oferecemos", vos: "ofereceis", voces: "oferecem", eles: "oferecem" },
    preterite: { eu: "ofereci", tu: "ofereceste", voce: "ofereceu", ele: "ofereceu", nos: "oferecemos", vos: "oferecestes", voces: "ofereceram", eles: "ofereceram" },
    imperfect: { eu: "oferecia", tu: "oferecias", voce: "oferecia", ele: "oferecia", nos: "oferecíamos", vos: "oferecíeis", voces: "ofereciam", eles: "ofereciam" },
    nearFuture: { eu: "vou oferecer", tu: "vais oferecer", voce: "vai oferecer", ele: "vai oferecer", nos: "vamos oferecer", vos: "ides oferecer", voces: "vão oferecer", eles: "vão oferecer" },
  } },
  { rank: 97, infinitive: "cair", translation: "caer", family: "irregular", forms: {
    present: { eu: "caio", tu: "cais", voce: "cai", ele: "cai", nos: "caímos", vos: "caís", voces: "caem", eles: "caem" },
    preterite: { eu: "caí", tu: "caíste", voce: "caiu", ele: "caiu", nos: "caímos", vos: "caístes", voces: "caíram", eles: "caíram" },
    imperfect: { eu: "caía", tu: "caías", voce: "caía", ele: "caía", nos: "caíamos", vos: "caíeis", voces: "caíam", eles: "caíam" },
    nearFuture: { eu: "vou cair", tu: "vais cair", voce: "vai cair", ele: "vai cair", nos: "vamos cair", vos: "ides cair", voces: "vão cair", eles: "vão cair" },
  } },
  { rank: 98, infinitive: "ganhar", translation: "ganar", family: "regular", forms: {
    present: { eu: "ganho", tu: "ganhas", voce: "ganha", ele: "ganha", nos: "ganhamos", vos: "ganhais", voces: "ganham", eles: "ganham" },
    preterite: { eu: "ganhei", tu: "ganhaste", voce: "ganhou", ele: "ganhou", nos: "ganhamos", vos: "ganhastes", voces: "ganharam", eles: "ganharam" },
    imperfect: { eu: "ganhava", tu: "ganhavas", voce: "ganhava", ele: "ganhava", nos: "ganhávamos", vos: "ganháveis", voces: "ganhavam", eles: "ganhavam" },
    nearFuture: { eu: "vou ganhar", tu: "vais ganhar", voce: "vai ganhar", ele: "vai ganhar", nos: "vamos ganhar", vos: "ides ganhar", voces: "vão ganhar", eles: "vão ganhar" },
  } },
  { rank: 99, infinitive: "pagar", translation: "pagar", family: "regular", forms: {
    present: { eu: "pago", tu: "pagas", voce: "paga", ele: "paga", nos: "pagamos", vos: "pagais", voces: "pagam", eles: "pagam" },
    preterite: { eu: "paguei", tu: "pagaste", voce: "pagou", ele: "pagou", nos: "pagamos", vos: "pagastes", voces: "pagaram", eles: "pagaram" },
    imperfect: { eu: "pagava", tu: "pagavas", voce: "pagava", ele: "pagava", nos: "pagávamos", vos: "pagáveis", voces: "pagavam", eles: "pagavam" },
    nearFuture: { eu: "vou pagar", tu: "vais pagar", voce: "vai pagar", ele: "vai pagar", nos: "vamos pagar", vos: "ides pagar", voces: "vão pagar", eles: "vão pagar" },
  } },
  { rank: 100, infinitive: "comer", translation: "comer", family: "regular", forms: {
    present: { eu: "como", tu: "comes", voce: "come", ele: "come", nos: "comemos", vos: "comeis", voces: "comem", eles: "comem" },
    preterite: { eu: "comi", tu: "comeste", voce: "comeu", ele: "comeu", nos: "comemos", vos: "comestes", voces: "comeram", eles: "comeram" },
    imperfect: { eu: "comia", tu: "comias", voce: "comia", ele: "comia", nos: "comíamos", vos: "comíeis", voces: "comiam", eles: "comiam" },
    nearFuture: { eu: "vou comer", tu: "vais comer", voce: "vai comer", ele: "vai comer", nos: "vamos comer", vos: "ides comer", voces: "vão comer", eles: "vão comer" },
  } },
];
