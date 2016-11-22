/**
 * @author Kate
 */

var grammars = {
  story : {
    name: ["Max", "Lee", "Willa", "Bella", "Hermione", "Christopher Robin"],
    person: ["princess", "little girl", "witch"],
    kind: ["kind", "pretty", "brave", "strong"],
    mean: ["mean", "ugly", "cowardly", "weak"],
    relation: ["mother", "sister", "friend", "nemesis"],
    establish: ["Once, a long time ago, there was a #kind# #person# named #name#"],
    someone: ["#name#", "#name#'s #relation#"],
    transition: ["The next day,", "Meanwhile,", "Six months later,", "Ten years later,"],
    incite: ["#someone.capitalize# dies", "#someone.capitalize# is kidnapped", "#someone.capitalize# curses the land", "A stranger named #name# arrives"],
    wrongdoing: ["killing #name#", "stealing the #thing#"],
    response: ["#someone.capitalize# decides to investigate", "#someone.capitalize# mourns", "#someone.capitalize# suspects #someone# of #wrongdoing#", "#someone.capitalize# agrees to go along"],
    accusation: ["Did you bring the #thing#?", "Why can't you do anything right?", "Why are your expectations of me so high??"],
    retort: ["I thought you had it!", "I'm sorry, but... #accusation#", "I'm just so tired."],
    argument: ["<br>'#accusation#'<br>'#retort#'<br>#argument#", "'Ugh.' 'Sigh.'<br>"],
    place: ["the castle", "the woods", "the lake", "the river", "the cliff"],
    progress: ["they reach #place#", "they find evidence", "they devise a plan"],
    ally: ["#name#, a #person#"],
    delay: ["spiders", "a trap", "#incite#"],
    newthing: ["#thing.a#"],
    thing: ["shiny stone", "ring of invisibility", "wand", "potion"],
    event: ["they argue: #argument#", "they progress: #progress#", "they meet an ally: #ally#", "they are delayed: #delay#", "they find a powerful object: #newthing#"],
    eventResponse: ["#event#. #response#"],
    scene: ["#eventResponse#. #eventResponse.capitalize#. #eventResponse.capitalize#"],
    capsScene: ["#scene.capitalize#"],
    firstScene: ["#transition# #scene#", "#capsScene#"],
    break: ["<br><br>"],
    chapter: ["#firstScene#. #capsScene#.#break# #capsScene#.#break# #capsScene#.#break# #capsScene#.#break# #capsScene#"],
    prolong: ["#chapter#.<br><h2>CHAPTER 2</h2>#chapter#.<br><h2>CHAPTER 3</h2> #chapter#.<br><h2>CHAPTER 4</h2> #chapter#"],
    defeatVillain: ["Ultimately, the villain #name# crumples in defeat"],
    everyoneDies: ["Rocks fall. Everyone dies"],
    climaxChapter: ["#chapter#.<br><br> #defeatVillain#", "#chapter#.<br><br>#everyoneDies#"],
    climax: ["<br><h2>CHAPTER 5</h2> #climaxChapter#"],
    denoument: ["<br><h2>CHAPTER 5</h2> #denoumentChapter#"],
    denoumentChapter: ["A new generation is born", "The new power rises", "They return home and had a meal", "They lived happily ever after"],
    plot: ["<h2>CHAPTER 1</h2>#establish#. #incite#. #prolong#. #climax#. #denoument#."],
    origin :
      [ "#plot#" ]
  }
}
