let times = [
    ["Vasco", 0, 0],
    ["Cruzeiro", 0, 0],
    ["Grêmio", 0, 0]
]

times.push(["Flamengo", 0, 0])
times.push(["Corinthians", 0, 0])

let partida = 0;
for (let i = 0; i < times.length; i++) {

    for (let j = 0; j < times.length; j++) {

        if (times[i] !== times[j]) {
            partida++;
            const maxGols = Math.round(Math.random() * 6 + 1)

            const c = golsTimeDaCasa = Math.round(Math.random() * maxGols)
            const v = golsTimeVisitante = Math.round(Math.random() * maxGols)
            console.log(`Partida [${partida}]: ${times[i][0]} [${c}] x [${v}] ${times[j][0]}
            `)
            if (c > v) {
                times[i][1] += 3 //pontos
                times[i][2] += c //gols

                times[j][2] += v //gols

            } else
                if (v > c) {
                    times[j][1] += 3 //pontos
                    times[j][2] += v //gols

                    times[i][2] += c //gols
                } else {
                    times[i][1]++
                    times[i][2] += c

                    times[j][1]++
                    times[j][2] += v
                }
        }
    }

}

//ordenando os times
times.sort(function (a, b) {
    if (a[1] > b[1]) {
        return 1
    }
    else
        if (a[1] < b[1]) {
            return -1
        }
        else
            if (a[2] > b[2])
                return 1
            else
                if (a[2] < b[2])
                    return -1

    return 0;
})

times.reverse()
console.log("Lista ordenada: ", times)
console.log(`Parabéns ${times[0][0]}, o novo Campeão, com ${times[0][1]} pontos e ${times[0][2]} gols feitos!`)