//input = 2
//output = ["rr", "rp", "rs", "pr", "pp", "ps", "sr", "sp","ss"]

rps = round => {
    let results = [];
    let mix = ['r','p','s'];
    play = (played, round) => {
      if(round === 0) return results.push(played);   
      for(let i in mix) {
        play(played + mix[i], round-1);
      }
    }
    play('', round);
    return results;
  }
  rps(4);