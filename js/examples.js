const C = document.querySelector("canvas"),
  $ = C.getContext("2d"),
  W = C.width = innerWidth,
  H = C.height = innerHeight 

const str = "お好みのトッピングを用意: しいたけとたけのこを少量の醤油で炒めると風味が増します。 ナルトのさつま揚げ自体にはあまり風味がありませんが、ピンクの渦巻きがラーメンのスープに彩りを加えているので、いくつかスライスしてください. ねぎラーメンと呼ばれる 100% ビーガン ラーメンを作るために、ねぎと海苔をたくさん入れることもできます。 ラーメンスープを準備する: ラーメンを調理している間に、ソースをボウルのお湯で薄めます。 使用する水の量は、スープの味の濃さによって異なります。 スープベースに約250mlの水を加えることから始め、ちょうどいい味になるまで少量の水を加えます. ラーメンのスープ、醤油、味噌、どれが一番合うのか迷ってしまうかもしれません。 醤油ダシはあっさりとした塩味、味噌ダシは北海道産のコクのある味わいです。 みそ汁は少しとろみがあり、塩味が強い傾向があります。トッピングを準備します。最後に、麺とスープをボウルに入れ、準備したトッピングを加えます。 多くの種類の日本料理と同様に、完璧な一杯のラーメンには盛り付けが重要です。 日本人が言うように、空腹感の多くは胃ではなく目から来るものです。チップとんこつラーメンは、豚骨を使用した白濁スープが濃厚な味わいで人気です。 とんこつは、日本の南にある九州の島にある博多市の名物です。札幌ラーメンは、もやし、豚肉、バター、とうもろこしを炒めたラーメンにみそ汁を使用しています。 北海道の寒い冬を暖かく過ごせる濃厚な一品。東京ラーメンは、うどんやそばの出汁に通常使用される少量のダシをベースにした醤油です。横浜ラーメンはとんこつに似たスープで作られています。",
  matrix = str.split('')

let font = 11,
  col = W / font
  arr = []

for(let i = 0; i < col; i++) arr[i] = 1

function draw() {
  $.fillStyle = "rgba(0, 0, 0, .05)"
    
  $.fillRect(0, 0, W, H)
    
  $.fillStyle = "#0f0"
    
  $.font = font + "px system-ui"
    
  for (let i = 0; i < arr.length; i++) {
    let txt = matrix[Math.floor(Math.random() * matrix.length)]
    $.fillText(txt, i * font, arr[i] * font)
    if (arr[i] * font > H && Math.random() > 0.975) arr[i] = 0
    arr[i]++
    }
}

setInterval(draw, 123)

window.addEventListener('resize', () => location.reload())