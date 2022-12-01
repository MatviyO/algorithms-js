//граф пошук в ширину, сруктура даних яка має багато вершин і набір ребер, приклад  це карта, ребра  бувають одна направлеі і дво
const graph = {}

graph.a = ['b', 'c'];
graph.b = ['f']
graph.c = ['d', 'e']
graph.d = ['f']
graph.e = ['f']
graph.f = ['g']

function breadSearch(graph, start, end) {
    let queue = []
    queue.push(start)
    while (queue.length > 0) {
        const current = queue.shift()
        if (!graph[current]) {
            graph[current] = []
        }
        if (graph[current].includes(end)) {
            return true
        } else {
            queue = [...queue, ...graph[current]]
        }
    }
}


console.log(breadSearch(graph, 'a',  'g'))
