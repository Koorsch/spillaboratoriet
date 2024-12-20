import React from 'react';

export default async function ProjectBriefPage() {
  return (
<section>
    <div className="container mx-auto px-6 md:px-12 lg:px-20 prose">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 text-center mb-6">Løsningen</h2>
        <p className="text-md leading-relaxed mb-4">
            Vores løsning er en centraliseret platform designet specifikt til Spillelaboratoriets "laboranter". Denne hjemmeside fungerer som et samlingssted, der erstatter behovet for at jonglere mellem forskellige platforme som Facebook, Messenger, WhatsApp, og Discord. Med vores løsning kan alt organiseres ét sted.
        </p>
        <p className="text-md leading-relaxed mb-4">
            Platformen gør det nemt at planlægge, koordinere og deltage i aktiviteter. Den tilbyder funktioner som oprettelse af events, søgning efter spilgrupper og deling af ressourcer. Målet er at forenkle og forbedre kommunikation og organisering, så Spillelaboratoriets fællesskab kan fokusere på det vigtigste – at nørde og have det sjovt!
        </p>
        <p className="text-md leading-relaxed mb-6">
            På sigt vil løsningen udvikle sig til en app, der dækker alle de organisatoriske behov, som "laboranterne" har. Dette inkluderer værktøjer til at finde spilpartnere, få overblik over kommende aktiviteter og dele feedback. Vores vision er at skabe et værktøj, der gør det lettere og sjovere at være en del af Spillelaboratoriets fællesskab.
        </p>
    </div>
</section>
  );
}
