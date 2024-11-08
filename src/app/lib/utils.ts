
export function geraLinks( link : string, quantidade : number){
  const array = []

  for(let i = 1; i <= quantidade; i++){
    array.push(`${link}${i}.webp`)
  }
  return array
}
