import type { TKey } from '@dldc/erreur';
import { Erreur, Key } from '@dldc/erreur';

export const HumpfErreur = (() => {
  const InvalidDamperRatioKey: TKey<{ received: number }> = Key.create('InvalidDamperRatio');
  const InvalidAngularFrequencyKey: TKey<{ received: number }> = Key.create('InvalidAngularFrequency');

  return {
    InvalidDamperRatio: {
      Key: InvalidDamperRatioKey,
      create(received: number) {
        return Erreur.createWith(InvalidDamperRatioKey, { received }).withMessage(
          `Damping Ration must be >= 0 (received: ${received})`,
        );
      },
    },
    InvalidAngularFrequency: {
      Key: InvalidAngularFrequencyKey,
      create(received: number) {
        return Erreur.createWith(InvalidAngularFrequencyKey, { received }).withMessage(
          `Angular Frequency must be >= 0 (received: ${received})`,
        );
      },
    },
  };
})();
