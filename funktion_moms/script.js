function beregnPrisMedMoms(beloeb, moms = 25) {
  // formel
  const total = beloeb * (1 + moms / 100);

  console.log(`Beløbet med ${moms}% moms: ${total}`);
}
//For at teste, hvordan funktionen virker, kaldte jeg den med forskellige argumenter:

beregnPrisMedMoms(100); // Bruger default moms = 25%
beregnPrisMedMoms(200, 10); // Moms = 10%
