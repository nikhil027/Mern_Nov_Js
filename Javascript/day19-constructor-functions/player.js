function Player(name, runs, country) {
    this.name = name
    this.runs = runs
    this.country = country
    this.totalMatches = function () {
        return this.runs.length
    }
    this.avgRuns = function () {
        let total = 0
        this.runs.forEach(function (score) {
            total += score
        })
        return total / this.runs.length
    }
}

let p1 = new Player('Virat', [100,85,120], 'India')
console.log(p1.name, p1.runs, p1.country, p1.totalMatches(), p1.avgRuns())

let p2 = new Player()
p2.name = 'Dhoni'
p2.runs = [55,65,85,07]
p2.country = 'India'
console.log(p2.name, p2.runs, p2.country, p2.totalMatches(), p2.avgRuns())