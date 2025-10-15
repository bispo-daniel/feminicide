import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

type Likert = 0 | 1 | 2 | 3 | 4;

interface Question {
  id: string;
  text: string;
  critical?: boolean;
  weight?: number;
}

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz.component.html',
})
export class QuizComponent {
  likert = [
    { value: 0 as Likert, label: 'Nunca', helper: 'ou não se aplica' },
    { value: 1 as Likert, label: 'Raramente', helper: 'quase nunca' },
    { value: 2 as Likert, label: 'Às vezes', helper: 'algumas vezes' },
    { value: 3 as Likert, label: 'Frequentemente', helper: 'muitas vezes' },
    { value: 4 as Likert, label: 'Sempre', helper: 'quase sempre' },
  ];

  questions: Question[] = [
    {
      id: 'ameacaMorte',
      text: 'A pessoa agressora já ameaçou tirar sua vida?',
      critical: true,
    },
    {
      id: 'armaAcesso',
      text: 'A pessoa agressora tem acesso a arma (de fogo ou outras)?',
      critical: true,
    },
    {
      id: 'estrangula',
      text: 'Já houve estrangulamento/sufocamento?',
      critical: true,
    },
    {
      id: 'escala',
      text: 'A violência tem aumentado em frequência ou gravidade?',
      critical: true,
    },
    {
      id: 'controle',
      text: 'Há controle extremo de suas atividades (ciúmes, vigilância, senhas)?',
    },
    {
      id: 'isolamento',
      text: 'Você se sente isolada de amigos/família por conta do agressor?',
    },
    {
      id: 'separacao',
      text: 'Houve separação recente ou você pensa em terminar o relacionamento?',
      critical: true,
    },
  ];

  total = this.questions.length;

  private _answers = signal<Record<string, Likert | null>>(
    Object.fromEntries(this.questions.map((q) => [q.id, null]))
  );
  answers = this._answers.asReadonly();

  setAnswer(id: string, v: Likert) {
    this._answers.update((s) => ({ ...s, [id]: v }));
  }
  skip(id: string) {
    this._answers.update((s) => ({ ...s, [id]: null }));
  }
  reset() {
    this._answers.set(
      Object.fromEntries(this.questions.map((q) => [q.id, null]))
    );
    this._result.set(null);
  }
  trackById = (_: number, q: Question) => q.id;

  answeredCount = computed(
    () => Object.values(this.answers()).filter((v) => v !== null).length
  );
  progressPct = computed(() =>
    Math.round((this.answeredCount() / this.total) * 100)
  );

  private score = computed(() => {
    let sum = 0;
    let criticalHit = false;
    for (const q of this.questions) {
      const v = this.answers()[q.id];
      if (v !== null) {
        const w = q.weight ?? 1;
        sum += v * w;
        if (q.critical && v >= 3) criticalHit = true;
      }
    }
    return { sum, criticalHit };
  });

  private _result = signal<null | {
    level: 'atencao' | 'alerta' | 'maximo';
    label: string;
  }>(null);
  result = this._result.asReadonly();

  submit(e: Event) {
    e.preventDefault();
    const { sum, criticalHit } = this.score();
    let level: 'atencao' | 'alerta' | 'maximo';
    if (criticalHit || sum >= 25) level = 'maximo';
    else if (sum >= 13) level = 'alerta';
    else level = 'atencao';
    this._result.set({ level, label: this.resultLabel(level) });
  }

  private resultLabel(level: 'atencao' | 'alerta' | 'maximo') {
    if (level === 'maximo')
      return 'Alerta máximo: considere acionar 190 e buscar ajuda imediatamente (180/DEAM).';
    if (level === 'alerta')
      return 'Alerta: procure orientação (180) e avalie medidas de proteção (DEAM).';
    return 'Atenção: observe sinais, fortaleça sua rede de apoio e registre ocorrências com segurança.';
  }

  panicExit() {
    window.location.replace('https://www.google.com');
  }
}
