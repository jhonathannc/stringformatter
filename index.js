// Formatador de string padrão abnt
var commingstr, formattedStr

exports.formatStr = (string) => {
    commingstr = string

    wordsArray = string.toLowerCase()
        .split(' ')

    wordsArray.forEach((word, index) => {
        switch (index) {
            case 0:
                wordsArray[index] = word.charAt(0).toUpperCase() + word.slice(1)
                break
        }
        if (word.indexOf('.') > -1 && (wordsArray[index + 1] != null)) {
            wordarr = wordsArray[index + 1]
            wordsArray[index + 1] = wordarr.charAt(0).toUpperCase() + wordarr.slice(1)
            // console.log(wordsArray[index + 1])
        }
    })
    formattedStr = wordsArray.join(' ')
    messages()
    return {
        formattedStr
    }
}

const messages = () => {
    console.log('|-> Comming: ' + commingstr)
    console.log('|---')
    console.log('|-> Outing: ' + formattedStr)
    console.log('|---')
    console.log('|---')
    console.log('|-> Check the author of lib in: http://github.com/jhonathannc')
    console.log('|-> Wanna contribute? Check in: http://github.com/jhonathannc/stringformatter')
}