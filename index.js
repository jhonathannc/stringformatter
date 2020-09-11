// Formatador de string padrão abnt
exports.formatStr = (string) => {
    words = string.toLowerCase().split(' ')
    for (index = 0; index < words.length - 1; index++) {
        words[index] += ' '
    }
}