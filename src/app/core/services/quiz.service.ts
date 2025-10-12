import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, map } from 'rxjs';

export interface QuizRaw {
  correct_answer: string;
  wrong1: string;
  wrong2: string;
  question: string;
}

export interface QuizQuestion {
  question: string; // texto da pergunta
  options: string[]; // sempre 3 alternativas, já embaralhadas
  correct: number; // índice da opção correta dentro de options
}

@Injectable({ providedIn: 'root' })
export class QuizService {
  private readonly api = 'https://quiz-crias-drummond.onrender.com/quiz/answer';

  constructor(private http: HttpClient) {}

  /** Busca, converte e devolve as 15 questões prontas para uso. */
  async getQuiz(): Promise<QuizQuestion[]> {
    return firstValueFrom(
      this.http.get<QuizRaw[]>(this.api).pipe(
        map((raw) =>
          raw.map((q) => {
            // gera array e embaralha
            const options = shuffle([q.correct_answer, q.wrong1, q.wrong2]);
            return {
              question: q.question,
              options,
              correct: options.indexOf(q.correct_answer),
            } as QuizQuestion;
          })
        )
      )
    );
  }
}

/* ---------- util ---------- */
function shuffle<T>(arr: T[]): T[] {
  return [...arr]
    .map((v) => ({ sort: Math.random(), value: v }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}
